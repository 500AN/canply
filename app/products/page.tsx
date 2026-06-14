'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Check, Award, Shield, Zap } from 'lucide-react'

const products = [
  {
    id: 'platinum',
    name: 'CANPLY Platinum',
    warranty: 'Lifetime',
    image: '/product-detail.png',
    color: 'from-yellow-400 to-yellow-600',
    description: 'The ultimate in plywood excellence. Premium grade with boiling water proof technology.',
    features: [
      'Boiling water proof (BWP)',
      'Borer & fungus proof',
      'Anti-termite guarantee',
      'Fire retardant',
      'Superior structural strength',
      'Premium aesthetic finish',
      'Lifetime warranty',
      'Export quality',
    ],
    specs: {
      waterResistance: 'Boiling Water Proof',
      strength: 'Highest',
      application: 'Luxury homes, Marine, Aerospace',
      thickness: '6mm - 25mm',
      grades: 'MR, BR, BWR, BWP',
    },
    price: 'Premium',
  },
  {
    id: 'gold-bwp',
    name: 'CANPLY Gold BWP',
    warranty: '30 Years',
    image: '/product-detail.png',
    color: 'from-amber-400 to-amber-600',
    description: 'Marine-grade plywood with boiling water proof finish. Perfect for wet areas.',
    features: [
      'Boiling water proof (BWP)',
      'Borer & fungus proof',
      'Anti-termite guarantee',
      'Excellent moisture resistance',
      'High strength-to-weight ratio',
      'Smooth finish',
      '30-year warranty',
      'Internationally certified',
    ],
    specs: {
      waterResistance: 'Boiling Water Proof',
      strength: 'Very High',
      application: 'Kitchens, Bathrooms, Marine',
      thickness: '4mm - 25mm',
      grades: 'MR, BR, BWR, BWP',
    },
    price: 'Premium',
  },
  {
    id: 'gold-bwr',
    name: 'CANPLY Gold BWR',
    warranty: '15 Years',
    image: '/product-detail.png',
    color: 'from-orange-400 to-orange-600',
    description: 'Boiling water resistant plywood for damp environments and moisture-prone areas.',
    features: [
      'Boiling water resistant (BWR)',
      'Borer & fungus proof',
      'Anti-termite guarantee',
      'Good moisture resistance',
      'High durability',
      'Smooth surface',
      '15-year warranty',
      'Industry standard quality',
    ],
    specs: {
      waterResistance: 'Boiling Water Resistant',
      strength: 'High',
      application: 'General residential, Commercial',
      thickness: '4mm - 25mm',
      grades: 'MR, BR, BWR',
    },
    price: 'Mid-range',
  },
  {
    id: 'gold-mr',
    name: 'CANPLY Gold MR',
    warranty: '12 Years',
    image: '/product-detail.png',
    color: 'from-red-400 to-red-600',
    description: 'Moisture-resistant plywood for indoor applications. Excellent value and quality.',
    features: [
      'Moisture resistant (MR)',
      'Borer & fungus proof',
      'Anti-termite guarantee',
      'Good strength',
      'Cost-effective',
      'Fine finish',
      '12-year warranty',
      'Trusted by professionals',
    ],
    specs: {
      waterResistance: 'Moisture Resistant',
      strength: 'Good',
      application: 'Furniture, Indoor cabinets, General use',
      thickness: '4mm - 25mm',
      grades: 'MR, BR',
    },
    price: 'Value',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            CANPLY Product Lineup
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Premium plywood solutions for every need, from luxury residential to industrial applications
          </motion.p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Header Bar with Color */}
                  <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>

                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title and Warranty */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2 font-heading">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Award size={20} className="text-yellow-600" />
                        <span className="text-lg font-semibold text-yellow-600">
                          {product.warranty} Warranty
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                    {/* Specifications */}
                    <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
                      <h4 className="font-semibold text-gray-900 mb-4">Specifications</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600">Water Resistance:</span>
                          <span className="font-semibold text-gray-900">
                            {product.specs.waterResistance}
                          </span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600">Strength:</span>
                          <span className="font-semibold text-gray-900">
                            {product.specs.strength}
                          </span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600">Thickness:</span>
                          <span className="font-semibold text-gray-900">
                            {product.specs.thickness}
                          </span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600">Applications:</span>
                          <span className="font-semibold text-gray-900 text-right">
                            {product.specs.application}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <Check size={18} className="text-red-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${product.color} hover:shadow-lg transition-shadow`}
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center text-gray-900 mb-12 font-heading"
          >
            Product Comparison
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="overflow-x-auto rounded-2xl shadow-lg"
          >
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  {products.map((p) => (
                    <th key={p.id} className="px-6 py-4 text-center font-semibold">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Warranty Period', values: ['Lifetime', '30 Years', '15 Years', '12 Years'] },
                  { label: 'Water Resistance', values: ['BWP', 'BWP', 'BWR', 'MR'] },
                  { label: 'Strength Level', values: ['Highest', 'Very High', 'High', 'Good'] },
                  { label: 'Borer & Fungus Proof', values: ['✓', '✓', '✓', '✓'] },
                  { label: 'Fire Retardant', values: ['✓', '✓', '-', '-'] },
                  { label: 'Marine Grade', values: ['✓', '✓', '-', '-'] },
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 border-r border-gray-200">
                      {row.label}
                    </td>
                    {row.values.map((value, j) => (
                      <td
                        key={j}
                        className="px-6 py-4 text-center text-gray-700 border-r border-gray-200 last:border-r-0"
                      >
                        {value === '✓' ? (
                          <span className="text-red-600 text-lg">✓</span>
                        ) : value === '-' ? (
                          <span className="text-gray-300 text-lg">-</span>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
