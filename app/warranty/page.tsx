'use client'

import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Shield, FileCheck, Clock, Award, CheckCircle, AlertCircle } from 'lucide-react'

const warranties = [
  {
    product: 'CANPLY Platinum',
    period: 'Lifetime',
    color: 'from-yellow-400 to-yellow-600',
    coverage: [
      'Complete coverage against manufacturing defects',
      'Boiling water proof guarantee',
      'Borer and fungus protection',
      'Anti-termite assurance',
      'Structural integrity assurance',
      'Premium finish guarantee',
    ],
    terms: [
      'Valid from date of purchase',
      'Non-transferable warranty',
      'Product must be used as per specifications',
      'Installation must be done by qualified professionals',
      'Original warranty card required for claims',
    ],
  },
  {
    product: 'CANPLY Gold BWP',
    period: '30 Years',
    color: 'from-amber-400 to-amber-600',
    coverage: [
      'Manufacturing defect coverage',
      'Boiling water proof performance',
      'Borer and fungus protection',
      'Anti-termite guarantee',
      'Structural performance assurance',
    ],
    terms: [
      'Valid from date of purchase',
      'Coverage limited to product defects',
      'Professional installation recommended',
      'Regular maintenance required',
      'Original invoice must be retained',
    ],
  },
  {
    product: 'CANPLY Gold BWR',
    period: '15 Years',
    color: 'from-orange-400 to-orange-600',
    coverage: [
      'Manufacturing defect coverage',
      'Boiling water resistant performance',
      'Borer and fungus protection',
      'Anti-termite assurance',
      'Quality standards compliance',
    ],
    terms: [
      'Valid from date of purchase',
      'Coverage for manufacturing issues',
      'Environmental conditions must be within specifications',
      'Warranty card must be retained',
      'Claims must be reported within 30 days',
    ],
  },
  {
    product: 'CANPLY Gold MR',
    period: '12 Years',
    color: 'from-red-400 to-red-600',
    coverage: [
      'Manufacturing defect coverage',
      'Moisture resistant performance',
      'Borer and fungus protection',
      'Anti-termite guarantee',
      'Value assurance',
    ],
    terms: [
      'Valid from date of purchase',
      'Coverage against factory defects',
      'Indoor use recommended',
      'Proper storage and handling required',
      'Warranty claim process: 30-day window',
    ],
  },
]

const claimProcess = [
  {
    step: '1',
    title: 'Inspection',
    description: 'Contact CANPLY with warranty card and proof of purchase for initial inspection',
  },
  {
    step: '2',
    title: 'Assessment',
    description: 'Our technical team assesses the defect and verifies warranty coverage',
  },
  {
    step: '3',
    title: 'Documentation',
    description: 'Complete claim documentation is prepared and verified',
  },
  {
    step: '4',
    title: 'Resolution',
    description: 'Replacement or repair is coordinated based on claim assessment',
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

export default function WarrantyPage() {
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
            Our Warranty Promise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Industry-leading warranty protection covering your CANPLY investment
          </motion.p>
        </div>
      </motion.section>

      {/* Warranties Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warranties.map((warranty, index) => (
              <motion.div
                key={warranty.product}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Header */}
                  <div className={`h-2 bg-gradient-to-r ${warranty.color}`}></div>

                  <div className="p-8">
                    {/* Title and Period */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                        {warranty.product}
                      </h3>
                      <div className="flex items-center gap-3">
                        <Award size={24} className="text-yellow-600" />
                        <span className={`text-3xl font-bold bg-gradient-to-r ${warranty.color} bg-clip-text text-transparent`}>
                          {warranty.period}
                        </span>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-600" />
                        What&apos;s Covered
                      </h4>
                      <ul className="space-y-2">
                        {warranty.coverage.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <span className="text-green-600 mt-1">✓</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Terms */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertCircle size={20} className="text-blue-600" />
                        Key Terms
                      </h4>
                      <ul className="space-y-2">
                        {warranty.terms.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-start gap-3 text-gray-600 text-sm"
                          >
                            <span className="text-blue-600 mt-0.5">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Claim Process Section */}
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
            className="text-4xl font-bold text-center text-gray-900 mb-16 font-heading"
          >
            Warranty Claim Process
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {claimProcess.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative">
                  {/* Connector Line */}
                  {index < claimProcess.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent"></div>
                  )}

                  {/* Step Card */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative z-10"
                  >
                    {/* Step Number */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto"
                    >
                      {item.step}
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 text-center mb-3 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center text-gray-900 mb-12 font-heading"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div className="space-y-4">
            {[
              {
                q: 'How do I register my warranty?',
                a: 'Keep your original invoice and warranty card safe. Registration is automatic upon purchase. You can also register online through our website.',
              },
              {
                q: 'What is not covered by warranty?',
                a: 'Warranty does not cover damage due to improper installation, misuse, natural disasters, transportation damage, or failure to follow care instructions.',
              },
              {
                q: 'Can I transfer my warranty to another owner?',
                a: 'Warranties are non-transferable and apply only to the original purchaser with proof of purchase and original warranty card.',
              },
              {
                q: 'How long do I have to file a claim?',
                a: 'Claims must be reported within 30 days of discovering the defect. Keep all documentation for faster claim processing.',
              },
              {
                q: 'What if my warranty has expired?',
                a: 'Expired warranties may still be serviced under our goodwill policy. Contact our customer service for evaluation.',
              },
            ].map((faq, i) => (
              <motion.details
                key={i}
                variants={itemVariants}
                className="group bg-white rounded-xl shadow hover:shadow-lg transition-all border border-gray-200"
              >
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  {faq.q}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    className="text-red-600 group-open:rotate-180 transition-transform"
                  >
                    ▼
                  </motion.span>
                </summary>
                <motion.div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                  {faq.a}
                </motion.div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
