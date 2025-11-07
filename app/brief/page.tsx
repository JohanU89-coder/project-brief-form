// app/brief/page.tsx
import { ProjectBriefForm } from '@/components/forms/project-brief-form'

export const metadata = {
  title: 'Brief de Proyecto Web',
  description: 'Completa nuestro formulario para describir tu proyecto web ideal',
}

export default function BriefPage() {
  return <ProjectBriefForm />
}
