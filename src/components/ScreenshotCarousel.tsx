import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  screenshots: string[]
  accent: string
  title: string
  mobile?: boolean
}

export default function ScreenshotCarousel({ screenshots, accent, title, mobile }: Props) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }
  const prev = () => go(current === 0 ? screenshots.length - 1 : current - 1)
  const next = () => go(current === screenshots.length - 1 ? 0 : current + 1)

  if (mobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        {/* Phone frame */}
        <div style={{
          width: 240,
          height: 490,
          borderRadius: 40,
          background: '#1a1a1a',
          border: '6px solid #2a2a2a',
          boxShadow: `0 0 50px ${accent}22, 0 30px 60px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.06)`,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dynamic island */}
          <div style={{
            position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
            width: 90, height: 26, borderRadius: 13,
            background: '#000', zIndex: 10,
          }} />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={current}
              src={import.meta.env.BASE_URL + screenshots[current]}
              alt={`${title} screenshot ${current + 1}`}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 30 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -30 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          </AnimatePresence>
          {screenshots.length > 1 && (
            <>
              <button onClick={prev} style={{ position:'absolute', left:6, top:'50%', transform:'translateY(-50%)', zIndex:20, width:28, height:28, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.15)', background:'rgba(0,0,0,0.5)', color:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>‹</button>
              <button onClick={next} style={{ position:'absolute', right:6, top:'50%', transform:'translateY(-50%)', zIndex:20, width:28, height:28, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.15)', background:'rgba(0,0,0,0.5)', color:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>›</button>
            </>
          )}
        </div>
        {screenshots.length > 1 && (
          <div style={{ display:'flex', gap:6 }}>
            {screenshots.map((_, i) => (
              <button key={i} onClick={() => go(i)} style={{ width: i===current ? 16:6, height:6, borderRadius:3, border:'none', background: i===current ? accent : 'rgba(255,255,255,0.2)', cursor:'pointer', padding:0, transition:'all 0.3s ease' }} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 560,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      {/* Browser frame */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16/10',
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative',
          border: `1px solid ${accent}33`,
          boxShadow: `0 0 60px ${accent}18, 0 24px 48px rgba(0,0,0,0.5)`,
          background: '#0a0a14',
        }}
      >
        {/* Browser chrome bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 28,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 12,
            gap: 6,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
          <div style={{
            marginLeft: 10,
            flex: 1,
            marginRight: 40,
            height: 16,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 4,
            maxWidth: 200,
          }} />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={import.meta.env.BASE_URL + screenshots[current]}
            alt={`${title} screenshot ${current + 1}`}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 40 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -40 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 28,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: 'calc(100% - 28px)',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        </AnimatePresence>

        {/* Side arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
            >
              ‹
            </button>
            <button
              onClick={next}
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div style={{ display: 'flex', gap: 6 }}>
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 3,
                border: 'none',
                background: i === current ? accent : 'rgba(255,255,255,0.2)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
