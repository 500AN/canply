import Header from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustMetrics } from '@/components/trust-metrics'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Products } from '@/components/products'
import { Applications } from '@/components/applications'
import { Warranty } from '@/components/warranty'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Header />
      <Hero />
      <TrustMetrics />
      <About />
      <Features />
      <Products />
      <Applications />
      <Warranty />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
