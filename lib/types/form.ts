// lib/types/form.ts
export interface ProjectBriefFormData {
  // 1. INFORMACIÓN GENERAL DEL NEGOCIO
  businessName: string
  businessDescription: string
  yearsInMarket: string
  uniqueValueProposition: string
  
  // 1.2 Identidad de marca
  logoFormats: string[]
  hasLogoCorporateColors: string
  corporateColors: string
  hasBrandGuide: string
  
  // 2. OBJETIVOS DEL SITIO WEB
  mainObjective: string
  secondaryObjectives: string[]
  hasCurrentWebsite: string
  currentWebsiteUrl: string
  currentWebsiteLikes: string
  currentWebsiteDislikes: string
  webReferences: {
    url: string
    reason: string
  }[]
  
  // 3. AUDIENCIA OBJETIVO
  mainClientsDescription: string
  ageRange: string
  geographicLocation: string
  geographicLocationCity: string
  problemSolved: string
  
  // 4. ESTRUCTURA Y CONTENIDO
  requiredPages: string[]
  hasContentWritten: string
  hasHighQualityImages: string
  hasVideos: string
  
  // 5. FUNCIONALIDADES ESPECÍFICAS
  requiredFeatures: string[]
  requiredIntegrations: string[]
  
  // 6. DISEÑO Y ESTÉTICA
  visualStyle: string[]
  colorPreference: string
  colorsToAvoid: string
  visualContentPreference: string
  
  // 7. ASPECTOS TÉCNICOS
  hasDomain: string
  domainName: string
  hasHosting: string
  needsCorporateEmails: string
  corporateEmailsCount: string
  canUpdateContent: string
  needsTraining: string
  
  // 8. SEO Y MARKETING DIGITAL
  isGoogleImportant: string
  keywordsFocus: string
  neededTools: string[]
  
  // 9. ASPECTOS LEGALES
  legalRequirements: string[]
  
  // 10. CRONOGRAMA Y PRESUPUESTO
  launchDate: string
  isFlexibleDate: string
  budgetRange: string
  needsMaintenance: string
  
  // 11. INFORMACIÓN ADICIONAL
  competitors: string
  additionalComments: string
  
  // CLIENTE
  clientName: string
  clientEmail: string
  clientPhone: string
  clientCompany: string
}

export type FormStep = 'client-info' | 'business-info' | 'objectives' | 'audience' | 'structure' | 'features' | 'design' | 'technical' | 'seo' | 'legal' | 'budget' | 'additional' | 'summary'
