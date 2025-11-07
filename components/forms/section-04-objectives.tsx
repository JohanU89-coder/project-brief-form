// components/forms/section-04-objectives.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { InputGlow } from '@/components/ui/input-glow'
import { TextareaGlow } from '@/components/ui/textarea-glow'
import { motion } from 'framer-motion'
import { MAIN_OBJECTIVES, SECONDARY_OBJECTIVES } from '@/lib/constants'

export function Section04Objectives() {
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

  const mainObjectiveOptions: SelectOption[] = MAIN_OBJECTIVES
  const yesNoOptions: SelectOption[] = [
    { value: 'yes', label: 'Sí' },
    { value: 'no', label: 'No' },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('mainObjective')}
          label="¿Cuál es el objetivo PRINCIPAL de tu sitio web?"
          options={mainObjectiveOptions}
          error={errors.mainObjective?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          control={control}
          name="secondaryObjectives"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Qué otras acciones deseas que realicen los visitantes?"
              options={SECONDARY_OBJECTIVES}
              selectedValues={field.value || []}
              onChange={field.onChange}
              error={errors.secondaryObjectives?.message as string}
              layout="vertical"
            />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasCurrentWebsite')}
          label="¿Tienes un sitio web actualmente?"
          options={yesNoOptions}
          error={errors.hasCurrentWebsite?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <InputGlow
          {...register('currentWebsiteUrl')}
          label="Si respondiste Sí, ¿cuál es la URL?"
          placeholder="https://www.ejemplo.com"
          error={errors.currentWebsiteUrl?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('currentWebsiteLikes')}
          label="¿Qué te gusta de tu sitio actual?"
          charLimit={300}
          error={errors.currentWebsiteLikes?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextareaGlow
          {...register('currentWebsiteDislikes')}
          label="¿Qué te disgusta o quieres mejorar?"
          charLimit={300}
          error={errors.currentWebsiteDislikes?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
