// lib/types/validation.ts
import { z } from 'zod'

export const projectBriefSchema = z.object({
  // CLIENTE
  clientName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  clientEmail: z.string().email('Email inválido'),
  clientPhone: z.string().min(9, 'Teléfono inválido'),
  clientCompany: z.string().optional().or(z.literal('')),

  // 1. INFORMACIÓN GENERAL
  businessName: z.string().min(2, 'El nombre del negocio es requerido'),
  businessDescription: z.string().min(10, 'Describe los productos/servicios (mínimo 10 caracteres)'),
  yearsInMarket: z.string().min(1, 'Este campo es requerido'),
  uniqueValueProposition: z.string().min(10, 'Describe tu propuesta de valor'),

  // 1.2 Identidad de marca
  logoFormats: z.array(z.string()).min(1, 'Selecciona al menos una opción sobre el logo'),
  hasLogoCorporateColors: z.string().min(1, 'Selecciona una opción'),
  corporateColors: z.string().optional().or(z.literal('')),
  hasBrandGuide: z.string().min(1, 'Selecciona una opción'),

  // 2. OBJETIVOS
  mainObjective: z.string().min(1, 'Selecciona el objetivo principal'),
  secondaryObjectives: z.array(z.string()).min(1, 'Selecciona al menos un objetivo secundario'),
  hasCurrentWebsite: z.string().min(1, 'Selecciona una opción'),
  currentWebsiteUrl: z.string().optional().or(z.literal('')),
  currentWebsiteLikes: z.string().optional().or(z.literal('')),
  currentWebsiteDislikes: z.string().optional().or(z.literal('')),
  webReferences: z.array(z.object({
    url: z.string().url('URL inválida').optional().or(z.literal('')),
    reason: z.string().optional().or(z.literal('')),
  })).optional(),

  // 3. AUDIENCIA
  mainClientsDescription: z.string().min(10, 'Describe a tus clientes'),
  ageRange: z.string().min(1, 'Selecciona un rango de edad'),
  geographicLocation: z.string().min(1, 'Selecciona la ubicación'),
  geographicLocationCity: z.string().optional().or(z.literal('')),
  problemSolved: z.string().min(10, 'Describe el problema que resuelves'),

  // 4. ESTRUCTURA Y CONTENIDO
  requiredPages: z.array(z.string()).min(1, 'Selecciona al menos una página'),
  hasContentWritten: z.string().min(1, 'Selecciona una opción'),
  hasHighQualityImages: z.string().min(1, 'Selecciona una opción'),
  hasVideos: z.string().min(1, 'Selecciona una opción'),

  // 5. FUNCIONALIDADES
  requiredFeatures: z.array(z.string()).min(1, 'Selecciona al menos una característica'),
  requiredIntegrations: z.array(z.string()).optional(),

  // 6. DISEÑO
  visualStyle: z.array(z.string()).min(1, 'Selecciona al menos un estilo visual'),
  colorPreference: z.string().min(1, 'Selecciona una preferencia de color'),
  colorsToAvoid: z.string().optional().or(z.literal('')),
  visualContentPreference: z.string().min(1, 'Selecciona una opción'),

  // 7. TÉCNICO
  hasDomain: z.string().min(1, 'Selecciona una opción'),
  domainName: z.string().optional().or(z.literal('')),
  hasHosting: z.string().min(1, 'Selecciona una opción'),
  needsCorporateEmails: z.string().min(1, 'Selecciona una opción'),
  corporateEmailsCount: z.string().optional().or(z.literal('')),
  canUpdateContent: z.string().min(1, 'Selecciona una opción'),
  needsTraining: z.string().min(1, 'Selecciona una opción'),

  // 8. SEO
  isGoogleImportant: z.string().min(1, 'Selecciona una opción'),
  keywordsFocus: z.string().optional().or(z.literal('')),
  neededTools: z.array(z.string()).optional(),

  // 9. LEGAL
  legalRequirements: z.array(z.string()).optional(),

  // 10. PRESUPUESTO
  launchDate: z.string().min(1, 'Selecciona una fecha'),
  isFlexibleDate: z.string().min(1, 'Selecciona una opción'),
  budgetRange: z.string().min(1, 'Selecciona un rango de presupuesto'),
  needsMaintenance: z.string().min(1, 'Selecciona una opción'),

  // 11. INFORMACIÓN ADICIONAL
  competitors: z.string().optional().or(z.literal('')),
  additionalComments: z.string().optional().or(z.literal('')),
})

export type ProjectBriefFormType = z.infer<typeof projectBriefSchema>
