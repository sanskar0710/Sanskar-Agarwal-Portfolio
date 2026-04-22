import { useEffect, useState } from 'react'

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 4}s`,
  duration: `${6 + Math.random() * 8}s`,
}))

function BackgroundEffects() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      setPointer({ x, y })
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-90"
        style={{
          background:
            'radial-gradient(circle at 20% 10%, rgba(59,130,246,0.22), transparent 30%), radial-gradient(circle at 80% 15%, rgba(168,85,247,0.24), transparent 25%), #020308',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition duration-200"
        style={{
          background: `radial-gradient(circle 200px at ${pointer.x}% ${pointer.y}%, rgba(34,211,238,0.12), transparent 60%)`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default BackgroundEffects
