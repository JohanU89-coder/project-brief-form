// components/forms/section-07-features.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { motion } from 'framer-motion'
import { FEATURES, INTEGRATIONS } from '@/lib/constants'

export function Section07Features() {
  const { control, formState: { errors } } = useFormContext()

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

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <Controller
          control={control}
          name="requiredFeatures"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Qué funcionalidades necesitas?"
              options={FEATURES}
              selectedValues={field.value || []}
              onChange={field.onChange}
              error={errors.requiredFeatures?.message as string}
              layout="vertical"
            />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          control={control}
          name="requiredIntegrations"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Necesitas integrar el sitio con algún sistema?"
              options={INTEGRATIONS}
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
