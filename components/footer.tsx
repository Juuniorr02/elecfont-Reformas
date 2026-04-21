import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="font-serif text-xl font-semibold">AS23</span>
            </Link>
            <p className="text-background/70 mb-6">
              Expertos en reformas integrales con más de 10 años de experiencia
              transformando espacios.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3 text-background/70">
              <li><Link href="#servicios" className="hover:text-background transition-colors">Reformas integrales</Link></li>
              <li><Link href="#servicios" className="hover:text-background transition-colors">Cocinas</Link></li>
              <li><Link href="#servicios" className="hover:text-background transition-colors">Baños</Link></li>
              <li><Link href="#servicios" className="hover:text-background transition-colors">Carpintería</Link></li>
              <li><Link href="#servicios" className="hover:text-background transition-colors">Albañilería</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3 text-background/70">
              <li><Link href="#proceso" className="hover:text-background transition-colors">Cómo trabajamos</Link></li>
              <li><Link href="#garantias" className="hover:text-background transition-colors">Garantías</Link></li>
              <li><Link href="#contacto" className="hover:text-background transition-colors">Contacto</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Aviso legal</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Política de privacidad</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4 text-background/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+34600000000" className="hover:text-background transition-colors">
                  600 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@AS23.es" className="hover:text-background transition-colors">
                  info@AS23.es
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Barcelona y alrededores</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} AS23. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
