// components/forms/project-brief-form.tsx
'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useFormspree } from '@formspree/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react'

import { projectBriefSchema, type ProjectBriefFormType } from '@/lib/types/validation'
import type { FormStep } from '@/lib/types/form'

import { ButtonGlow } from '@/components/ui/button-glow'
import { CardGlow } from '@/components/ui/card-glow'

// Importar todas las secciones
import { Section01Client } from './section-01-client'
import { Section02Business } from './section-02-business'
import { Section03Branding } from './section-03-branding'
import { Section04Objectives } from './section-04-objectives'
import { Section05Audience } from './section-05-audience'
import { Section06Structure } from './section-06-structure'
import { Section07Features } from './section-07-features'
import { Section08Design } from './section-08-design'
import { Section09Technical } from './section-09-technical'
import { Section10SEO } from './section-10-seo'
import { Section11Legal } from './section-11-legal'
import { Section12Budget } from './section-12-budget'

const FORM_STEPS: { id: FormStep; title: string; description: string }[] = [
  { id: 'client-info', title: 'Información de Contacto', description: 'Cuéntanos sobre ti' },
  { id: 'business-info', title: 'Información del Negocio', description: 'Detalles de tu empresa' },
  { id: 'objectives', title: 'Objetivos del Sitio', description: 'Metas del proyecto web' },
  { id: 'audience', title: 'Audiencia Objetivo', description: 'Tus clientes ideales' },
  { id: 'structure', title: 'Estructura y Contenido', description: 'Páginas y material' },
  { id: 'features', title: 'Funcionalidades', description: 'Lo que necesitas' },
  { id: 'design', title: 'Diseño y Estética', description: 'Estilo visual' },
  { id: 'technical', title: 'Aspectos Técnicos', description: 'Dominio y hosting' },
  { id: 'seo', title: 'SEO y Marketing', description: 'Posicionamiento' },
  { id: 'legal', title: 'Requisitos Legales', description: 'Documentos necesarios' },
  { id: 'budget', title: 'Presupuesto y Timeline', description: 'Fechas y costo' },
  { id: 'summary', title: 'Resumen Final', description: 'Revisa tu información' },
]

