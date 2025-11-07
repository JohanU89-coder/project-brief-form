// components/forms/section-02-business.tsx
'use client'

import { useFormContext } from 'react-hook-form'
import { TextareaGlow } from '@/components/ui/textarea-glow'
import { InputGlow } from '@/components/ui/input-glow'
import { motion } from 'framer-motion'
import { Briefcase, Zap } from 'lucide-react'

export function Section02Business() {
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

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('businessName')}
          label="Nombre oficial del negocio"
          placeholder="Acme Corporation S.A.C."
          icon={<Briefcase size={18} />}
          error={errors.businessName?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('businessDescription')}
          label="¿A qué se dedica tu empresa?"
          placeholder="Describe tus productos/servicios principales..."
          charLimit={500}
          icon={<Briefcase size={18} />}
          error={errors.businessDescription?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('yearsInMarket')}
          label="¿Cuánto tiempo llevas en el mercado?"
          placeholder="Ej: 3 años, 5 meses"
          error={errors.yearsInMarket?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('uniqueValueProposition')}
          label="¿Cuál es tu propuesta de valor única?"
          placeholder="¿Qué te diferencia de la competencia?"
          charLimit={500}
          icon={<Zap size={18} />}
          error={errors.uniqueValueProposition?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
