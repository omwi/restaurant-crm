import PageHeading from "@/components/common/page-heading"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import MessageInput from "./message-input"
import MessagesContainer from "./messages-container"

export default function ChatContainer() {
  return (
    <Card className="h-11/12 max-h-full w-full max-w-3xl rounded shadow-sm">
      <CardHeader>
        <PageHeading title="Chat" className="text-center" />
      </CardHeader>
      <Separator />
      <CardContent className="no-scrollbar min-h-0 max-w-full flex-1 overflow-y-auto">
        <MessagesContainer />
      </CardContent>
      <CardFooter>
        <MessageInput />
      </CardFooter>
    </Card>
  )
}
