import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary-foreground bg-primary/90 rounded-full">
          Más de 15 años de experiencia
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Transformamos espacios,
          <br />
          <span className="text-primary-foreground/90">creamos hogares</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 mb-10 leading-relaxed text-pretty">
          Reformas integrales de pisos, casas, locales y oficinas.
          Gestión completa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="text-base px-8 py-6">
            <Link href="#contacto">
              Solicitar presupuesto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
          >
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp directo
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/70">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-white">500+</span>
            <span className="text-sm">Proyectos<br />completados</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-white">100%</span>
            <span className="text-sm">Clientes<br />satisfechos</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-white"></span>
            <span className="text-sm">de garantía<br />en obras</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
