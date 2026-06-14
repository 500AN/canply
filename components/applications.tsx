'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Waves, Plane, GraduationCap, Hammer, UtensilsCrossed } from 'lucide-react'

export function Applications() {
  const applications = [
    {
      icon: Home,
      title: 'Luxury Homes & Villas',
      description: 'Premium residential spaces and bespoke interiors',
      color: 'from-blue-500 to-cyan-500',
      image: '/residential.png',
      grade: 'Platinum/Gold BWP',
    },
    {
      icon: Building2,
      title: 'Corporate Offices',
      description: 'Modern office spaces with architectural finishes',
      color: 'from-slate-600 to-slate-800',
      image: '/commercial.png',
      grade: 'Gold BWP/BWR',
    },
    {
      icon: Building2,
      title: 'Hospitality & Retail',
      description: 'Hotels, restaurants, and luxury retail stores',
      color: 'from-amber-500 to-orange-500',
      image: '/hospitality.png',
      grade: 'Gold BWP',
    },
    {
      icon: UtensilsCrossed,
      title: 'Modular Kitchens',
      description: 'Premium kitchen designs and cabinetry solutions',
      color: 'from-orange-500 to-red-500',
      image: '/retail.png',
      grade: 'Gold MR/BWR',
    },
    {
      icon: Waves,
      title: 'Marine & Yachts',
      description: 'Waterproof solutions for luxury yacht interiors',
      color: 'from-teal-500 to-blue-500',
      image: '/marine.png',
      grade: 'Platinum',
    },
    {
      icon: Plane,
      title: 'Aerospace Interiors',
      description: 'Aircraft and aviation cabin applications',
      color: 'from-indigo-500 to-purple-500',
      image: '/aerospace.png',
      grade: 'Platinum/Gold',
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutes',
      description: 'Schools, colleges, and learning centers',
      color: 'from-emerald-500 to-teal-500',
      image: '/education.png',
      grade: 'Gold MR',
    },
    {
      icon: Hammer,
      title: 'Industrial Manufacturing',
      description: 'Heavy manufacturing and production facilities',
      color: 'from-stone-600 to-slate-700',
      image: '/industrial.png',
      grade: 'Gold BWR',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ duration: 13, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Versatile Applications</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            Perfect for Every Space
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From intimate homes to grand commercial spaces, CANPLY delivers excellence across all design visions.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {applications.map((app, index) => {
            const IconComponent = app.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-full"
                whileHover={{ y: -8 }}
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-border group-hover:border-primary/60 transition-all hover:shadow-2xl group-hover:bg-white/80">
                  {/* Content */}
                  <div className="p-6 sm:p-8 h-full flex flex-col z-10">
                    {/* Icon Container */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 12, scale: 1.15 }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                      {app.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4 flex-grow">
                      {app.description}
                    </p>

                    {/* Product Grade Badge */}
                    <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Recommended:</span>
                      <span className="text-xs font-medium text-foreground/60">{app.grade}</span>
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none rounded-2xl" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
            Let&apos;s Build Your Dream Space
          </h3>
          <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a residential project, commercial venture, or specialty application, CANPLY has the perfect solution for your vision.
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
