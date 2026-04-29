import { createContext } from "react"

export type Message = {
  id: string
  message: string
  author: string
  username: string
  avatar: string
  timestamp: string
}

export type ChatContext = {
  messages: Message[]
  sendMessage: (text: string) => void
  isConnected: boolean
}

export const ChatContext = createContext<ChatContext | null>(null)
