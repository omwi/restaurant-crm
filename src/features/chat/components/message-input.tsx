import { Send } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useChat } from "../hooks/use-chat"

export default function MessageInput() {
  const { sendMessage, isConnected } = useChat()
  const [message, setMessage] = useState("")

  function handleSendMessage() {
    if (!message) return
    sendMessage(message)
    setMessage("")
  }

  return (
    <div className="flex w-full flex-row gap-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
        maxLength={1024}
        className="flex-1"
        disabled={!isConnected}
        aria-label="Write a message"
      />
      <Button
        variant="outline"
        onClick={handleSendMessage}
        disabled={!isConnected}
        aria-label="Send message"
      >
        <Send />
      </Button>
    </div>
  )
}
