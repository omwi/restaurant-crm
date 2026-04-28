import { createFileRoute } from "@tanstack/react-router"

import ChatPage from "@/app/pages/chat"

export const Route = createFileRoute("/_auth/chat")({
  component: ChatPage,
})
