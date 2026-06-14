'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award } from 'lucide-react'

export function Warranty() {
  const warranties = [
    {
      years: 'Lifetime',
      grade: 'CANPLY Platinum',
      features: ['Lifetime Performance', 'Premium Grade', 'Maximum Protection', 'All Applications'],
      icon: 'crown',
    },
    {
      years: '30 Years',
      grade: 'CANPLY Gold BWP',
      features: ['Marine Grade', 'Waterproof', 'All Weather', 'Premium Quality'],
      icon: 'medal',
    },
    {
      years: '25 Years',
      grade: 'CANPLY Gold',
      features: ['Extended Coverage', 'Premium Finish', 'Consistent Performance'],
      icon: 'star',
    },
    {
      years: '21 Years',
      grade: 'CANBOND Series',
      features: ['Reliable Protection', 'Quality Assured', 'Standard Grade'],
      icon: 'check',
    },
    {
      years: '15 Years',
      grade: 'CANPLY Gold BWR',
      features: ['Water Resistant', 'Interior Use', 'Durable Performance'],
      icon: 'droplet',
    },
    {
      years: '12 Years',
      grade: 'CANPLY Gold MR',
      features: ['Moisture Resistant', 'Interior Only', 'Value Grade'],
      icon: 'shield',
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
    <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-secondary to-background relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity }}
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
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Warranty Coverage</span>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            Comprehensive Warranty Protection
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Industry-leading warranties ensuring your investment is protected for years to come.
          </p>
        </motion.div>

        {/* Warranty Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {warranties.map((warranty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-sm border border-border group-hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden">
                {/* Badge - Premium indicator */}
                {index === 0 && (
                  <motion.div
                    className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-bold uppercase"
                    layoutId="featured"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Content */}
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  {/* Years */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-5xl sm:text-6xl font-heading font-bold text-primary mb-2">
                      {warranty.years}
                    </div>
                    <p className="text-sm text-foreground/60 uppercase tracking-wider font-medium">Year Warranty</p>
                  </motion.div>

                  {/* Grade */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-snug">
                    {warranty.grade}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-3 flex-grow mb-8">
                    {warranty.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold group-hover:shadow-lg transition-all hover:bg-primary/90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-t from-primary to-transparent pointer-events-none group-hover:opacity-20 transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Warranty Information */}
        <motion.div
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="p-8 sm:p-10 rounded-2xl bg-white/70 border border-border">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <h3 className="text-xl font-bold text-foreground">Industry Leading</h3>
            </div>
            <p className="text-foreground/70">
              CANPLY warranties are among the most comprehensive in the industry, reflecting our confidence in product quality and durability.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white/70 border border-border">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <h3 className="text-xl font-bold text-foreground">Hassle-Free Claims</h3>
            </div>
            <p className="text-foreground/70">
              Our warranty process is transparent and straightforward, ensuring you receive support when you need it most.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
