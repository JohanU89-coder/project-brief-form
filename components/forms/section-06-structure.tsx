// components/forms/section-06-structure.tsx
'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { SelectGlow, type SelectOption } from '@/components/ui/select-glow'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { motion } from 'framer-motion'
import { REQUIRED_PAGES, CONTENT_STATUS, IMAGES_STATUS } from '@/lib/constants'

export function Section06Structure() {
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

  const contentStatusOptions: SelectOption[] = CONTENT_STATUS
  const imagesStatusOptions: SelectOption[] = IMAGES_STATUS

  const yesNoOptions: SelectOption[] = [
    { value: 'yes', label: 'Sí' },
    { value: 'no', label: 'No, pero los necesito' },
    { value: 'no_needed', label: 'No los necesito' },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants}>
        <Controller
          control={control}
          name="requiredPages"
          render={({ field }) => (
            <CheckboxGroup
              label="¿Qué páginas necesitas en tu sitio?"
              options={REQUIRED_PAGES}
              selectedValues={field.value || []}
              onChange={field.onChange}
              error={errors.requiredPages?.message as string}
              layout="vertical"
            />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasContentWritten')}
          label="¿Tienes los textos/contenido escrito para el sitio?"
          options={contentStatusOptions}
          error={errors.hasContentWritten?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasHighQualityImages')}
          label="¿Tienes fotografías/imágenes de alta calidad?"
          options={imagesStatusOptions}
          error={errors.hasHighQualityImages?.message as string}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <SelectGlow
          {...register('hasVideos')}
          label="¿Tienes videos corporativos?"
          options={yesNoOptions}
          error={errors.hasVideos?.message as string}
        />
      </motion.div>
    </motion.div>
  )
}
