'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Droplets, Layers, Wrench, Award } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Borer & Fungus Proof',
      description: 'Advanced protection against termites and wood-boring insects',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Anti-Termite Protection',
      description: 'Guaranteed defense against termite infestation for years',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Droplets,
      title: 'Fire Retardant Technology',
      description: 'Enhanced fire resistance for safer interiors',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Droplets,
      title: 'Waterproof Technology',
      description: 'Marine-grade protection for wet areas and exterior use',
      color: 'from-teal-500 to-blue-500',
    },
    {
      icon: Layers,
      title: 'High Density Core',
      description: 'Premium timber core for superior strength and durability',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Wrench,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art facilities ensuring perfect consistency',
      color: 'from-slate-600 to-slate-800',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity }}
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose CANPLY</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            Premium Features That Make the Difference
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Every CANPLY product is engineered to deliver uncompromising quality, durability, and performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
              >
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/40 group-hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className="h-1 w-8 bg-gradient-to-r from-primary to-transparent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary to-transparent blur transition-opacity duration-300 pointer-events-none" />
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
          <p className="text-lg text-foreground/70 mb-6">
            Experience the CANPLY difference in every sheet
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Complete Specifications
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
