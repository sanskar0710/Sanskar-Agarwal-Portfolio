import { useEffect, useState, useRef } from 'react'

const PARTICLE_COUNT = 20

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 12}s`,
    size: `${2 + Math.random() * 3}px`,
    opacity: 0.2 + Math.random() * 0.3,
  }))
}

const particles = generateParticles()

function BackgroundEffects() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 })
  const rafRef = useRef(null)
  const pointerRef = useRef({ x: 50, y: 50 })

  useEffect(() => {
    const onMove = (event) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      }

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setPointer({ ...pointerRef.current })
          rafRef.current = null
        })
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Base gradient background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 15% 8%, rgba(96,165,250,0.18), transparent),
            radial-gradient(ellipse 50% 40% at 85% 12%, rgba(52,211,153,0.18), transparent),
            radial-gradient(ellipse 40% 30% at 50% 90%, rgba(245,158,11,0.08), transparent),
            #04070f
          `,
        }}
      />

      {/* Mouse-following spotlight */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(circle 280px at ${pointer.x}% ${pointer.y}%, rgba(52,211,153,0.1), transparent 70%)`,
          transition: 'background 150ms ease-out',
          willChange: 'background',
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="dot-grid pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{ contain: 'strict' }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ contain: 'strict' }}>
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </>
  )
}

export default BackgroundEffects
