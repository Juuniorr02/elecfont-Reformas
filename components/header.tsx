"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground hidden sm:block">
              AS23
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </Link>
            <Link href="#proceso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Proceso
            </Link>
            <Link href="#garantias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Garantías
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="tel:+34600000000"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">600 000 000</span>
            </a>

            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>

            <Button asChild className="hidden md:inline-flex">
              <Link href="#contacto">Pedir presupuesto</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#proceso"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proceso
              </Link>
              <Link
                href="#garantias"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Garantías
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <a
                href="tel:+34600000000"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Phone className="w-4 h-4" />
                600 000 000
              </a>
              <Button asChild className="w-full">
                <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  Pedir presupuesto
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
