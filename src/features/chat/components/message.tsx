import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Route } from "@/routes/_auth"
import { stampToTime } from "@/utils/date"

import type { Message } from "../context/chat-context"

export default function Message({ message }: { message: Message }) {
  const { auth } = Route.useRouteContext()

  const isMessageOwner = auth.user?.username === message.username

  return (
    <div
      className={cn("flex max-w-[70%] flex-row gap-1 wrap-break-word", {
        "self-end": isMessageOwner,
      })}
    >
      {!isMessageOwner && (
        <Avatar className="mt-4">
          <AvatarImage src={message.avatar} />
        </Avatar>
      )}

      <div className="flex max-w-full flex-col">
        <div
          className={cn("flex flex-row items-center gap-2 px-2", {
            "justify-end": isMessageOwner,
          })}
        >
          {!isMessageOwner && (
            <span className="text-sm font-bold">{message.author}</span>
          )}

          <time dateTime={message.timestamp} className="text-xs font-light">
            {stampToTime(message.timestamp)}
          </time>
        </div>

        <div
          className={cn(
            "max-w-full self-baseline rounded bg-accent px-2 py-1 text-sm",
            {
              "self-baseline-last text-end": isMessageOwner,
            }
          )}
        >
          {message.message}
        </div>
      </div>
    </div>
  )
}
