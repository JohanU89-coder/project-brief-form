// lib/constants.ts
export const LOGO_FORMATS = [
  { id: 'ai', label: '.AI (Illustrator)' },
  { id: 'svg', label: '.SVG' },
  { id: 'png', label: '.PNG alta resolución' },
  { id: 'jpg', label: '.JPG' },
  { id: 'no_logo', label: 'No tengo logo' },
]

export const MAIN_OBJECTIVES = [
  { value: 'sell_online', label: 'Vender productos/servicios online' },
  { value: 'generate_leads', label: 'Generar contactos/leads' },
  { value: 'company_info', label: 'Informar sobre la empresa' },
  { value: 'portfolio', label: 'Mostrar portafolio/trabajos realizados' },
  { value: 'client_support', label: 'Brindar soporte a clientes' },
  { value: 'other', label: 'Otro' },
]

export const SECONDARY_OBJECTIVES = [
  { id: 'buy', label: 'Comprar productos' },
  { id: 'quote', label: 'Solicitar cotización' },
  { id: 'schedule', label: 'Agendar cita/reserva' },
  { id: 'newsletter', label: 'Suscribirse a newsletter' },
  { id: 'download', label: 'Descargar contenido' },
  { id: 'whatsapp', label: 'Contactar por WhatsApp' },
  { id: 'social', label: 'Seguir en redes sociales' },
]

export const AGE_RANGES = [
  { value: '18_25', label: '18-25 años' },
  { value: '26_35', label: '26-35 años' },
  { value: '36_45', label: '36-45 años' },
  { value: '46_60', label: '46-60 años' },
  { value: '60_plus', label: '60+ años' },
]

export const GEOGRAPHIC_LOCATIONS = [
  { value: 'local', label: 'Local (ciudad/región)' },
  { value: 'national', label: 'Nacional' },
  { value: 'international', label: 'Internacional' },
]

export const REQUIRED_PAGES = [
  { id: 'home', label: 'Inicio/Home' },
  { id: 'about', label: 'Sobre Nosotros/Quiénes Somos' },
  { id: 'services', label: 'Servicios/Productos' },
  { id: 'portfolio', label: 'Portafolio/Galería' },
  { id: 'blog', label: 'Blog/Noticias' },
  { id: 'testimonials', label: 'Testimonios/Casos de éxito' },
  { id: 'faq', label: 'Preguntas Frecuentes (FAQ)' },
  { id: 'contact', label: 'Contacto' },
]

export const CONTENT_STATUS = [
  { value: 'ready', label: 'Sí, todo listo' },
  { value: 'partial', label: 'Parcialmente' },
  { value: 'need_help', label: 'No, necesito ayuda con copywriting' },
]

export const IMAGES_STATUS = [
  { value: 'have_photos', label: 'Sí, fotos propias' },
  { value: 'need_bank', label: 'Necesito banco de imágenes' },
  { value: 'need_session', label: 'Necesito sesión fotográfica profesional' },
]

export const FEATURES = [
  { id: 'contact_form', label: 'Formulario de contacto básico' },
  { id: 'quote_form', label: 'Formulario de cotización' },
  { id: 'ecommerce', label: 'Tienda online (e-commerce)' },
  { id: 'payments', label: 'Pasarela de pagos' },
  { id: 'booking', label: 'Sistema de reservas/citas' },
  { id: 'chat', label: 'Chat en vivo' },
  { id: 'blog', label: 'Blog/Sistema de publicaciones' },
  { id: 'auth', label: 'Área de clientes (login/registro)' },
  { id: 'newsletter', label: 'Newsletter/Email marketing' },
  { id: 'map', label: 'Mapa de ubicación' },
  { id: 'social', label: 'Integración con redes sociales' },
  { id: 'gallery', label: 'Galería de imágenes/videos' },
  { id: 'search', label: 'Sistema de búsqueda interna' },
  { id: 'multilang', label: 'Multiidioma' },
]

export const INTEGRATIONS = [
  { id: 'crm', label: 'CRM' },
  { id: 'inventory', label: 'Sistema de inventario' },
  { id: 'email_marketing', label: 'Plataforma de email marketing' },
  { id: 'whatsapp', label: 'WhatsApp Business' },
  { id: 'analytics', label: 'Google Analytics' },
  { id: 'pixel', label: 'Facebook Pixel' },
]

