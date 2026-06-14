'use client';

import { products, productCategories } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedWaterResistance, setSelectedWaterResistance] = useState<string>('');

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedWaterResistance && product.waterResistance !== selectedWaterResistance)
      return false;
    return true;
  });

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
    <>
      <Header />
      <main className="min-h-screen bg-background">
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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Discover our comprehensive range of premium plywood products engineered for excellence,
            durability, and reliability across diverse applications.
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-lg border border-border p-6 mb-12"
        >
          <h2 className="text-lg font-semibold mb-6">Filter Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {productCategories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Water Resistance Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Water Resistance</label>
              <Select value={selectedWaterResistance} onValueChange={setSelectedWaterResistance}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="moisture-resistant">Moisture Resistant</SelectItem>
                  <SelectItem value="waterproof">Waterproof</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    {/* Image */}
                    <div className="relative bg-secondary aspect-video overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Category & Grade */}
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">
                          {product.category.replace('-', ' ').toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{product.grade}</Badge>
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="bg-secondary rounded p-3 mb-4 text-xs space-y-1 flex-grow">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Thickness:</span>
                          <span className="font-medium">{product.thickness.slice(0, 2).join(', ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Water Resistant:</span>
                          <span className="font-medium capitalize">
                            {product.waterResistance.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Warranty:</span>
                          <span className="font-medium">{product.warranty}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href={`/products/${product.slug}`} className="mt-auto">
                        <Button className="w-full">View Details</Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              No products found matching your filters. Try adjusting your selection.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('');
                setSelectedWaterResistance('');
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
      </main>
      <Footer />
    </>
  )
}
