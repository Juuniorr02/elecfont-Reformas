"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    alt: "Salón moderno reformado"
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    alt: "Cocina contemporánea"
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop",
    alt: "Baño elegante"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop",
    alt: "Dormitorio reformado"
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    alt: "Oficina moderna"
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
    alt: "Local comercial"
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nuestros trabajos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Proyectos que hablan por sí solos
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Cada proyecto es único. Aquí puedes ver algunos ejemplos de nuestro trabajo 
            y el nivel de acabado que ofrecemos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Ver imagen
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  )
}
