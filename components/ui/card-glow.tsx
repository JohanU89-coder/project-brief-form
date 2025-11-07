// components/ui/card-glow.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const CardGlow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-input/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/10",
      className
    )}
    {...props}
  />
))
CardGlow.displayName = "CardGlow"

export { CardGlow }
