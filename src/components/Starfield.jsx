import { useEffect, useRef } from 'react'

const CANTIDAD = 140

export default function Starfield() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, estrellas, raf

    const crear = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      estrellas = Array.from({ length: CANTIDAD }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3, // tamaño
        v: Math.random() * 0.15 + 0.03, // velocidad de caída
        t: Math.random() * Math.PI * 2, // fase del parpadeo
        s: Math.random() * 0.02 + 0.005, // velocidad del parpadeo
      }))
    }

    const dibujar = () => {
      ctx.clearRect(0, 0, w, h)
      const oscuro = document.documentElement.classList.contains('dark')
      const color = oscuro ? '255,255,255' : '40,40,40'
      const fuerza = oscuro ? 1 : 0.3

      for (const e of estrellas) {
        const brillo = (0.4 + 0.6 * Math.abs(Math.sin(e.t))) * fuerza
        ctx.fillStyle = `rgba(${color},${brillo})`
        ctx.beginPath()
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2)
        ctx.fill()

        if (!reducir) {
          e.t += e.s
          e.y += e.v
          if (e.y > h) {
            e.y = 0
            e.x = Math.random() * w
          }
        }
      }
    }

    const bucle = () => {
      dibujar()
      raf = requestAnimationFrame(bucle)
    }

    const iniciar = () => {
      cancelAnimationFrame(raf)
      if (reducir) dibujar()
      else bucle()
    }

    const alCambiarVisibilidad = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else iniciar()
    }

    const alRedimensionar = () => {
      crear()
      iniciar()
    }

    crear()
    iniciar()
    window.addEventListener('resize', alRedimensionar)
    document.addEventListener('visibilitychange', alCambiarVisibilidad)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', alRedimensionar)
      document.removeEventListener('visibilitychange', alCambiarVisibilidad)
    }
  }, [])

  return (
    <>
      <div className="nebula" />
      <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" />
    </>
  )
}