'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface Metric {
  value: number
  label: string
  suffix: string
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const interval = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-primary">
      {count}
      <span className="text-foreground">{suffix}</span>
    </div>
  )
}

export function TrustMetrics() {
  const metrics: Metric[] = [
    { value: 25, label: 'Years Experience', suffix: '+' },
    { value: 1000, label: 'Projects Completed', suffix: '+' },
    { value: 500, label: 'Dealers Across India', suffix: '+' },
    { value: 100, label: 'Quality Tested', suffix: '%' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            Trusted by India&apos;s Best
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our track record speaks volumes about our commitment to quality and excellence.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-8 sm:p-10 rounded-xl bg-gradient-to-br from-white/80 to-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <Counter value={metric.value} suffix={metric.suffix} />
              </motion.div>
              <p className="text-base sm:text-lg font-semibold text-foreground/70 group-hover:text-primary transition-colors">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-16 sm:mt-20 h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
}
