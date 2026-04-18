"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34600000000?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20reformas"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  )
}
