import { Home, UtensilsCrossed, Bath, DoorOpen, Hammer, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Reformas integrales",
    description: "Renovación completa de viviendas, locales y oficinas. Desde el diseño hasta la entrega de llaves."
  },
  {
    icon: UtensilsCrossed,
    title: "Cocinas",
    description: "Diseño y reforma de cocinas modernas y funcionales. Instalación de mobiliario y electrodomésticos."
  },
  {
    icon: Bath,
    title: "Baños",
    description: "Renovación integral de baños con los mejores materiales. Fontanería, azulejos y sanitarios."
  },
  {
    icon: DoorOpen,
    title: "Carpintería",
    description: "Instalación de puertas, ventanas y armarios. Trabajamos con aluminio, PVC y madera."
  },
  {
    icon: Hammer,
    title: "Albañilería",
    description: "Obras de albañilería, tabiquería, techos y suelos. Profesionales con años de experiencia."
  },
  {
    icon: Sparkles,
    title: "Limpieza post-obra",
    description: "Servicio de limpieza profesional para dejarte tu espacio listo para estrenar."
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nuestros servicios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluciones completas para tu proyecto
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ofrecemos todos los servicios necesarios para transformar cualquier espacio. 
            Un único interlocutor para todo tu proyecto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
