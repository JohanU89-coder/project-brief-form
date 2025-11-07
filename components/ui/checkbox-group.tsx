// components/ui/checkbox-group.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export interface CheckboxOption {
  id: string
  label: string
}

export interface CheckboxGroupProps {
  label?: string
  options: CheckboxOption[]
  selectedValues: string[]
  onChange: (values: string[]) => void
  error?: string
  layout?: 'vertical' | 'horizontal'
}

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ label, options, selectedValues, onChange, error, layout = 'vertical' }, ref) => {
    const handleChange = (id: string, checked: boolean) => {
      if (checked) {
        onChange([...selectedValues, id])
      } else {
        onChange(selectedValues.filter((v) => v !== id))
      }
    }

    return (
      <div ref={ref} className="w-full space-y-3">
        {label && (
          <label className="text-sm font-medium text-foreground/90">
            {label}
          </label>
        )}
        <div
          className={cn(
            "grid gap-3",
            layout === 'horizontal' ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"
          )}
        >
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center space-x-3 p-2 rounded-lg border border-input/50 bg-background/30 hover:border-electric-blue/50 hover:bg-background/50 transition-all duration-200 cursor-pointer group"
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id={option.id}
                  checked={selectedValues.includes(option.id)}
                  onChange={(e) => handleChange(option.id, e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={cn(
                    "h-5 w-5 rounded border border-input bg-background/50 transition-all duration-200 flex items-center justify-center",
                    selectedValues.includes(option.id) &&
                      "border-electric-blue bg-electric-blue/20 ring-1 ring-electric-blue/50"
                  )}
                >
                  {selectedValues.includes(option.id) && (
                    <Check className="h-3 w-3 text-electric-blue" />
                  )}
                </div>
              </div>
              <label
                htmlFor={option.id}
                className="text-sm text-foreground/90 cursor-pointer flex-1"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {error && (
          <p className="text-xs font-medium text-destructive animate-in fade-in-50">
            {error}
          </p>
        )}
      </div>
    )
  }
)
CheckboxGroup.displayName = "CheckboxGroup"
