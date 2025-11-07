// components/forms/section-03-branding.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { InputGlow } from '@/components/ui/input-glow'
import { motion } from 'framer-motion'
import { LOGO_FORMATS } from '@/lib/constants'

export function Section03Branding() {
  const { control, register, formState: { errors }, watch } = useFormContext()

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

  const yesNoOptions: SelectOption[] = [
    { value: 'yes', label: 'Sí' },
    { value: 'no', label: 'No' },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <Controller
          control={control}
          name="logoFormats"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Tienes logo? Si sí, ¿en qué formatos?"
              options={LOGO_FORMATS}
              selectedValues={field.value || []}
              onChange={field.onChange}
              error={errors.logoFormats?.message as string}
              layout="vertical"
            />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasLogoCorporateColors')}
          label="¿Tienes colores corporativos definidos?"
          options={yesNoOptions}
          error={errors.hasLogoCorporateColors?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('corporateColors')}
          label="Si respondiste Sí, especifica los colores"
          placeholder="Ej: Azul #0066CC, Blanco, Negro"
          error={errors.corporateColors?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasBrandGuide')}
          label="¿Tienes manual de identidad corporativa?"
          options={yesNoOptions}
          error={errors.hasBrandGuide?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
