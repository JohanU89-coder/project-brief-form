// components/ui/select-glow.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
  icon?: React.ReactNode
}

const SelectGlow = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder = "Selecciona una opción", icon, ...props }, ref) => (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
          {icon && <span className="text-electric-blue">{icon}</span>}
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 pr-10 text-base text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue disabled:cursor-not-allowed disabled:opacity-50 appearance-none glow-effect",
            error && "border-destructive/50 focus:ring-destructive/50 focus:border-destructive",
            className
          )}
          ref={ref}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      </div>
      {error && (
        <p className="text-xs font-medium text-destructive animate-in fade-in-50">
          {error}
        </p>
      )}
    </div>
  )
)
SelectGlow.displayName = "SelectGlow"

export { SelectGlow }
