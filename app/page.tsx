// app/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Code2, Rocket } from 'lucide-react'
import { ButtonGlow } from '@/components/ui/button-glow'
import { CardGlow } from '@/components/ui/card-glow'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Rápido y Fácil',
      description: 'Completa el formulario en minutos con nuestra interfaz intuitiva',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Detallado',
      description: 'Captura todos los detalles técnicos y requisitos de tu proyecto',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Profesional',
      description: 'Diseñado por expertos para obtener la mejor información',
    },
  ]

  const handleScrollToFeatures = () => {
    const element = document.getElementById('features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/5 backdrop-blur-sm">
              <span className="text-xs font-semibold text-electric-blue">✨ Nuevo</span>
              <span className="text-xs text-foreground/60">Formulario profesional para tu proyecto</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Brief de{' '}
            <span className="bg-gradient-to-r from-electric-blue via-neon-purple to-cyber-green bg-clip-text text-transparent">
              Proyecto Web
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Completa nuestro formulario detallado para describir tu visión. Capturaremos todos los requisitos técnicos, objetivos y timeline de tu proyecto en un solo lugar.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/brief">
              <ButtonGlow size="lg" className="flex items-center gap-2">
                Comenzar Formulario
                <ArrowRight size={20} />
              </ButtonGlow>
            </Link>
            <ButtonGlow
              variant="outline"
              size="lg"
              onClick={handleScrollToFeatures}
            >
              Saber Más
            </ButtonGlow>
          </motion.div>

          {/* Features Section */}
          <motion.div
            id="features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <CardGlow className="h-full border-electric-blue/20 hover:border-electric-blue/40 group transition-all duration-300">
                  <div className="mb-4 p-3 w-fit rounded-lg bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors duration-300">
                    <div className="text-electric-blue">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardGlow>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-10 right-10 h-20 w-20 rounded-lg border border-electric-blue/20 bg-electric-blue/5 backdrop-blur-sm hidden lg:flex items-center justify-center pointer-events-none"
      >
        <Zap className="h-10 w-10 text-electric-blue/40" />
      </motion.div>
    </div>
  )
}
