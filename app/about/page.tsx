'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Award, Target, Heart, Zap } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We are committed to delivering the highest quality plywood products with superior craftsmanship and attention to detail.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description:
      'Continuous improvement through advanced manufacturing technology and sustainable practices.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'Building trust with our customers through transparency, honesty, and ethical business practices.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description:
      'Engineering solutions that meet and exceed international standards for strength and durability.',
  },
]

const milestones = [
  { year: '2000', title: 'Founded', description: 'CANPLY established in Bangalore' },
  { year: '2005', title: 'Growth', description: 'Expanded to 500+ dealer network' },
  { year: '2010', title: 'Excellence', description: 'International quality certifications' },
  { year: '2015', title: 'Innovation', description: 'New manufacturing plant commissioned' },
  { year: '2020', title: 'Sustainability', description: 'Eco-friendly production methods' },
  { year: '2025', title: 'Leadership', description: 'India&apos;s most trusted plywood brand' },
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

export default function AboutPage() {
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
            Engineering Premium Spaces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            25+ years of excellence, innovation, and unwavering commitment to quality
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-heading">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2000, CANPLY started with a simple vision: to revolutionize the
                plywood industry by delivering uncompromising quality at every level. What began
                as a small operation has grown into India&apos;s most trusted plywood brand.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Today, CANPLY serves over 500 dealers across the country and has become the
                preferred choice for architects, designers, contractors, and homeowners who demand
                the best.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey is driven by innovation, sustainability, and an unyielding commitment
                to excellence. Every sheet of CANPLY plywood represents 25+ years of mastery.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/factory.png"
                alt="CANPLY Manufacturing Facility"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-200"
          >
            {[
              { number: '25+', label: 'Years of Excellence' },
              { number: '500+', label: 'Dealer Network' },
              { number: '1000+', label: 'Completed Projects' },
              { number: '100%', label: 'Quality Assurance' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center"
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-red-600 mb-2 font-heading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
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
            className="text-4xl font-bold text-gray-900 mb-12 text-center font-heading"
          >
            Our Core Values
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <motion.div
                    className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-red-600" size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-16 text-center font-heading"
          >
            Our Journey
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-red-200"></div>

            <motion.div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 1 ? 'md:dir-rtl' : ''
                  }`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'md:dir-ltr' : ''}>
                      <motion.div
                        whileHover={{ x: index % 2 === 0 ? 8 : -8 }}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                      >
                        <h3 className="text-2xl font-bold text-red-600 mb-2 font-heading">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"
                      ></motion.div>
                    </div>

                    {/* Year */}
                    <div className="text-center md:text-right md:col-span-1">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-4xl font-bold text-gray-300 font-heading"
                      >
                        {milestone.year}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team/Facilities Section */}
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
            className="text-4xl font-bold text-gray-900 mb-12 text-center font-heading"
          >
            Our Team & Facilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/team.png"
                alt="CANPLY Expert Team"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                Expert Craftspeople
              </h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our team comprises skilled engineers, quality assurance specialists, and
                experienced craftspeople dedicated to perfecting every aspect of plywood
                manufacturing.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With continuous training and access to cutting-edge technology, our team ensures
                that every sheet of CANPLY plywood meets our rigorous quality standards.
              </p>
              <ul className="space-y-3">
                {[
                  'ISO 9001:2015 Certified',
                  'Advanced Quality Testing Labs',
                  'Eco-Friendly Manufacturing',
                  'Zero-Defect Commitment',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
