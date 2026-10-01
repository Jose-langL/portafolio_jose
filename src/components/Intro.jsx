import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const NOMBRE = 'BIENVENIDOS' // cámbialo por el tuyo

export default function Intro({ onFinish }) {
  const root = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 }
      const tl = gsap.timeline({ onComplete: onFinish })

      tl.from('.letra', {
        yPercent: 110,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power4.out',
      })
        .to(
          counter,
          {
            value: 100,
            duration: 1.8,
            ease: 'power1.inOut',
            onUpdate: () => setCount(Math.round(counter.value)),
          },
          0
        )
        .to(root.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          delay: 0.3,
        })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      <h1 className="flex text-5xl font-light tracking-[0.3em] md:text-7xl">
        {NOMBRE.split('').map((letra, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <span className="letra inline-block">
              {letra === ' ' ? '\u00A0' : letra}
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-6 flex w-64 justify-between font-mono text-[10px] tracking-widest text-neutral-400">
        <span>PORTAFOLIO</span>
        <span>{String(count).padStart(3, '0')}</span>
      </div>
    </div>
  )
}