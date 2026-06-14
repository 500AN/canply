'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/products',
      submenu: [
        { label: 'Premium Birch', href: '/products/premium-birch' },
        { label: 'Commercial Grade', href: '/products/commercial-grade' },
        { label: 'Marine Grade', href: '/products/marine-grade' },
        { label: 'Phenol Formaldehyde', href: '/products/phenol-formaldehyde' },
        { label: 'Film Faced', href: '/products/film-faced' },
        { label: 'Hardwood Veneer', href: '/products/hardwood-veneer' },
        { label: 'Moisture Resistant', href: '/products/moisture-resistant' },
      ],
    },
    { label: 'Brands', href: '/brands' },
    { label: 'Applications', href: '/applications' },
    { label: 'Warranty', href: '/warranty' },
    { label: 'Brochures', href: '/brochures' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="text-2xl md:text-3xl font-bold text-red-600"
              whileHover={{ scale: 1.05 }}
            >
              CANPLY
            </motion.div>
            <span className="text-xs md:text-sm text-gray-600">PLYWOOD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors relative inline-flex items-center gap-1"
                    onMouseEnter={() => 'submenu' in item && setOpenDropdown(item.label)}
                    onMouseLeave={() => 'submenu' in item && setOpenDropdown(null)}
                  >
                    {item.label}
                    {'submenu' in item && <ChevronDown size={16} />}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>

                {/* Dropdown Menu */}
                {'submenu' in item && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: openDropdown === item.label ? 1 : 0,
                      y: openDropdown === item.label ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {item.submenu?.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors text-sm"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-red-600 font-medium py-2"
                  onClick={() => {
                    setIsOpen(false);
                    'submenu' in item && setOpenDropdown(null);
                  }}
                >
                  {item.label}
                </Link>
                {'submenu' in item && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openDropdown === item.label ? 1 : 0,
                      height: openDropdown === item.label ? 'auto' : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-2 py-2">
                      {item.submenu?.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block text-gray-600 hover:text-red-600 text-sm py-1"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
                {'submenu' in item && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }}
                    className="text-gray-600 hover:text-red-600 text-xs"
                  >
                    {openDropdown === item.label ? '▼' : '▶'}
                  </button>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 bg-red-600 text-white rounded-lg font-medium text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
