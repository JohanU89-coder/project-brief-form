# 🌐 Brief de Desarrollo Web

Formulario profesional e interactivo para capturar los requisitos completos de proyectos web. Diseñado para recopilar información detallada de clientes sobre sus **necesidades, objetivos y preferencias técnicas**.

---

## ✨ Características

- **12 Secciones Completas** – Cliente, negocio, objetivos, audiencia, estructura, funcionalidades, diseño, aspectos técnicos, SEO, legal, presupuesto y resumen.
- **Diseño Moderno** – Tema oscuro con efectos _glow_, gradientes tecnológicos y tipografía moderna.
- **Formulario Multi-Paso** – Navegación fluida con barra de progreso animada.
- **Validación Robusta** – Validación de tipos con **TypeScript** y **Zod**.
- **Integración con Formspree** – Envío automático de datos al correo configurado.
- **Presupuesto en Soles (PEN)** – Adaptado para el mercado peruano.
- **Responsive Design** – Totalmente funcional en móvil, tablet y desktop.
- **Animaciones Suaves** – Transiciones profesionales con **Framer Motion**.

---

## 🚀 Stack Tecnológico

| Categoría                   | Tecnología                       |
| --------------------------- | -------------------------------- |
| **Framework**               | Next.js 16 (App Router)          |
| **Lenguaje**                | TypeScript                       |
| **Estilos**                 | Tailwind CSS + CSS personalizado |
| **Validación**              | React Hook Form + Zod            |
| **Animaciones**             | Framer Motion                    |
| **Backend (Form Handling)** | Formspree                        |
| **Despliegue**              | Vercel                           |
| **Runtime**                 | Node.js                          |

---

## 📋 Estructura del Formulario

1. **Información de Contacto** – Nombre, email, teléfono, empresa.
2. **Información del Negocio** – Descripción, propuesta de valor, identidad de marca.
3. **Objetivos del Sitio** – Propósito principal, objetivos secundarios, sitio actual.
4. **Audiencia Objetivo** – Descripción de clientes, rango de edad, ubicación.
5. **Estructura y Contenido** – Páginas necesarias, material disponible.
6. **Funcionalidades** – Requerimientos técnicos y especiales.
7. **Diseño y Estética** – Estilos visuales, paleta de colores, ejemplos de referencia.
8. **Aspectos Técnicos** – Dominio, hosting, correos corporativos.
9. **SEO y Marketing** – Importancia en buscadores, herramientas deseadas.
10. **Requisitos Legales** – Políticas, términos, GDPR, cookies.
11. **Presupuesto y Timeline** – Rango de presupuesto (en soles) y fecha estimada.
12. **Resumen Final** – Revisión y confirmación de datos.

---

## 🛠️ Instalación

### 🔧 Requisitos Previos

