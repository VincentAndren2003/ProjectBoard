import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  size: number
  opacity: number
  speed: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const stars: Star[] = []
    const STAR_COUNT = 220

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random(),
        size: Math.random() * 1.6 + 0.2,
        opacity: Math.random() * 0.7 + 0.1,
        speed: Math.random() * 0.15 + 0.03,
      })
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.005

      for (const s of stars) {
        const twinkle = s.opacity * (0.7 + 0.3 * Math.sin(t * s.speed * 10 + s.z * 100))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${twinkle})`
        ctx.fill()
      }

      // Occasional shooting star
      if (Math.sin(t * 0.3) > 0.97) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height * 0.5
        const len = 80 + Math.random() * 60
        const grad = ctx.createLinearGradient(x, y, x + len, y + len * 0.4)
        grad.addColorStop(0, 'rgba(255,255,255,0)')
        grad.addColorStop(0.5, 'rgba(255,255,255,0.5)')
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.moveTo(x, y)
        ctx.lineTo(x + len, y + len * 0.4)
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
