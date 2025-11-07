// components/forms/section-10-seo.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { InputGlow } from '@/components/ui/input-glow'
import { motion } from 'framer-motion'
import { SEO_IMPORTANCE, SEO_TOOLS } from '@/lib/constants'

export function Section10SEO() {
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

  const seoOptions: SelectOption[] = SEO_IMPORTANCE

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('isGoogleImportant')}
          label="¿Es importante para ti aparecer en Google?"
          options={seoOptions}
          error={errors.isGoogleImportant?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('keywordsFocus')}
          label="¿Tienes palabras clave que quieras posicionar?"
          placeholder="Ej: diseño web, desarrollo, hosting"
          error={errors.keywordsFocus?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          control={control}
          name="neededTools"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Necesitas integración con estas herramientas?"
              options={SEO_TOOLS}
              selectedValues={field.value || []}
              onChange={field.onChange}
              layout="vertical"
            />
          )}
        />
      </motion.div>
    </motion.div>
  )
}