export const VISUAL_STYLES = [
  { id: 'minimal', label: 'Moderno y minimalista' },
  { id: 'corporate', label: 'Corporativo/Profesional' },
  { id: 'creative', label: 'Creativo y colorido' },
  { id: 'elegant', label: 'Elegante y sofisticado' },
  { id: 'tech', label: 'Tecnológico/Futurista' },
  { id: 'natural', label: 'Natural/Orgánico' },
]

export const COLOR_PREFERENCES = [
  { value: 'dark', label: 'Oscuros' },
  { value: 'light', label: 'Claros' },
  { value: 'combination', label: 'Combinación' },
]

export const VISUAL_CONTENT = [
  { value: 'many_images', label: 'Muchas imágenes grandes' },
  { value: 'balance', label: 'Balance entre imágenes y texto' },
  { value: 'text', label: 'Principalmente texto informativo' },
  { value: 'videos', label: 'Videos y multimedia' },
]

export const CMS_PREFERENCE = [
  { value: 'yes_cms', label: 'Sí, necesito CMS (WordPress, etc.)' },
  { value: 'no_cms', label: 'No, prefiero que lo manejen por mí' },
  { value: 'partial', label: 'Solo algunas secciones' },
]

export const SEO_IMPORTANCE = [
  { value: 'very_important', label: 'Sí, muy importante' },
  { value: 'medium', label: 'Medianamente importante' },
  { value: 'not_priority', label: 'No es prioridad ahora' },
]

export const SEO_TOOLS = [
  { id: 'analytics', label: 'Google Analytics' },
  { id: 'search_console', label: 'Google Search Console' },
  { id: 'pixel', label: 'Facebook Pixel' },
  { id: 'google_ads', label: 'Google Ads' },
  { id: 'meta_ads', label: 'Meta Ads (Facebook/Instagram)' },
]

export const LEGAL_REQUIREMENTS = [
  { id: 'privacy', label: 'Política de privacidad' },
  { id: 'terms', label: 'Términos y condiciones' },
  { id: 'cookies', label: 'Aviso de cookies' },
  { id: 'gdpr', label: 'Cumplimiento GDPR/RGPD' },
]

export const DATE_FLEXIBILITY = [
  { value: 'flexible', label: 'Flexible' },
  { value: 'strict', label: 'Fecha límite estricta' },
]

export const BUDGET_RANGES_SOLES = [
  { value: 'under_2000', label: 'Menos de S/. 2,000' },
  { value: '2000_3500', label: 'S/. 2,000 - S/. 3,500' },
  { value: '3500_10000', label: 'S/. 3,500 - S/. 10,000' },
  { value: '10000_17500', label: 'S/. 10,000 - S/. 17,500' },
  { value: 'over_17500', label: 'Más de S/. 17,500' },
  { value: 'pending', label: 'A definir según propuesta' },
]

export const MAINTENANCE = [
  { value: 'monthly', label: 'Sí, mensual' },
  { value: 'occasional', label: 'Sí, ocasional' },
  { value: 'none', label: 'No' },
]

// Agregar al final de lib/constants.ts

export const TIMELINES = [
  { value: 'urgent', label: 'Urgente (2-4 semanas)' },
  { value: 'short', label: 'Corto plazo (1-3 meses)' },
  { value: 'medium', label: 'Mediano plazo (3-6 meses)' },
  { value: 'long', label: 'Largo plazo (6+ meses)' },
  { value: 'flexible', label: 'Flexible' },
]

export const HOSTING_OPTIONS = [
  { value: 'vercel', label: 'Vercel' },
  { value: 'netlify', label: 'Netlify' },
  { value: 'aws', label: 'AWS' },
  { value: 'heroku', label: 'Heroku' },
  { value: 'custom', label: 'Servidor personalizado' },
  { value: 'no_preference', label: 'Sin preferencia' },
]

export const BUDGET_RANGES = BUDGET_RANGES_SOLES // Para compatibilidad

export const PROJECT_TYPES = [
  { value: 'website', label: 'Sitio Web Corporativo' },
  { value: 'ecommerce', label: 'Tienda E-commerce' },
  { value: 'webapp', label: 'Aplicación Web' },
  { value: 'mobile', label: 'App Móvil' },
  { value: 'saas', label: 'SaaS / Plataforma' },
  { value: 'other', label: 'Otro' },
]

export const TECH_PREFERENCES = [
  'React / Next.js',
  'Vue.js / Nuxt',
  'Angular',
  'Python / Django',
  'Node.js / Express',
  'PHP / Laravel',
  'No tengo preferencia',
]
