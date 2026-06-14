'use client';

import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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

interface GetQuoteFormProps {
  product: Product;
}

export default function GetQuoteForm({ product }: GetQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    thickness: product.thickness[0],
    quantity: '',
    applications: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, thickness: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('[v0] Quote form submitted:', {
        ...formData,
        product: product.name,
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        thickness: product.thickness[0],
        quantity: '',
        applications: '',
        message: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('[v0] Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="p-8 bg-green-50 border-green-200">
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
          <h3 className="text-lg font-semibold text-green-900 mb-2">Quote Request Submitted</h3>
          <p className="text-green-700 mb-4">
            Thank you! We&apos;ll review your request and contact you shortly with a detailed quote.
          </p>
          <p className="text-sm text-green-600">Our team typically responds within 24 hours.</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="mt-2"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
              className="mt-2"
            />
          </div>

          {/* Company */}
          <div>
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              required
              className="mt-2"
            />
          </div>

          {/* Phone */}
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

          {/* Thickness */}
          <div>
            <Label htmlFor="thickness">Thickness Required *</Label>
            <Select value={formData.thickness} onValueChange={handleSelectChange}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select thickness" />
              </SelectTrigger>
              <SelectContent>
                {product.thickness.map((thickness) => (
                  <SelectItem key={thickness} value={thickness}>
                    {thickness}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div>
            <Label htmlFor="quantity">Estimated Quantity (sheets) *</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 50"
              required
              className="mt-2"
            />
          </div>
        </div>

        {/* Applications */}
        <div>
          <Label htmlFor="applications">Intended Applications</Label>
          <Input
            id="applications"
            name="applications"
            type="text"
            value={formData.applications}
            onChange={handleChange}
            placeholder="e.g., Furniture manufacturing, Interior design"
            className="mt-2"
          />
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Additional Details</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your project, budget, or any specific requirements..."
            className="mt-2 resize-none"
            rows={4}
          />
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Request Quote'}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Your information will only be used to provide you a quote.
        </p>
      </form>
    </Card>
  );
}
