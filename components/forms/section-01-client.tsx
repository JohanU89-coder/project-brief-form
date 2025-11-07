// components/forms/section-01-client.tsx
'use client'

import { useFormContext } from 'react-hook-form'
import { Mail, Phone, Building2, User } from 'lucide-react'
import { InputGlow } from '@/components/ui/input-glow'
import { motion } from 'framer-motion'

export function Section01Client() {
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
          {...register('clientName')}
          label="Nombre completo del contacto"
          placeholder="Juan Pérez García"
          icon={<User size={18} />}
          error={errors.clientName?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('clientEmail')}
          label="Email"
          type="email"
          placeholder="juan@empresa.com"
          icon={<Mail size={18} />}
          error={errors.clientEmail?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('clientPhone')}
          label="Teléfono"
          placeholder="+51 987 654 321"
          icon={<Phone size={18} />}
          error={errors.clientPhone?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('clientCompany')}
          label="Empresa (opcional)"
          placeholder="Mi Empresa S.A."
          icon={<Building2 size={18} />}
          error={errors.clientCompany?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
