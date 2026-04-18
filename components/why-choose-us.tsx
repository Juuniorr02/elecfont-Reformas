import { ClipboardCheck, Users, FileCheck, Wallet } from "lucide-react"

const features = [
  {
    icon: ClipboardCheck,
    title: "Gestión completa",
    description: "Nos encargamos de todo el proyecto de principio a fin. Tú solo tienes que disfrutar del resultado."
  },
  {
    icon: Users,
    title: "Equipo técnico",
    description: "Arquitectos e interioristas que te asesoran en cada decisión. Diseño profesional incluido."
  },
  {
    icon: FileCheck,
    title: "Permisos y licencias",
    description: "Gestionamos todos los trámites administrativos necesarios. Sin preocupaciones burocráticas."
  },
  {
    icon: Wallet,
    title: "Presupuesto cerrado",
    description: "Sin sorpresas ni sobrecostes. El precio que acordamos es el precio final de tu reforma."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
                alt="Equipo de profesionales trabajando en una reforma"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Por qué elegirnos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Tu tranquilidad es nuestra prioridad
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Entendemos que una reforma puede ser estresante. Por eso nos encargamos 
              de todo para que tú solo tengas que tomar las decisiones importantes.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
