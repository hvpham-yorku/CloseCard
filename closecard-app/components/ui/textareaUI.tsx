import * as React from "react"
import { cn } from "@/lib/utils"

// New code: Added auto-resize functionality
const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    const [height, setHeight] = React.useState("auto")

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHeight("auto")
      setHeight(`${e.target.scrollHeight}px`)
    }

    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        onInput={handleInputChange}
        style={{ height }}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
