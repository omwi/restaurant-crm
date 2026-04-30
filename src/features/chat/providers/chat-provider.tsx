import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import { useAuth } from "@/features/auth/hooks/use-auth"
import type { User } from "@/features/auth/types/types"
import type { ChildrenProp } from "@/types/types"

import { ChatContext, type Message } from "../context/chat-context"

const SOCKET_URL = "wss://ws.ifelse.io"
const MESSAGES_KEY = "messages"

export default function ChatProvider({ children }: ChildrenProp) {
  const queryClient = useQueryClient()

  const [socket, setSocket] = useState<WebSocket | null>(null)
  const isConnected = socket !== null && socket.readyState === WebSocket.OPEN

  const { data: messages = [] } = useQuery<Message[]>({
    queryKey: [MESSAGES_KEY],
    queryFn: () => [],
    staleTime: Infinity,
  })

  const { user } = useAuth()

  useEffect(() => {
    const websocket = new WebSocket(SOCKET_URL)
    websocket.onopen = () => setSocket(websocket)
    websocket.onmessage = (event) => {
      const data = event.data
      try {
        const message = mapServerMessage(parseMessage(data))
        queryClient.setQueryData(
          [MESSAGES_KEY],
          (old: Message[] | undefined) => {
            if (!old) {
              return [message]
            }
            if (old.find((m) => m.id === message.id)) {
              return old
            }
            return [...old, message]
          }
        )
      } catch (error) {
        if (error instanceof SyntaxError) {
          console.warn("Ignoring malformed message:", data)
        } else {
          throw error
        }
      }
    }

    websocket.onclose = () => setSocket(null)
    websocket.onerror = () => setSocket(null)
    return () => websocket.close()
  }, [queryClient])

  const mutation = useMutation({
    mutationFn: async (message: Message) => sendSocketMessage(message),
    onMutate: async (message) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: [MESSAGES_KEY] })
      const previousMessages = queryClient.getQueryData<Message[]>([
        MESSAGES_KEY,
      ])
      queryClient.setQueryData([MESSAGES_KEY], (old: Message[] | undefined) => [
        ...(old || []),
        message,
      ])
      return { previousMessages }
    },
    onError: (_error, _newMessage, context) => {
      // Rollback on error
      queryClient.setQueryData([MESSAGES_KEY], context?.previousMessages)
    },
  })

  function sendSocketMessage(message: Message) {
    if (!isConnected) {
      throw new Error("Socket is not connected")
    }
    socket.send(JSON.stringify(message))
  }

  function sendMessage(text: string) {
    const message = createMessage(text, user)
    mutation.mutate(message)
  }

  return (
    <ChatContext value={{ messages, sendMessage, isConnected }}>
      {children}
    </ChatContext>
  )
}

function createMessage(text: string, user: User | null): Message {
  if (!user) {
    throw new Error("User is not logged in")
  }
  return {
    id: crypto.randomUUID(),
    message: text,
    author: `${user.lastName} ${user.firstName}`,
    username: user.username,
    avatar: user.avatarUrl,
    timestamp: new Date().toISOString(),
  }
}

function parseMessage(responseText: string): Message {
  const json = JSON.parse(responseText)
  return {
    id: json.id,
    message: json.message,
    author: json.author,
    username: json.username,
    avatar: json.avatar,
    timestamp: json.timestamp,
  }
}

function mapServerMessage(message: Message): Message {
  return {
    ...message,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    username: "server",
    author: "Server",
  }
}
