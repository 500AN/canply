'use client';

import { products } from '@/lib/products';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface BrochureItem {
  id: string;
  title: string;
  description: string;
  category: string;
  fileSize: string;
  updated: string;
  icon: React.ReactNode;
}

export default function BrochuresPage() {
  const brochures: BrochureItem[] = [
    {
      id: 'master-catalog',
      title: 'Master Product Catalog',
      description: 'Complete guide to all CANPLY products with specifications, applications, and certifications.',
      category: 'General',
      fileSize: '8.5 MB',
      updated: '2024-06',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 'hardwood-guide',
      title: 'Hardwood Plywood Guide',
      description: 'Detailed specifications for premium birch and hardwood veneer plywood products.',
      category: 'Hardwood',
      fileSize: '5.2 MB',
      updated: '2024-05',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 'marine-specs',
      title: 'Marine Grade Specifications',
      description: 'Technical specifications and standards for marine-grade plywood applications.',
      category: 'Marine',
      fileSize: '6.8 MB',
      updated: '2024-06',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 'commercial-guide',
      title: 'Commercial Grade Solutions',
      description: 'Comprehensive guide to commercial and industrial plywood products.',
      category: 'Commercial',
      fileSize: '7.1 MB',
      updated: '2024-04',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 'installation-guide',
      title: 'Installation & Application Guide',
      description: 'Best practices for installation, handling, and application of plywood products.',
      category: 'Technical',
      fileSize: '4.3 MB',
      updated: '2024-05',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 'warranty-info',
      title: 'Warranty & Compliance Documents',
      description: 'Complete warranty information and compliance certifications documentation.',
      category: 'Documentation',
      fileSize: '3.2 MB',
      updated: '2024-06',
      icon: <FileText className="w-8 h-8" />,
    },
  ];

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
            Brochures & Downloads
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Access comprehensive product brochures, technical documentation, and compliance certifications
            for all CANPLY plywood solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Brochures Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {brochures.map((brochure) => (
            <motion.div key={brochure.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col p-6">
                {/* Icon */}
                <div className="text-primary mb-4">{brochure.icon}</div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{brochure.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{brochure.description}</p>

                  {/* Meta Info */}
                  <div className="space-y-2 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{brochure.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>Updated: {brochure.updated}</span>
                    </div>
                    <div>
                      <span>File Size: {brochure.fileSize}</span>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <Button className="w-full gap-2" variant="default">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product-Specific Brochures */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16 py-16 border-t border-border bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Individual Product Brochures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <Button size="sm" variant="outline" className="w-full gap-2">
                  <Download className="w-3 h-3" />
                  Download
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Request Custom Brochure */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16 py-16"
      >
        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-8 bg-secondary border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Brochure?</h3>
            <p className="text-muted-foreground mb-6">
              We can create custom brochures tailored to your specific needs, including product comparisons,
              application guides, and technical specifications.
            </p>
            <Button size="lg">Request Custom Brochure</Button>
          </Card>
        </div>
      </motion.section>
    </main>
  );
}
