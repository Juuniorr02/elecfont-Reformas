"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    poblacion: "",
    tipoReforma: "",
    mensaje: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Contacto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Pide tu presupuesto sin compromiso
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Cuéntanos tu proyecto y te prepararemos un presupuesto detallado y personalizado. 
              Sin compromiso y totalmente gratuito.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <a href="tel:+34600000000" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    600 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@reformaspro.es" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    info@reformaspro.es
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Zona de trabajo</p>
                  <p className="text-lg font-medium text-foreground">Madrid y alrededores</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-muted-foreground">
                  Nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono *
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="600 000 000"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="poblacion" className="block text-sm font-medium text-foreground mb-2">
                      Población *
                    </label>
                    <Input
                      id="poblacion"
                      name="poblacion"
                      type="text"
                      required
                      value={formData.poblacion}
                      onChange={handleChange}
                      placeholder="Tu ciudad"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tipoReforma" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de reforma *
                  </label>
                  <select
                    id="tipoReforma"
                    name="tipoReforma"
                    required
                    value={formData.tipoReforma}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="integral">Reforma integral</option>
                    <option value="cocina">Cocina</option>
                    <option value="bano">Baño</option>
                    <option value="local">Local comercial</option>
                    <option value="oficina">Oficina</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos los detalles de tu proyecto..."
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <Button type="submit" className="w-full py-6 text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar presupuesto
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
