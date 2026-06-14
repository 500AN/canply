'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Heart, LinkIcon, Share2 } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Products: ['CANPLY Platinum', 'CANPLY Gold', 'CANBOND', 'BONDPLY'],
    Company: ['About Us', 'Warranty', 'Manufacturing', 'Sustainability'],
    Support: ['Dealer Locator', 'Downloads', 'FAQs', 'Contact Us'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background Accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {/* Brand */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                CANPLY
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Engineering premium spaces with excellence since 25+ years.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Heart, label: 'Facebook' },
                  { icon: LinkIcon, label: 'LinkedIn' },
                  { icon: Share2, label: 'Twitter' },
                ].map((social, i) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      aria-label={social.label}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white uppercase text-xs tracking-wider">Products</h4>
              <ul className="space-y-3">
                {footerLinks.Products.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white uppercase text-xs tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.Company.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white uppercase text-xs tracking-wider">Support</h4>
              <ul className="space-y-3">
                {footerLinks.Support.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white uppercase text-xs tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.Legal.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-white/70">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              &copy; {currentYear} CANPLY Plywood. All rights reserved. | Built to Last. Crafted for Excellence.
            </motion.p>

            <div className="flex gap-6 text-sm">
              {[
                { icon: Mail, value: 'info@canply.com' },
                { icon: Phone, value: '+91 80 XXXX XXXX' },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <motion.a
                    key={i}
                    href="#"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <IconComponent size={16} />
                    <span>{item.value}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
