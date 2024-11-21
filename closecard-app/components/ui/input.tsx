import * as React from "react"
import { cn } from "@/lib/utils"

// New code: Added character counter functionality
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, maxLength, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCharCount(e.target.value.length)
    }

    return (
      <div className="relative">
        <input
          type="text"
          maxLength={maxLength}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          onChange={handleInputChange}
          {...props}
        />
        {maxLength && (
          <span className="absolute right-2 bottom-1 text-xs text-muted-foreground">
            {charCount}/{maxLength}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }