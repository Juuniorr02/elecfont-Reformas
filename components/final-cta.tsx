import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          ¿Listo para transformar tu espacio?
        </h2>
        <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg mb-10">
          Da el primer paso hacia la reforma que siempre has soñado. 
          Te acompañamos en todo el proceso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="text-base px-8 py-6"
          >
            <Link href="#contacto">
              Pedir presupuesto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
