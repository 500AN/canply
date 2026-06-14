'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Menon',
      role: 'Architect',
      company: 'Premium Designs Studio',
      text: 'CANPLY has been our go-to choice for luxury residential projects. The quality and consistency are exceptional.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      role: 'Interior Designer',
      company: 'Sharma Interiors',
      text: 'The waterproof variants are perfect for our modular kitchen projects. Zero complaints from clients.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Vikram Patel',
      role: 'Builder',
      company: 'Patel Construction Group',
      text: 'We\'ve been working with CANPLY for over a decade. Their warranty support and product reliability are unmatched.',
      rating: 5,
      image: '👷',
    },
    {
      name: 'Anjali Desai',
      role: 'Homeowner',
      company: 'Bangalore',
      text: 'Our villa interior was completed with CANPLY Platinum. The finish is absolutely pristine and durable.',
      rating: 5,
      image: '👩',
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
        className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ duration: 14, repeat: Infinity }}
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Trusted Voices</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Architects, designers, builders, and homeowners share their experiences with CANPLY.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-sm border border-border group-hover:border-primary/50 transition-all hover:shadow-lg p-6 sm:p-8 flex flex-col">
                {/* Stars */}
                <motion.div
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </motion.div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed mb-6 flex-grow italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                      {testimonial.image}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/50">{testimonial.company}</p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-t from-primary to-transparent pointer-events-none transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 sm:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
            Join Thousands of Satisfied Customers
          </h3>
          <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
            Experience the CANPLY difference in your next project.
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with a Dealer
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
