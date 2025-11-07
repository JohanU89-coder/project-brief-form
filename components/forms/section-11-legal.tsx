// components/forms/section-11-legal.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { motion } from 'framer-motion'
import { LEGAL_REQUIREMENTS } from '@/lib/constants'

export function Section11Legal() {
  const { control } = useFormContext()

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
          name="legalRequirements"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Qué documentos legales necesitas?"
              options={LEGAL_REQUIREMENTS}
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
