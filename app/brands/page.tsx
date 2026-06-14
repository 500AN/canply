'use client';

import { brands } from '@/lib/brands';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function BrandsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <main className="min-h-screen bg-background pt-20 md:pt-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-b border-border bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Trusted brands delivering premium quality plywood products across the globe with decades
            of expertise and innovation.
          </motion.p>
        </div>
      </motion.section>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {brands.map((brand) => (
            <motion.div key={brand.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col p-8">
                {/* Logo Placeholder */}
                <div className="h-20 bg-secondary rounded-lg mb-6 flex items-center justify-center text-muted-foreground">
                  <span className="text-sm font-semibold">{brand.name}</span>
                </div>

                {/* Brand Info */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{brand.description}</p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-secondary rounded p-3">
                      <p className="text-xs text-muted-foreground">Established</p>
                      <p className="font-semibold">{brand.established}</p>
                    </div>
                    <div className="bg-secondary rounded p-3">
                      <p className="text-xs text-muted-foreground">Products</p>
                      <p className="font-semibold">{brand.products}</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {brand.certifications.map((cert) => (
                        <Badge key={cert} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Regions */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Operating Regions</p>
                    <div className="flex flex-wrap gap-2">
                      {brand.regions.map((region) => (
                        <Badge key={region} variant="outline" className="text-xs">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trust Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16 py-16 border-t border-border bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Brands?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'International Certifications',
                description:
                  'All brands maintain strict compliance with international standards including FSC, ISO 9001, and DNV GL certifications.',
              },
              {
                title: 'Proven Expertise',
                description:
                  'Decades of combined experience in plywood manufacturing with a track record of innovation and quality.',
              },
              {
                title: 'Global Reach',
                description:
                  'Operating across multiple continents, our brands serve diverse markets from luxury residential to industrial applications.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
