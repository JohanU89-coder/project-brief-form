// components/ui/button-glow.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const ButtonGlow = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, isLoading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden",
          // Sizes
          size === 'sm' && "px-3 py-1.5 text-sm",
          size === 'md' && "px-4 py-2.5 text-base",
          size === 'lg' && "px-6 py-3 text-lg",
          // Variants
          variant === 'default' &&
            "bg-gradient-to-r from-electric-blue to-neon-purple text-background hover:from-electric-blue/90 hover:to-neon-purple/90 shadow-lg shadow-electric-blue/25 hover:shadow-electric-blue/50",
          variant === 'outline' &&
            "border border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue",
          variant === 'ghost' &&
            "text-foreground hover:bg-foreground/10",
          variant === 'destructive' &&
            "bg-destructive/90 text-destructive-foreground hover:bg-destructive shadow-lg shadow-destructive/25",
          className
        )}
        disabled={isLoading || props.disabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </Comp>
    )
  }
)
ButtonGlow.displayName = "ButtonGlow"

export { ButtonGlow }
