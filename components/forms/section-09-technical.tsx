// components/forms/section-09-technical.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { InputGlow } from '@/components/ui/input-glow'
import { motion } from 'framer-motion'
import { CMS_PREFERENCE } from '@/lib/constants'

export function Section09Technical() {
  const { control, register, formState: { errors }, watch } = useFormContext()

  const hasDomain = watch('hasDomain')
  const needsCorporateEmails = watch('needsCorporateEmails')

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

  const cmsOptions: SelectOption[] = CMS_PREFERENCE
  const trainingOptions: SelectOption[] = [
    { value: 'yes', label: 'Sí' },
    { value: 'no', label: 'No' },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasDomain')}
          label="¿Tienes dominio registrado?"
          options={yesNoOptions}
          error={errors.hasDomain?.message as string}
        />
      </motion.div>

      {hasDomain === 'yes' && (
        <motion.div variants={itemVariants}>
          <InputGlow
            {...register('domainName')}
            label="¿Cuál es el dominio?"
            placeholder="www.ejemplo.com"
            error={errors.domainName?.message as string}
          />
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasHosting')}
          label="¿Tienes servicio de hosting?"
          options={yesNoOptions}
          error={errors.hasHosting?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('needsCorporateEmails')}
          label="¿Necesitas emails corporativos?"
          options={yesNoOptions}
          error={errors.needsCorporateEmails?.message as string}
        />
      </motion.div>

      {needsCorporateEmails === 'yes' && (
        <motion.div variants={itemVariants}>
          <InputGlow
            {...register('corporateEmailsCount')}
            label="¿Cuántos emails corporativos necesitas?"
            placeholder="Ej: 5"
            error={errors.corporateEmailsCount?.message as string}
          />
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('canUpdateContent')}
          label="¿Quieres poder actualizar el contenido tú mismo?"
          options={cmsOptions}
          error={errors.canUpdateContent?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('needsTraining')}
          label="¿Necesitas capacitación para administrar el sitio?"
          options={trainingOptions}
          error={errors.needsTraining?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
