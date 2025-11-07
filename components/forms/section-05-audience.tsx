// components/forms/section-05-audience.tsx
'use client'

import { useFormContext } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { TextareaGlow } from '@/components/ui/textarea-glow'
import { InputGlow } from '@/components/ui/input-glow'
import { motion } from 'framer-motion'
import { AGE_RANGES, GEOGRAPHIC_LOCATIONS } from '@/lib/constants'

export function Section05Audience() {
  const { register, formState: { errors }, watch } = useFormContext()

  const geographicLocation = watch('geographicLocation')

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

  const ageOptions: SelectOption[] = AGE_RANGES
  const locationOptions: SelectOption[] = GEOGRAPHIC_LOCATIONS

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('mainClientsDescription')}
          label="¿Quiénes son tus clientes principales?"
          charLimit={500}
          error={errors.mainClientsDescription?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('ageRange')}
          label="Rango de edad predominante"
          options={ageOptions}
          error={errors.ageRange?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('geographicLocation')}
          label="Ubicación geográfica"
          options={locationOptions}
          error={errors.geographicLocation?.message as string}
        />
      </motion.div>

      {geographicLocation === 'local' && (
        <motion.div variants={itemVariants}>
          <InputGlow
            {...register('geographicLocationCity')}
            label="Especifica la ciudad/región"
            placeholder="Lima, Perú"
            error={errors.geographicLocationCity?.message as string}
          />
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('problemSolved')}
          label="¿Qué problema resuelves para tus clientes?"
          charLimit={500}
          error={errors.problemSolved?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
