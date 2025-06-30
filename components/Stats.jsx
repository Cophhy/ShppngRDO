// components/Stats.jsx
'use client'

import { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'

const stats = [
  { num: 12,  text: 'Anos de experiência'      },
  { num: 26,  text: 'Projetos concluídos'       },
  { num: 8,   text: 'Tecnologias dominadas'     },
  { num: 500, text: 'Commits de código'         },
]

export default function Stats() {
  const ref = useRef(null)
  const [play, setPlay] = useState(false)
  const [initialDone, setInitialDone] = useState(false)

  useEffect(() => {
    // dispara animação inicial com delay
    const timer = setTimeout(() => {
      setPlay(true)
      setInitialDone(true)
    }, 2500) // delay só no load

    // observer pra re-trigger ao scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
        } else {
          setPlay(false)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={ref} className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                key={`${play}-${index}`}
                start={0}
                end={item.num}
                duration={1.5}
                redraw={true}
                delay={initialDone ? 0 : 2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15
                    ? 'max-w-[100px]'
                    : 'max-w-[150px]'
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
