const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
})

export function timestampToReadable(timestamp: string) {
  return formatter.format(new Date(timestamp))
}
