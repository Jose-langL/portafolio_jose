import { useEffect, useRef } from 'react'

export default function StarCursor({ forzarClaro = false }) {
  const canvasRef = useRef(null)
  const claroRef = useRef(forzarClaro)

  // la intro siempre es negra, ahí la estrella debe ser blanca
  useEffect(() => {
    claroRef.current = forzarClaro
  }, [forzarClaro])

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const mouse = { x: -100, y: -100 }
    const estrella = { x: -100, y: -100, escala: 1, objetivo: 1, rot: 0 }
    const rastro = []
    let ultimo = { x: -100, y: -100 }
    let w, h, raf

    const ajustar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const forma = (x, y, r, rot) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rot)
      ctx.beginPath()
      for (let i = 0; i < 8; i++) {
        const ang = (i * Math.PI) / 4
        const rad = i % 2 === 0 ? r : r * 0.3
        const px = Math.cos(ang) * rad
        const py = Math.sin(ang) * rad
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    const dibujar = () => {
      ctx.clearRect(0, 0, w, h)
      const claro = claroRef.current || document.documentElement.classList.contains('dark')
      const color = claro ? '255,255,255' : '30,30,30'

      // la estrella persigue al mouse con retraso
      const suavizado = reducir ? 1 : 0.18
      estrella.x += (mouse.x - estrella.x) * suavizado
      estrella.y += (mouse.y - estrella.y) * suavizado
      estrella.escala += (estrella.objetivo - estrella.escala) * 0.15
      if (!reducir) estrella.rot += 0.02

      // nuevo polvo de estrella cuando se mueve
      if (!reducir) {
        const dx = estrella.x - ultimo.x
        const dy = estrella.y - ultimo.y
        if (dx * dx + dy * dy > 9) {
          rastro.push({
            x: estrella.x + (Math.random() - 0.5) * 6,
            y: estrella.y + (Math.random() - 0.5) * 6,
            r: Math.random() * 2 + 1,
            vida: 1,
          })
          ultimo = { x: estrella.x, y: estrella.y }
        }
      }

      // dibujar y envejecer el rastro
      for (let i = rastro.length - 1; i >= 0; i--) {
        const p = rastro[i]
        p.vida -= 0.035
        p.y += 0.3
        if (p.vida <= 0) {
          rastro.splice(i, 1)
          continue
        }
        ctx.fillStyle = `rgba(${color},${p.vida * 0.7})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * p.vida, 0, Math.PI * 2)
        ctx.fill()
      }

      // la estrella
      ctx.fillStyle = `rgb(${color})`
      ctx.shadowBlur = claro ? 14 : 0
      ctx.shadowColor = 'rgba(168,85,247,0.9)'
      forma(estrella.x, estrella.y, 9 * estrella.escala, estrella.rot)
      ctx.shadowBlur = 0

      raf = requestAnimationFrame(dibujar)
    }

    const mover = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (estrella.x === -100) {
        estrella.x = mouse.x
        estrella.y = mouse.y
      }
      canvas.style.opacity = 1
    }
    const sobre = (e) => {
      estrella.objetivo = e.target.closest?.('a, button') ? 1.8 : 1
    }
    const salir = () => {
      canvas.style.opacity = 0
    }
    const visibilidad = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(dibujar)
    }

    ajustar()
    raf = requestAnimationFrame(dibujar)
    window.addEventListener('resize', ajustar)
    window.addEventListener('mousemove', mover)
    document.addEventListener('mouseover', sobre)
    document.documentElement.addEventListener('mouseleave', salir)
    document.addEventListener('visibilitychange', visibilidad)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', ajustar)
      window.removeEventListener('mousemove', mover)
      document.removeEventListener('mouseover', sobre)
      document.documentElement.removeEventListener('mouseleave', salir)
      document.removeEventListener('visibilitychange', visibilidad)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100] opacity-0 transition-opacity duration-300"
    />
  )
}