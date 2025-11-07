// components/forms/section-08-design.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { InputGlow } from '@/components/ui/input-glow'
import { motion } from 'framer-motion'
import { VISUAL_STYLES, COLOR_PREFERENCES, VISUAL_CONTENT } from '@/lib/constants'

export function Section08Design() {
  const { control, register, formState: { errors } } = useFormContext()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const colorOptions: SelectOption[] = COLOR_PREFERENCES
  const contentOptions: SelectOption[] = VISUAL_CONTENT

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <Controller
          control={control}
          name="visualStyle"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Qué estilo prefieres para tu sitio?"
              options={VISUAL_STYLES}
              selectedValues={field.value || []}
              onChange={field.onChange}
              error={errors.visualStyle?.message as string}
              layout="vertical"
            />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('colorPreference')}
          label="¿Prefieres colores oscuros o claros?"
          options={colorOptions}
          error={errors.colorPreference?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('colorsToAvoid')}
          label="¿Hay colores que debas evitar? ¿Por qué?"
          placeholder="Ej: Rojo (marca competencia)"
          error={errors.colorsToAvoid?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('visualContentPreference')}
          label="¿Qué prefieres en tu sitio?"
          options={contentOptions}
          error={errors.visualContentPreference?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
