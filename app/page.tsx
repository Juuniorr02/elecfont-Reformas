import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Process } from "@/components/process"
import { Guarantees } from "@/components/guarantees"
import { Gallery } from "@/components/gallery"
import { ContactForm } from "@/components/contact-form"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Guarantees />
        <Gallery />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
