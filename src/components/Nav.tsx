import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/projects'

interface NavProps {
  activeIndex: number
  onDotClick: (i: number) => void
}

export default function Nav({ activeIndex, onDotClick }: NavProps) {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  return (
    <>
      {/* Top bar */}
      <motion.header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, rgba(6,6,15,0.8) 0%, transparent 100%)',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.7)' }}>
          VA
        </span>
        <a
          href="mailto:vincentandrensu@gmail.com"
          style={{
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.45)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
        >
          vincentandrensu@gmail.com
        </a>
      </motion.header>

      {/* Side progress dots */}
      <motion.nav
        style={{
          position: 'fixed',
          right: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          opacity,
        }}
      >
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onDotClick(i + 1)}
            title={p.title}
            style={{
              width: i === activeIndex - 1 ? 8 : 5,
              height: i === activeIndex - 1 ? 8 : 5,
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: i === activeIndex - 1 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
              padding: 0,
              outline: 'none',
            }}
          />
        ))}
      </motion.nav>
    </>
  )
}