export function ProjectBriefForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [state, handleSubmit] = useFormspree('xblpnvvv')


  const currentStep = FORM_STEPS[currentStepIndex]

  const methods = useForm<ProjectBriefFormType>({
    resolver: zodResolver(projectBriefSchema),
    mode: 'onBlur',
    defaultValues: {
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      clientCompany: '',
      businessName: '',
      businessDescription: '',
      yearsInMarket: '',
      uniqueValueProposition: '',
      logoFormats: [],
      hasLogoCorporateColors: '',
      corporateColors: '',
      hasBrandGuide: '',
      mainObjective: '',
      secondaryObjectives: [],
      hasCurrentWebsite: '',
      currentWebsiteUrl: '',
      currentWebsiteLikes: '',
      currentWebsiteDislikes: '',
      webReferences: [],
      mainClientsDescription: '',
      ageRange: '',
      geographicLocation: '',
      geographicLocationCity: '',
      problemSolved: '',
      requiredPages: [],
      hasContentWritten: '',
      hasHighQualityImages: '',
      hasVideos: '',
      requiredFeatures: [],
      requiredIntegrations: [],
      visualStyle: [],
      colorPreference: '',
      colorsToAvoid: '',
      visualContentPreference: '',
      hasDomain: '',
      domainName: '',
      hasHosting: '',
      needsCorporateEmails: '',
      corporateEmailsCount: '',
      canUpdateContent: '',
      needsTraining: '',
      isGoogleImportant: '',
      keywordsFocus: '',
      neededTools: [],
      legalRequirements: [],
      launchDate: '',
      isFlexibleDate: '',
      budgetRange: '',
      needsMaintenance: '',
      competitors: '',
      additionalComments: '',
    },
  })

 const fieldsToValidate: { [key in FormStep]: (keyof ProjectBriefFormType)[] } = {
  'client-info': ['clientName', 'clientEmail', 'clientPhone'],
  'business-info': ['businessName', 'businessDescription'],
  'objectives': ['mainObjective'],
  'audience': ['mainClientsDescription', 'ageRange'],
  'structure': ['requiredPages'],
  'features': ['requiredFeatures'],
  'design': ['visualStyle', 'colorPreference'],
  'technical': ['hasDomain', 'hasHosting'],
  'seo': ['isGoogleImportant'],
  'legal': [],
  'budget': ['budgetRange'],
  'summary': [],
}



  const canGoNext = () => {
    const fields = fieldsToValidate[currentStep.id]
    return fields.every((field) => !methods.formState.errors[field])
  }

  const handleNext = () => {
    if (currentStepIndex < FORM_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
      window.scrollTo(0, 0)
    }
  }

  const onSubmit = async (data: ProjectBriefFormType) => {
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, value.join(', '))
        } else if (typeof value === 'object' && value !== null) {
          formData.append(key, JSON.stringify(value))
        } else {
          formData.append(key, String(value))
        }
      })
      await handleSubmit(formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error al enviar:', error)
    }
  }

  // Pantalla de éxito
  if (isSubmitted && state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <CardGlow className="max-w-md w-full text-center border-electric-blue/30 bg-gradient-to-br from-electric-blue/10 to-neon-purple/10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="mb-4"
          >
            <CheckCircle2 className="h-16 w-16 text-electric-blue mx-auto" />
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            ¡Formulario Enviado Exitosamente!
          </h2>
          <p className="text-foreground/70 mb-6">
            Gracias por completar el brief. Revisaremos tu información y nos pondremos en contacto pronto con una propuesta personalizada.
          </p>
          <ButtonGlow
            onClick={() => {
              setIsSubmitted(false)
              methods.reset()
              setCurrentStepIndex(0)
            }}
            variant="outline"
          >
            Enviar otro formulario
          </ButtonGlow>
        </CardGlow>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Brief de Desarrollo Web
          </h1>
          <p className="text-foreground/60 text-lg">
            Cuéntanos todos los detalles de tu proyecto
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-4 gap-1 overflow-x-auto pb-2">
            {FORM_STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1 min-w-max">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => index <= currentStepIndex && setCurrentStepIndex(index)}
                  className={`h-8 w-8 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    index <= currentStepIndex
                      ? 'bg-electric-blue text-background'
                      : 'bg-input/50 text-foreground/50'
                  }`}
                >
                  {index + 1}
                </motion.div>

                {index < FORM_STEPS.length - 1 && (
                  <div
                    className={`h-1 mx-1 flex-1 rounded-full transition-all duration-300 ${
                      index < currentStepIndex
                        ? 'bg-electric-blue'
                        : 'bg-input/50'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Title */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-1">
              {currentStep.title}
            </h2>
            <p className="text-sm text-foreground/60">
              {currentStep.description}
            </p>
          </div>
        </motion.div>

        {/* Form Card */}
        <CardGlow className="border-electric-blue/20 backdrop-blur-xl bg-card/80">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
              {/* Error Message */}
              {state.errors && Object.keys(state.errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex gap-3"
                >
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-destructive">
                    Error al enviar el formulario. Intenta de nuevo.
                  </p>
                </motion.div>
              )}

              {/* Form Steps */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep.id === 'client-info' && <Section01Client />}
                  {currentStep.id === 'business-info' && <Section02Business />}
                  {currentStep.id === 'objectives' && <Section03Branding />}
                  {currentStep.id === 'audience' && <Section04Objectives />}
                  {currentStep.id === 'structure' && <Section05Audience />}
                  {currentStep.id === 'features' && <Section06Structure />}
                  {currentStep.id === 'design' && <Section07Features />}
                  {currentStep.id === 'technical' && <Section08Design />}
                  {currentStep.id === 'seo' && <Section09Technical />}
                  {currentStep.id === 'legal' && <Section10SEO />}
                  {currentStep.id === 'budget' && <Section11Legal />}
                  {currentStep.id === 'summary' && <Section12Budget />}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 justify-between pt-8 border-t border-input/50"
              >
                <ButtonGlow
                  type="button"
                  onClick={handlePrevious}
                  variant="outline"
                  disabled={currentStepIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft size={18} />
                  Anterior
                </ButtonGlow>

                {currentStepIndex === FORM_STEPS.length - 1 ? (
                  <ButtonGlow
                    type="submit"
                    isLoading={state.submitting}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={18} />
                    {state.submitting ? 'Enviando...' : 'Enviar Formulario'}
                  </ButtonGlow>
                ) : (
                  <ButtonGlow
                    type="button"
                    onClick={handleNext}
                    disabled={!canGoNext()}
                    className="flex items-center gap-2"
                  >
                    Siguiente
                    <ChevronRight size={18} />
                  </ButtonGlow>
                )}
              </motion.div>
            </form>
          </FormProvider>
        </CardGlow>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-foreground/50 mt-8"
        >
          Paso {currentStepIndex + 1} de {FORM_STEPS.length}
        </motion.p>
      </div>
    </div>
  )
}
