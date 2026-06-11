import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Project } from '../data/projects'
import ProjectVisual from './ProjectVisual'
import ScreenshotCarousel from './ScreenshotCarousel'

interface Props {
  project: Project
  index: number
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ProjectSlide({ project, index }: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: false, margin: '-20% 0px -20% 0px' })
  const isEven = index % 2 === 0

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(24px, 5vw, 80px)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: isEven ? '30%' : '70%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${project.accent}18 0%, transparent 65%)`,
          pointerEvents: 'none',
          transition: 'opacity 1s ease',
          opacity: inView ? 1 : 0,
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isEven ? '1fr 1.1fr' : '1.1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)',
          width: '100%',
          maxWidth: 1200,
          alignItems: 'center',
        }}
      >
        {/* Text side */}
        <motion.div
          style={{ order: isEven ? 0 : 1 }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Index + type */}
          <motion.div
            custom={0}
            variants={fadeUp}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: project.accent, opacity: 0.8 }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div style={{ height: 1, width: 32, background: `${project.accent}44` }} />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
              {project.type}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: 8,
              color: '#fff',
            }}
          >
            {project.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: project.accent,
              marginBottom: 20,
              opacity: 0.85,
              fontWeight: 400,
            }}
          >
            {project.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 480,
            }}
          >
            {project.description}
          </motion.p>

          {/* Features */}
          <motion.ul custom={4} variants={fadeUp} style={{ listStyle: 'none', marginBottom: 28 }}>
            {project.features.map((f, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  marginBottom: 8,
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                <span style={{ color: project.accent, marginTop: 2, flexShrink: 0, opacity: 0.7 }}>▸</span>
                {f}
              </li>
            ))}
          </motion.ul>

          {/* Tech badges */}
          <motion.div
            custom={5}
            variants={fadeUp}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}
          >
            {project.tech.map(t => (
              <span
                key={t}
                style={{
                  padding: '4px 12px',
                  borderRadius: 100,
                  fontSize: '0.72rem',
                  border: `1px solid ${project.accent}33`,
                  color: `${project.accent}bb`,
                  background: `${project.accent}0d`,
                  letterSpacing: '0.02em',
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* GitHub link if available */}
          {project.github && (
            <motion.a
              custom={6}
              variants={fadeUp}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 24,
                padding: '10px 20px',
                borderRadius: 8,
                border: `1px solid ${project.accent}44`,
                color: project.accent,
                textDecoration: 'none',
                fontSize: '0.82rem',
                background: `${project.accent}0d`,
                transition: 'all 0.2s ease',
              }}
              whileHover={{ scale: 1.02, background: `${project.accent}1a` } as never}
              whileTap={{ scale: 0.98 } as never}
            >
              <GithubIcon />
              View on GitHub
            </motion.a>
          )}
        </motion.div>

        {/* Visual side */}
        <motion.div
          style={{
            order: isEven ? 1 : 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {project.screenshots && project.screenshots.length > 0 ? (
            <ScreenshotCarousel
              screenshots={project.screenshots}
              accent={project.accent}
              title={project.title}
              mobile={project.visual === 'mobile' || project.visual === 'map'}
            />
          ) : (
            <div
              style={{
                width: '100%',
                maxWidth: 480,
                aspectRatio: project.visual === 'mobile' ? '0.6' : '1.4',
                borderRadius: 16,
                padding: project.visual === 'mobile' ? 0 : 20,
                background: project.visual === 'mobile' ? 'transparent' : 'rgba(255,255,255,0.02)',
                border: project.visual === 'mobile' ? 'none' : '1px solid rgba(255,255,255,0.06)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ProjectVisual project={project} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
