// components/forms/section-12-budget.tsx
'use client'

import { useFormContext } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { InputGlow } from '@/components/ui/input-glow'
import { TextareaGlow } from '@/components/ui/textarea-glow'
import { motion } from 'framer-motion'
import { BUDGET_RANGES_SOLES, DATE_FLEXIBILITY, MAINTENANCE } from '@/lib/constants'

export function Section12Budget() {
  const { register, formState: { errors } } = useFormContext()

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

  const budgetOptions: SelectOption[] = BUDGET_RANGES_SOLES
  const flexibilityOptions: SelectOption[] = DATE_FLEXIBILITY
  const maintenanceOptions: SelectOption[] = MAINTENANCE

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('launchDate')}
          label="¿Cuál es tu fecha ideal de lanzamiento?"
          type="date"
          error={errors.launchDate?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('isFlexibleDate')}
          label="¿Esta fecha es flexible?"
          options={flexibilityOptions}
          error={errors.isFlexibleDate?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('budgetRange')}
          label="¿Cuál es tu rango de presupuesto aproximado? (En Soles)"
          options={budgetOptions}
          error={errors.budgetRange?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('needsMaintenance')}
          label="¿Necesitas servicio de mantenimiento posterior?"
          options={maintenanceOptions}
          error={errors.needsMaintenance?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('competitors')}
          label="Menciona 2-3 competidores y sus sitios web (opcional)"
          charLimit={500}
          error={errors.competitors?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('additionalComments')}
          label="¿Hay algo más que debamos saber sobre tu proyecto?"
          charLimit={500}
          error={errors.additionalComments?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
