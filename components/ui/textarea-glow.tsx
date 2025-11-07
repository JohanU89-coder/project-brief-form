// components/ui/textarea-glow.tsx
'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  charLimit?: number
  icon?: React.ReactNode
}

const TextareaGlow = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, charLimit, icon, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length)
      props.onChange?.(e)
    }

    return (
      <div className="w-full space-y-2">
        {label && (
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
              {icon && <span className="text-electric-blue">{icon}</span>}
              {label}
            </label>
            {charLimit && (
              <span className="text-xs text-muted-foreground">
                {charCount}/{charLimit}
              </span>
            )}
          </div>
        )}
        <textarea
          className={cn(
            "flex min-h-24 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-base text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue disabled:cursor-not-allowed disabled:opacity-50 resize-none glow-effect",
            error && "border-destructive/50 focus:ring-destructive/50 focus:border-destructive",
            className
          )}
          ref={ref}
          maxLength={charLimit}
          onChange={handleChange}
          {...props}
        />
        {error && (
          <p className="text-xs font-medium text-destructive animate-in fade-in-50">
            {error}
          </p>
        )}
      </div>
    )
  }
)
TextareaGlow.displayName = "TextareaGlow"

export { TextareaGlow }
