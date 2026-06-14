'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-20 pb-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full opacity-15 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Content with Image */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:min-h-auto lg:py-0 py-12">
            {/* Left Column - Text Content */}
            <motion.div
              className="flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                className="flex items-center gap-2 mb-6 w-fit"
                variants={textVariants}
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Premium Quality Plywood</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground leading-tight text-balance"
                variants={textVariants}
              >
                Engineering <span className="text-primary">Premium Spaces</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-lg lg:text-xl text-foreground/70 mb-8 leading-relaxed text-balance"
                variants={textVariants}
              >
                India's trusted plywood brand delivering exceptional strength, beauty, and durability to architects, designers, and builders worldwide for over 25 years.
              </motion.p>

              {/* Features List */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
              >
                {[
                  { icon: '✓', text: 'Lifetime Warranty Available' },
                  { icon: '✓', text: 'Water & Termite Proof' },
                  { icon: '✓', text: '1000+ Happy Projects' },
                  { icon: '✓', text: '500+ Authorized Dealers' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">{feature.icon}</span>
                    <span className="text-foreground text-sm lg:text-base font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link href="/products">
                  <motion.button
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base flex items-center justify-center gap-3 hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 30, 40, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Products
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-foreground/10 text-foreground rounded-lg font-semibold text-base flex items-center justify-center gap-3 border border-foreground/20 hover:bg-foreground/15 transition-all"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(18, 18, 18, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Brochure
                </motion.button>
              </motion.div>

              {/* Trust Stats */}
              <motion.div
                className="flex gap-8 mt-12"
                variants={containerVariants}
              >
                {[
                  { number: '25+', label: 'Years' },
                  { number: '1000+', label: 'Projects' },
                  { number: '500+', label: 'Dealers' },
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <div className="text-3xl font-bold text-primary font-heading">{stat.number}</div>
                    <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/hero-modern.png"
                alt="CANPLY Plywood Showroom"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
              
              {/* Floating Card */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="font-semibold text-foreground mb-2">Premium Quality</p>
                <p className="text-sm text-foreground/70">Trusted by over 1000+ successful projects across India</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-foreground/50 uppercase tracking-wide font-medium">Scroll</p>
          <svg
            className="w-5 h-5 text-primary"
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
