// components/TestimonialsCarousel.jsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Exemplo de dados — substitua conforme precisar
const testimonials = [
  {
    rating: 5,
    text: `Hoje, com o uso do BI, alcançamos uma análise mais profunda, rápida e assertiva.
           Isso nos economizou tempo, permitindo focar na estratégia do negócio…`,
    author: 'Felipe Kodak, Rei das Canecas',
  },
  {
    rating: 5,
    text: `A equipe foi extremamente competente, combinando alto conhecimento técnico com uma
           profunda compreensão do negócio. Continuaremos aproveitando essa parceria.`,
    author: 'Maria Silva, TechCorp',
  },
  {
    rating: 5,
    text: `As soluções de automação de processos permitiram monitorar tudo em tempo real e
           reduzir erros humanos. Recomendo fortemente!`,
    author: 'João Pereira, AgroWorld',
  },
]

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Confira os depoimentos de nossos clientes</h2>
      </div>

      <div className="relative max-w-3xl mx-auto overflow-visible">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-dark',
            prevEl: '.swiper-button-prev-dark',
          }}
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 relative border border-accent">
                <div
                  className="absolute top-4 right-4 text-[5rem] text-white/20"
                  style={{ lineHeight: 0.7 }}
                >
                  ”
                </div>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-300 text-xl">★</span>
                  ))}
                </div>
                <p className="mb-6 text-white/90 leading-relaxed">{item.text}</p>
                <div className="border-t border-white/30 pt-4">
                  <span className="font-semibold">{item.author}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button
            className="swiper-button-prev-dark absolute top-1/2 -translate-y-1/2 left-0 -ml-6 p-2 bg-black/30 rounded-full z-20"
            aria-label="Anterior"
          >
            <FiChevronLeft className="text-white text-2xl" />
          </button>
          <button
            className="swiper-button-next-dark absolute top-1/2 -translate-y-1/2 right-0 -mr-6 p-2 bg-black/30 rounded-full z-20"
            aria-label="Próximo"
          >
            <FiChevronRight className="text-white text-2xl" />
          </button>
        </Swiper>
      </div>

      {/* Placeholder de logos - usa js.svg para reservar espaço */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-80">
        {Array.from({ length: 8 }).map((_, idx) => (
          <img
            key={idx}
            src="/assets/skills/js.svg"
            className="h-12"
            alt="Logo placeholder"
          />
        ))}
      </div>
    </section>
  )
}
