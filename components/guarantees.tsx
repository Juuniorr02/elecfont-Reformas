import { Clock, BadgeCheck, Package, Award } from "lucide-react"

const guarantees = [
  {
    icon: Clock,
    title: "Cumplimiento de plazos",
    description: "Nos comprometemos con fechas concretas y las cumplimos. Tu tiempo es valioso."
  },
  {
    icon: BadgeCheck,
    title: "Sin sobrecostes",
    description: "Presupuesto cerrado significa exactamente eso. Sin sorpresas ni gastos adicionales."
  },
  {
    icon: Package,
    title: "Materiales de calidad",
    description: "Solo trabajamos con materiales de primeras marcas y proveedores de confianza."
  },
  {
    icon: Award,
    title: "Profesionales cualificados",
    description: "Equipo propio de profesionales especializados en cada área del proyecto."
  }
]

export function Guarantees() {
  return (
    <section id="garantias" className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-background/10 text-background rounded-full">
            Nuestras garantías
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Tu confianza, nuestra responsabilidad
          </h2>
          <p className="max-w-2xl mx-auto text-background/70 text-lg">
            Trabajamos con total transparencia y nos comprometemos con resultados. 
            Estas son nuestras garantías para ti.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-background/10 hover:border-background/30 transition-colors"
            >
              <div className="w-14 h-14 bg-background/10 rounded-xl flex items-center justify-center mb-6">
                <guarantee.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {guarantee.title}
              </h3>
              <p className="text-background/70 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