- Node.js 18+
- npm o yarn
- Cuenta en [Formspree](https://formspree.io)

### 🚦 Pasos

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/TU_USUARIO/project-brief-form.git
   cd project-brief-form
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar Formspree**

   - Abre `components/forms/project-brief-form.tsx`
   - Reemplaza `'xblpnvvv'` con tu ID personal de Formspree:
     ```tsx
     const [state, handleSubmit] = useFormspree("TU_ID_AQUI");
     ```

4. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. Abre en tu navegador:  
   👉 [http://localhost:3000](http://localhost:3000)

---

## 📦 Estructura del Proyecto

```
project-brief-form/
├── app/
│   ├── page.tsx                 # Landing principal
│   ├── brief/
│   │   └── page.tsx             # Página del formulario
│   ├── layout.tsx               # Layout global
│   └── globals.css              # Estilos globales
├── components/
│   ├── forms/
│   │   ├── project-brief-form.tsx
│   │   ├── section-01-client.tsx
│   │   ├── section-02-business.tsx
│   │   ├── section-03-branding.tsx
│   │   ├── section-04-objectives.tsx
│   │   ├── section-05-audience.tsx
│   │   ├── section-06-structure.tsx
│   │   ├── section-07-features.tsx
│   │   ├── section-08-design.tsx
│   │   ├── section-09-technical.tsx
│   │   ├── section-10-seo.tsx
│   │   ├── section-11-legal.tsx
│   │   └── section-12-budget.tsx
│   └── ui/
│       ├── button-glow.tsx
│       ├── card-glow.tsx
│       ├── input-glow.tsx
│       ├── select-glow.tsx
│       ├── textarea-glow.tsx
│       └── checkbox-group.tsx
├── lib/
│   ├── constants.ts
│   ├── types/
│   │   ├── form.ts
│   │   └── validation.ts
│   └── utils.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎨 Diseño y Estilo

### 💻 Tema Oscuro Tecnológico

- Colores primarios: **Azul eléctrico**, **púrpura neón**, **verde cibernético**
- Fondos con **gradientes oscuros**
- Componentes con **efectos glow** y **bordes blur**
- Estilo **minimalista y profesional**

### 🧩 Componentes UI

- **ButtonGlow** – Botones con iluminación dinámica
- **CardGlow** – Tarjetas con borde resplandeciente
- **InputGlow** – Campos de texto modernos
- **SelectGlow** – Selectores estilizados
- **TextareaGlow** – Áreas de texto con sombras sutiles
- **CheckboxGroup** – Checkboxes con diseño consistente

---

## 📊 Validación de Datos

Validación avanzada con:

- **React Hook Form** – Manejo eficiente de formularios
- **Zod** – Tipado y validación en tiempo real
- **Feedback visual inmediato** al usuario (errores y estados)

---

## 📧 Integración con Formspree

Los datos se envían automáticamente a **Formspree**, que reenvía los formularios a tu correo configurado.

1. Crea tu formulario en [https://formspree.io](https://formspree.io)
2. Obtén tu **Form ID** (por ejemplo: `xblpnvvv`)
3. Sustituye ese ID en el componente principal
4. ¡Listo! Recibirás los formularios directamente en tu bandeja de entrada ✉️

---

## 🌍 Deploy en Vercel

1. Sube el repositorio a GitHub
2. Conecta tu cuenta en [Vercel](https://vercel.com)
3. Importa el proyecto
4. ¡Vercel se encarga del build y despliegue automático!

**URL Ejemplo:**  
👉 [https://project-brief-form.vercel.app](https://project-brief-form.vercel.app)

---

## 🔧 Scripts Disponibles

| Comando         | Descripción                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Inicia el entorno de desarrollo     |
| `npm run build` | Compila el proyecto para producción |
| `npm run start` | Ejecuta la build en modo producción |
| `npm run lint`  | Analiza el código con ESLint        |

---

## 🧩 Variables de Entorno

No se requieren variables de entorno adicionales.  
El ID de Formspree se define directamente en el código (es público y seguro).

---

## 🎯 Próximas Mejoras

- [ ] Autenticación de clientes
- [ ] Dashboard administrativo
- [ ] Exportación del brief a PDF
- [ ] Integración con Google Drive
- [ ] Notificaciones en tiempo real
- [ ] Multi-idioma (ES/EN)
- [ ] Guardado automático de borradores

---

## 📄 Licencia

**MIT License** – Libre para usar, modificar y distribuir.  
Ideal para agencias, freelancers y equipos de desarrollo.

---

## 👤 Autor

Creado con ❤️ para optimizar la recopilación de requisitos de proyectos web.  
Desarrollado con **Next.js**, **TypeScript**, y **Tailwind CSS**.

---

## 📞 Soporte

¿Encontraste un bug o tienes una sugerencia?  
📬 Abre un **issue** en GitHub o contacta al autor del repositorio.

---

**Versión:** 1.0.0  
**Última actualización:** Noviembre 2025  
**Construido con:** ❤️ usando Next.js, TypeScript y Tailwind CSS
