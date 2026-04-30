const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
})

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
})

export function stampToReadable(timestamp: string) {
  return formatter.format(new Date(timestamp))
}

export function stampToDate(timestamp: string) {
  return dateFormatter.format(new Date(timestamp))
}
