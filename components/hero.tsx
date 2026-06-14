'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-20 pb-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full opacity-15 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 sm:-bottom-40 sm:-left-40 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.17, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        {/* Subtle floating accent for depth */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full opacity-40 hidden sm:block"
          animate={{
            y: [0, -24, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full opacity-30 hidden sm:block"
          animate={{
            y: [0, 20, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Content with Image */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-8 sm:py-12 lg:py-16">
            {/* Left Column - Text Content */}
            <motion.div
              className="flex flex-col justify-center order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                className="flex items-center gap-2 mb-5 sm:mb-6 w-fit"
                variants={textVariants}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em]">
                  Premium Quality Plywood
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-[2.75rem] sm:text-5xl lg:text-7xl font-heading font-bold mb-5 sm:mb-6 text-foreground leading-[1.05] tracking-tight text-balance"
                variants={textVariants}
              >
                Engineering{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">Premium Spaces</span>
                  <motion.span
                    className="absolute left-0 bottom-1 sm:bottom-2 h-2 sm:h-3 w-full bg-primary/15 rounded-full -z-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0 }}
                  />
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-foreground/70 mb-7 sm:mb-8 leading-relaxed text-balance max-w-xl"
                variants={textVariants}
              >
                India&apos;s trusted plywood brand delivering exceptional strength, beauty, and durability to architects, designers, and builders worldwide for over 25 years.
              </motion.p>

              {/* Features List */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8"
                variants={containerVariants}
              >
                {[
                  { text: 'Lifetime Warranty Available' },
                  { text: 'Water & Termite Proof' },
                  { text: '1000+ Happy Projects' },
                  { text: '500+ Authorized Dealers' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-foreground text-sm sm:text-base font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                variants={itemVariants}
              >
                <Link href="/products" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-3 hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(255, 30, 40, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Explore Products
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <motion.button
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-foreground/10 text-foreground rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-3 border border-foreground/20 hover:bg-foreground/15 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={18} />
                  Download Brochure
                </motion.button>
              </motion.div>

              {/* Trust Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12 pt-8 border-t border-foreground/10"
                variants={containerVariants}
              >
                {[
                  { number: '25+', label: 'Years' },
                  { number: '1000+', label: 'Projects' },
                  { number: '500+', label: 'Dealers' },
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <div className="text-2xl sm:text-3xl font-bold text-primary font-heading">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-foreground/60 font-medium mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative h-[280px] sm:h-[380px] lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/hero-modern.png"
                alt="CANPLY Plywood Showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-black/0 to-transparent pointer-events-none" />

              {/* Floating Card */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-xl sm:max-w-[260px]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileInView={{
                  y: [0, -8, 0],
                  transition: { duration: 4, repeat: Infinity, delay: 1.6 },
                }}
              >
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <Sparkles size={16} className="text-primary flex-shrink-0" />
                  <p className="font-semibold text-foreground text-sm sm:text-base">Premium Quality</p>
                </div>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  Trusted by over 1,000+ successful projects across India
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="relative sm:absolute sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 pb-6 sm:pb-0 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-wide font-medium">Scroll</p>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}