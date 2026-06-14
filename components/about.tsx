'use client'

import { motion } from 'framer-motion'
import { Check, Zap, ShieldCheck, Handshake, Lightbulb, Leaf, Cog } from 'lucide-react'

export function About() {
  const timelineItems = [
    {
      year: '25+',
      title: 'Years of Excellence',
      description: 'Industry-leading expertise in premium plywood manufacturing',
    },
    {
      year: '1000+',
      title: 'Trusted Projects',
      description: 'Delivering quality to prestigious residential and commercial spaces',
    },
    {
      year: 'Pan India',
      title: 'Nationwide Network',
      description: '500+ dealers ensuring availability across the country',
    },
    {
      year: 'Advanced',
      title: 'Manufacturing',
      description: 'State-of-the-art facilities with precision engineering',
    },
  ]

  const highlights = [
    'Premium Quality Assurance',
    'Lifetime Performance Warranty',
    'Borer & Fungus Proof Technology',
    'Fire Retardant Solutions',
    'Waterproof & Water Resistant Options',
    'Nationwide Dealer Network',
  ]

  const coreValues = [
    { icon: Zap, title: 'Excellence', desc: 'Uncompromising quality in every product' },
    { icon: ShieldCheck, title: 'Durability', desc: 'Built to last decades, not years' },
    { icon: Handshake, title: 'Trust', desc: 'Your confidence is our foundation' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Advancing plywood technology' },
    { icon: Leaf, title: 'Sustainability', desc: 'Responsible manufacturing practices' },
    { icon: Cog, title: 'Precision', desc: 'Engineering excellence in every sheet' },
  ]

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-secondary to-background relative overflow-hidden">
      {/* Accent Background */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            About CANPLY Plywood
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Crafting Premium Spaces with Innovation and Integrity
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start mb-16 sm:mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
              Our Legacy
            </h3>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              CANPLY stands as India&apos;s premier plywood manufacturer with over 25 years of unwavering commitment to excellence. Headquartered in Bangalore, we&apos;ve built our reputation on delivering premium quality, durability, and innovation.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              From luxury homes and villas to commercial spaces and hospitality projects, CANPLY has been the trusted choice of architects, interior designers, and builders across the country.
            </p>

            {/* Factory Image */}
            <motion.div
              className="relative w-full h-72 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-700 to-slate-900 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-xl font-bold mb-1">State-of-the-Art Facility</h4>
                <p className="text-sm opacity-90">Modern manufacturing & quality testing excellence</p>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:sticky lg:top-24"
          >
            <h4 className="text-xl font-bold text-foreground mb-8">Our Journey</h4>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-primary/10 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </motion.div>

                    {/* Content */}
                    <div className="p-4 rounded-lg hover:bg-foreground/5 transition-colors">
                      <h4 className="text-lg sm:text-xl font-bold text-primary mb-1">
                        {item.year}
                      </h4>
                      <h5 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h5>
                      <p className="text-sm sm:text-base text-foreground/60">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 sm:p-8 rounded-xl bg-background/60 border border-border hover:border-primary/50 hover:bg-background/90 transition-all text-center"
                whileHover={{ translateY: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-foreground/60 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}