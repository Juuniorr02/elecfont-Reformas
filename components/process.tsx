import { Phone, FileText, Wrench, Key } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contacto y visita",
    description: "Nos ponemos en contacto contigo y realizamos una visita gratuita para conocer el espacio y tus necesidades."
  },
  {
    number: "02",
    icon: FileText,
    title: "Presupuesto detallado",
    description: "Te entregamos un presupuesto cerrado y sin compromiso con todos los detalles del proyecto."
  },
  {
    number: "03",
    icon: Wrench,
    title: "Ejecución con seguimiento",
    description: "Realizamos la obra con control de calidad y te mantenemos informado en cada fase del proyecto."
  },
  {
    number: "04",
    icon: Key,
    title: "Entrega final",
    description: "Te entregamos tu espacio completamente terminado, limpio y listo para disfrutar."
  }
]

export function Process() {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nuestro proceso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Cómo trabajamos
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Un proceso claro y transparente para que sepas exactamente qué esperar 
            en cada momento de tu reforma.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                {/* Number badge */}
                <span className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  {step.number}
                </span>
                
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 mt-2">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
