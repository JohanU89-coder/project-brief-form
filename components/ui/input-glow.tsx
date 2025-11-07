// components/ui/input-glow.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const InputGlow = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, icon, ...props }, ref) => (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium text-foreground/90">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-electric-blue">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-base text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue disabled:cursor-not-allowed disabled:opacity-50 glow-effect",
            icon && "pl-10",
            error && "border-destructive/50 focus:ring-destructive/50 focus:border-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs font-medium text-destructive animate-in fade-in-50">
          {error}
        </p>
      )}
    </div>
  )
)
InputGlow.displayName = "InputGlow"

export { InputGlow }
