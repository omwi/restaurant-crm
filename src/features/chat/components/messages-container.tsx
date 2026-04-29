import { useEffect, useRef } from "react"

import { useChat } from "../hooks/use-chat"
import Message from "./message"

export default function MessagesContainer() {
  const { messages } = useChat()

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-1 flex-col gap-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
