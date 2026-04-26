import { ThemeProvider } from "@/components/theme-provider"
import type { ChildrenProp } from "@/types/types"

export default function AppProvider({ children }: ChildrenProp) {
  return <ThemeProvider>{children}</ThemeProvider>
}
