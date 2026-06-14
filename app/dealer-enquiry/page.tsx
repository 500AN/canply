'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function DealerEnquiryPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    interestedCategories: '',
    yearsInBusiness: '',
    currentDistribution: '',
    businessPlan: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('[v0] Dealer enquiry submitted:', formData);
      setSubmitted(true);
      setFormData({
        companyName: '',
        businessType: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        interestedCategories: '',
        yearsInBusiness: '',
        currentDistribution: '',
        businessPlan: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background pt-20 md:pt-24 flex items-center justify-center">
        <Card className="p-8 bg-green-50 border-green-200 max-w-md mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Enquiry Submitted</h3>
            <p className="text-green-700 mb-4">
              Thank you! Our dealer relations team will review your application and contact you shortly.
            </p>
            <p className="text-sm text-green-600">We typically respond within 2-3 business days.</p>
          </div>
        </Card>
      </main>
    );
  }

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
            Dealer Enquiry Form
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Join our network of trusted dealers and distributors. Submit your application to become
            a authorized dealer for our premium plywood products.
          </motion.p>
        </div>
      </motion.section>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Company Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessType">Type of Business *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleSelectChange('businessType', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="contractor">Contractor</SelectItem>
                        <SelectItem value="manufacturer">Manufacturer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                    <Input
                      id="yearsInBusiness"
                      name="yearsInBusiness"
                      type="number"
                      value={formData.yearsInBusiness}
                      onChange={handleChange}
                      placeholder="e.g., 5"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestedCategories">Interested Product Categories *</Label>
                    <Select
                      value={formData.interestedCategories}
                      onValueChange={(value) => handleSelectChange('interestedCategories', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hardwood">Hardwood Plywood</SelectItem>
                        <SelectItem value="commercial">Commercial Grade</SelectItem>
                        <SelectItem value="marine">Marine Grade</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="all">All Categories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street Address"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="state">State/Province *</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="ZIP Code"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Business Details</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="currentDistribution">Current Distribution Area</Label>
                    <Textarea
                      id="currentDistribution"
                      name="currentDistribution"
                      value={formData.currentDistribution}
                      onChange={handleChange}
                      placeholder="Describe your current distribution area and customer base..."
                      className="mt-2 resize-none"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessPlan">Business Plan & Growth Strategy</Label>
                    <Textarea
                      id="businessPlan"
                      name="businessPlan"
                      value={formData.businessPlan}
                      onChange={handleChange}
                      placeholder="Share your business plan for expanding with our products..."
                      className="mt-2 resize-none"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional information you'd like to share..."
                      className="mt-2 resize-none"
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Application'}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We&apos;ll review your application and contact you within 2-3 business days.
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
