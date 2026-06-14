'use client'

import { motion } from 'framer-motion'
import { Star, Award } from 'lucide-react'

export function Products() {
  const products = [
    {
      name: 'CANPLY Platinum',
      warranty: 'Lifetime',
      grade: 'BWP Grade',
      description: 'Premium exterior and interior applications',
      features: ['Gurjan + Eucalyptus Timber', 'Boiling Water Proof', 'Lifetime Warranty', 'Marine Grade Durability'],
      badge: 'Premium',
      color: 'from-amber-100 to-yellow-50',
      borderColor: 'border-amber-300',
    },
    {
      name: 'CANPLY Gold BWP',
      warranty: '30 Years',
      grade: 'Marine Grade',
      description: 'Premium luxury interiors and wet areas',
      features: ['Waterproof Technology', 'Luxury Finishes', '30-Year Warranty', 'All-Weather Protection'],
      badge: 'Luxury',
      color: 'from-yellow-100 to-orange-50',
      borderColor: 'border-yellow-300',
    },
    {
      name: 'CANPLY Gold BWR',
      warranty: '15 Years',
      grade: 'Water Resistant',
      description: 'Premium construction and interiors',
      features: ['Water Resistant Core', 'Superior Bonding', '15-Year Warranty', 'Stable Performance'],
      badge: 'Trusted',
      color: 'from-orange-100 to-red-50',
      borderColor: 'border-orange-300',
    },
    {
      name: 'CANPLY Gold MR',
      warranty: '12 Years',
      grade: 'Moisture Resistant',
      description: 'Interior applications and dry areas',
      features: ['Moisture Resistant', 'Premium Quality', '12-Year Warranty', 'Consistent Performance'],
      badge: 'Reliable',
      color: 'from-slate-100 to-gray-50',
      borderColor: 'border-slate-300',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Product Lineup</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            Premium Plywood for Every Need
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our comprehensive range of premium plywood products, each engineered for specific applications and durability requirements.
          </p>
        </motion.div>

        {/* Products Scroll */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Product Card */}
              <div className={`relative h-full rounded-2xl bg-gradient-to-br ${product.color} border-2 ${product.borderColor} overflow-hidden hover:border-primary/70 transition-all duration-300 hover:shadow-xl`}>
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold uppercase tracking-wider">
                    {product.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  {/* Product Name */}
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 font-medium">{product.grade}</p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-base mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  {/* Warranty Badge */}
                  <div className="mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-lg font-bold text-primary">{product.warranty} Warranty</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all group-hover:bg-primary/90"
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

        {/* Additional Product Series */}
        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="p-8 sm:p-10 rounded-2xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors text-center">
            <h4 className="text-2xl font-bold text-foreground mb-3">CANBOND Series</h4>
            <p className="text-foreground/70 mb-4">BWP • BWR • MR variants for diverse applications</p>
            <div className="flex justify-center gap-3">
              <span className="px-4 py-2 bg-secondary rounded-lg text-sm font-semibold text-foreground">Premium Range</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors text-center">
            <h4 className="text-2xl font-bold text-foreground mb-3">BONDPLY Series</h4>
            <p className="text-foreground/70 mb-4">BWP • BWR • MR variants for everyday excellence</p>
            <div className="flex justify-center gap-3">
              <span className="px-4 py-2 bg-secondary rounded-lg text-sm font-semibold text-foreground">Value Range</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
