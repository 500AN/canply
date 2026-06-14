'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight } from 'lucide-react'

const applications = [
  {
    id: 'residential',
    title: 'Luxury Residential',
    description: 'Premium home interiors, custom cabinetry, and elegant wall paneling',
    image: '/residential.png',
    products: ['Platinum', 'Gold BWP'],
    features: ['Water-resistant', 'Aesthetic appeal', 'Durability', 'Custom designs'],
    specs: {
      warranty: 'Lifetime',
      applications: 'Kitchens, Wardrobes, Wall panels, Furniture',
    },
  },
  {
    id: 'commercial',
    title: 'Commercial Offices',
    description: 'Modern office spaces, conference rooms, and corporate interiors',
    image: '/commercial.png',
    products: ['Gold BWP', 'Gold BWR'],
    features: ['Professional finish', 'Durability', 'Easy maintenance', 'Modern aesthetics'],
    specs: {
      warranty: '30 years',
      applications: 'Partitions, Desking, Wall cladding, Executive suites',
    },
  },
  {
    id: 'retail',
    title: 'Retail & Showrooms',
    description: 'High-end retail spaces with beautiful display solutions',
    image: '/retail.png',
    products: ['Gold BWP', 'Gold MR'],
    features: ['Display excellence', 'Premium look', 'Functional design', 'Customer appeal'],
    specs: {
      warranty: '30 years',
      applications: 'Display units, Shelving, Store fixtures, Merchandise displays',
    },
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Hotels',
    description: 'Sophisticated restaurant and hotel interior design',
    image: '/hospitality.png',
    products: ['Gold BWP', 'Gold BWR'],
    features: ['Aesthetic excellence', 'Fire-resistant option', 'Long-lasting', 'Elegant finish'],
    specs: {
      warranty: '30 years',
      applications: 'Reception areas, Dining interiors, Room finishes, Bar counters',
    },
  },
  {
    id: 'marine',
    title: 'Marine & Yacht Building',
    description: 'High-performance waterproof plywood for marine applications',
    image: '/marine.png',
    products: ['Gold BWP', 'Platinum'],
    features: ['Waterproof', 'Salt-resistant', 'Premium finish', 'Structural integrity'],
    specs: {
      warranty: 'Lifetime',
      applications: 'Yacht interiors, Boat cabins, Marine fixtures, Deck finishes',
    },
  },
  {
    id: 'aerospace',
    title: 'Aerospace & Aviation',
    description: 'Precision-engineered plywood for aircraft interiors',
    image: '/aerospace.png',
    products: ['Platinum', 'Gold BWR'],
    features: ['Lightweight', 'High strength', 'Fire-resistant', 'Precision engineered'],
    specs: {
      warranty: 'Lifetime',
      applications: 'Aircraft cabins, Cockpit finishes, Cargo areas, Luxury seating',
    },
  },
  {
    id: 'education',
    title: 'Education & Institutions',
    description: 'Sustainable plywood for schools and universities',
    image: '/education.png',
    products: ['Gold BWR', 'Gold MR'],
    features: ['Eco-friendly', 'Durable', 'Cost-effective', 'Easy maintenance'],
    specs: {
      warranty: '15-30 years',
      applications: 'Classroom furniture, Library shelving, Laboratory benches, Auditoriums',
    },
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    description: 'Industrial-grade plywood for manufacturing and storage',
    image: '/industrial.png',
    products: ['Gold MR', 'Gold BWR'],
    features: ['Heavy-duty', 'Cost-effective', 'Impact-resistant', 'Easy handling'],
    specs: {
      warranty: '12-15 years',
      applications: 'Machinery bases, Storage pallets, Work surfaces, Industrial fixtures',
    },
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

export default function ApplicationsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const filtered =
    selectedProduct === null
      ? applications
      : applications.filter((app) => app.products.includes(selectedProduct))

  const productGrades = ['Platinum', 'Gold BWP', 'Gold BWR', 'Gold MR']

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
            Where CANPLY Goes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            From luxury homes to aerospace engineering, CANPLY plywood brings excellence to diverse industries and applications worldwide.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Filter by Product Grade
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              key="all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProduct(null)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedProduct === null
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-600'
              }`}
            >
              All Applications
            </motion.button>
            {productGrades.map((grade) => (
              <motion.button
                key={grade}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct(grade)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedProduct === grade
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-600'
                }`}
              >
                {grade}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Applications Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((app, index) => (
              <motion.div
                key={app.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gray-200">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                      {app.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{app.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {app.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-6 border-t border-gray-200 pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                            Warranty
                          </p>
                          <p className="text-lg font-bold text-red-600">
                            {app.specs.warranty}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                            Products
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {app.products.map((p) => (
                              <span
                                key={p}
                                className="text-xs font-semibold text-gray-700"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-6">
                      <span className="font-semibold">Applications: </span>
                      {app.specs.applications}
                    </p>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                      Learn More
                      <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
