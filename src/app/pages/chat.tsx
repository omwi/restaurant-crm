import Container from "@/components/common/container"
import ChatContainer from "@/features/chat/components/chat-container"

export default function ChatPage() {
  return (
    <Container className="mx-auto min-h-0 flex-1">
      <ChatContainer />
    </Container>
  )
}
