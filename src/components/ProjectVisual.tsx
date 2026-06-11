import type { Project } from '../data/projects'

function MobileVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect x="20" y="10" width="160" height="340" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <rect x="80" y="22" width="40" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="30" y="50" width="140" height="220" rx="8" fill="rgba(255,255,255,0.03)" />
      {/* Clothing cards */}
      <rect x="38" y="58" width="58" height="72" rx="8" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1" />
      <rect x="104" y="58" width="58" height="72" rx="8" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1" />
      <rect x="38" y="138" width="58" height="72" rx="8" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1" />
      <rect x="104" y="138" width="58" height="72" rx="8" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1" />
      {/* T-shirt icons */}
      <path d="M58 80 L67 72 L77 72 L86 80 L80 82 L80 96 L64 96 L64 82 Z" fill={`${accent}66`} />
      <path d="M124 80 L133 72 L143 72 L152 80 L146 82 L146 96 L130 96 L130 82 Z" fill={`${accent}55`} />
      {/* Bottom nav */}
      <rect x="30" y="278" width="140" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
      <circle cx="70" cy="300" r="8" fill={accent} opacity="0.6" />
      <circle cx="100" cy="300" r="6" fill="rgba(255,255,255,0.1)" />
      <circle cx="130" cy="300" r="6" fill="rgba(255,255,255,0.1)" />
      {/* Home indicator */}
      <rect x="80" y="338" width="40" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
    </svg>
  )
}

function MapVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Map background */}
      <rect width="340" height="260" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Grid lines */}
      {[40, 80, 120, 160, 200, 240, 280].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="260" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      ))}
      {[40, 80, 120, 160, 200].map(y => (
        <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      ))}
      {/* Terrain patches */}
      <ellipse cx="120" cy="100" rx="70" ry="50" fill={`${accent}0d`} stroke={`${accent}22`} strokeWidth="1" />
      <ellipse cx="240" cy="160" rx="80" ry="55" fill={`${accent}0d`} stroke={`${accent}22`} strokeWidth="1" />
      {/* Path line */}
      <polyline points="60,200 100,160 150,140 200,110 260,90" stroke={accent} strokeWidth="2" strokeDasharray="6 4" opacity="0.5" strokeLinecap="round" />
      {/* Location pins */}
      {[
        [100, 160, 1],
        [200, 110, 0.5],
        [260, 90, 0.5],
        [150, 200, 0.3],
      ].map(([x, y, op], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={10} fill={`${accent}33`} />
          <circle cx={x} cy={y} r={5} fill={accent} opacity={op} />
          {i === 0 && <circle cx={x} cy={y} r={16} stroke={accent} strokeWidth="1.5" opacity="0.4" fill="none" />}
        </g>
      ))}
      {/* Compass */}
      <g transform="translate(300,30)">
        <circle cx="0" cy="0" r="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <polygon points="0,-12 4,4 0,2 -4,4" fill={accent} opacity="0.8" />
        <polygon points="0,12 4,-4 0,-2 -4,-4" fill="rgba(255,255,255,0.3)" />
      </g>
    </svg>
  )
}

function ChartVisual({ accent }: { accent: string }) {
  const bars = [45, 72, 58, 88, 65, 95, 78, 82]
  const maxH = 100
  return (
    <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="340" height="220" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Grid */}
      {[40, 80, 120].map(y => (
        <line key={y} x1="30" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
      ))}
      {/* Area chart */}
      <path
        d={`M30,160 ${bars.map((b, i) => `L${30 + i * 40},${160 - (b / 100) * maxH}`).join(' ')} L${30 + 7 * 40},160 Z`}
        fill={`${accent}18`}
      />
      <polyline
        points={`30,160 ${bars.map((b, i) => `${30 + i * 40},${160 - (b / 100) * maxH}`).join(' ')}`}
        stroke={accent}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Data points */}
      {bars.map((b, i) => (
        <circle key={i} cx={30 + i * 40} cy={160 - (b / 100) * maxH} r={4} fill={accent} opacity={i === 6 ? 1 : 0.6} />
      ))}
      {/* Highlight on peak */}
      <circle cx={30 + 5 * 40} cy={160 - 0.95 * maxH} r={8} stroke={accent} strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Pill stats */}
      {[
        [30, 185, '+24.5%', accent],
        [130, 185, '1.2k users', 'rgba(255,255,255,0.3)'],
        [230, 185, 'Q4 2024', 'rgba(255,255,255,0.2)'],
      ].map(([x, y, label, color]) => (
        <g key={label as string}>
          <rect x={x as number} y={(y as number) - 12} width={88} height={22} rx={11} fill="rgba(255,255,255,0.05)" />
          <text x={(x as number) + 44} y={y as number} textAnchor="middle" fill={color as string} fontSize="10" fontFamily="Inter">
            {label as string}
          </text>
        </g>
      ))}
    </svg>
  )
}

function NotebookVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="320" height="260" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Sidebar */}
      <rect x="0" y="0" width="80" height="260" rx="12" fill="rgba(255,255,255,0.03)" />
      <rect x="79" y="0" width="1" height="260" fill="rgba(255,255,255,0.06)" />
      {/* Sidebar items */}
      {[30, 58, 86, 114, 142].map((y, i) => (
        <rect key={y} x="12" y={y} width={i === 0 ? 56 : 44} height="18" rx="6"
          fill={i === 0 ? `${accent}22` : 'rgba(255,255,255,0.04)'}
          stroke={i === 0 ? `${accent}44` : 'transparent'}
        />
      ))}
      {/* Main content area */}
      {/* Title block */}
      <rect x="96" y="24" width="180" height="20" rx="4" fill="rgba(255,255,255,0.12)" />
      {/* Text lines */}
      {[58, 74, 90, 106].map(y => (
        <rect key={y} x="96" y={y} width={120 + Math.sin(y) * 30} height="9" rx="4" fill="rgba(255,255,255,0.06)" />
      ))}
      {/* Flashcard visual */}
      <rect x="96" y="126" width="200" height="80" rx="10" fill={`${accent}12`} stroke={`${accent}33`} strokeWidth="1.5" />
      <rect x="112" y="140" width="100" height="10" rx="4" fill={`${accent}44`} />
      <rect x="112" y="158" width="140" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="112" y="172" width="110" height="8" rx="4" fill="rgba(255,255,255,0.07)" />
      {/* AI chip */}
      <rect x="96" y="218" width="64" height="24" rx="12" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1" />
      <text x="128" y="234" textAnchor="middle" fill={accent} fontSize="9" fontFamily="Inter" opacity="0.9">AI ✦</text>
    </svg>
  )
}

function BeerVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="340" height="260" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Map background tiles */}
      {[30, 70, 110, 150, 190, 230, 270].map(x => (
        [30, 80, 130, 180, 220].map(y => (
          <rect key={`${x}-${y}`} x={x} y={y} width="36" height="36" rx="2" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        ))
      ))}
      {/* Street lines */}
      <line x1="0" y1="120" x2="340" y2="120" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
      <line x1="170" y1="0" x2="170" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
      <line x1="80" y1="0" x2="60" y2="260" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
      <line x1="250" y1="0" x2="270" y2="260" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
      {/* Bar pins */}
      {[
        [90, 90], [160, 70], [220, 100], [130, 140], [200, 150],
        [70, 170], [260, 80], [280, 160], [100, 190],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 3 ? 14 : 7} fill={i === 3 ? `${accent}44` : `${accent}22`} />
          <circle cx={x} cy={y} r={i === 3 ? 6 : 3.5} fill={accent} opacity={i === 3 ? 1 : 0.5} />
        </g>
      ))}
      {/* Popup card */}
      <rect x="150" y="155" width="130" height="70" rx="10" fill="rgba(10,10,20,0.9)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <text x="215" y="176" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="600" fontFamily="Space Grotesk">Södra Bar</text>
      <rect x="164" y="183" width="50" height="7" rx="3" fill={`${accent}55`} />
      <rect x="164" y="196" width="90" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="164" y="208" width="70" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
    </svg>
  )
}

function RetailVisual({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="340" height="260" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Header */}
      <rect x="0" y="0" width="340" height="44" rx="12" fill="rgba(255,255,255,0.04)" />
      <rect x="16" y="16" width="80" height="12" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="260" y="14" width="64" height="16" rx="8" fill={`${accent}33`} />
      {/* Map panel */}
      <rect x="8" y="52" width="180" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {/* Map content */}
      {[[60, 100], [100, 130], [140, 90], [80, 160], [150, 170]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={8} fill={`${accent}22`} />
          <circle cx={x} cy={y} r={4} fill={accent} opacity={0.5} />
        </g>
      ))}
      <polyline points="60,100 100,130 140,90 80,160" stroke={accent} strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.3" />
      {/* Product list panel */}
      <rect x="196" y="52" width="136" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {[70, 108, 146, 184, 222].map((y, i) => (
        <g key={y}>
          <rect x="208" y={y} width="24" height="24" rx="4" fill={`${accent}22`} />
          <rect x="240" y={y + 4} width={50 + (i % 3) * 12} height="7" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="240" y={y + 15} width="40" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        </g>
      ))}
    </svg>
  )
}

function TodoVisual({ accent }: { accent: string }) {
  const items = ['Buy groceries', 'Read a book', 'Go for a run', 'Call mum']
  return (
    <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="340" height="220" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Sky bg strip */}
      <rect width="340" height="220" rx="12" fill={`${accent}08`} />
      {/* Header */}
      <text x="170" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="700" fontFamily="Inter">Todos</text>
      {/* Progress bar */}
      <rect x="24" y="44" width="292" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="24" y="44" width="120" height="6" rx="3" fill={accent} opacity="0.7" />
      {/* Input box */}
      <rect x="24" y="60" width="230" height="28" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="36" y="78" fill="rgba(255,255,255,0.25)" fontSize="11" fontFamily="Inter">Add a new todo…</text>
      <rect x="262" y="60" width="54" height="28" rx="8" fill={`${accent}cc`} />
      <text x="289" y="78" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600" fontFamily="Inter">ADD</text>
      {/* Todo items */}
      {items.map((label, i) => (
        <g key={i}>
          <rect x="24" y={100 + i * 27} width="292" height="22" rx="6" fill={i === 0 ? `${accent}10` : 'rgba(255,255,255,0.03)'} />
          {/* Checkbox */}
          <rect x="32" y={105 + i * 27} width="12" height="12" rx="3" fill={i === 0 ? accent : 'rgba(255,255,255,0.1)'} stroke={i === 0 ? accent : 'rgba(255,255,255,0.15)'} strokeWidth="1" />
          {i === 0 && <path d={`M${34} ${111 + i * 27} l3 3 5-5`} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />}
          <text x="52" y={115 + i * 27} fill={i === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.75)'} fontSize="11" fontFamily="Inter"
            style={i === 0 ? { textDecoration: 'line-through' } : {}}>
            {i === 0 ? label : label}
          </text>
          {i === 0 && <line x1="52" y1={113 + i * 27} x2={52 + label.length * 5.8} y2={113 + i * 27} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />}
          {/* Delete icon */}
          <circle cx="302" cy={111 + i * 27} r="7" fill="rgba(255,255,255,0.04)" />
          <path d={`M${299} ${108 + i * 27} l6 6 m0-6 l-6 6`} stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  )
}

export default function ProjectVisual({ project }: { project: Project }) {
  const props = { accent: project.accent }
  switch (project.visual) {
    case 'mobile': return <MobileVisual {...props} />
    case 'map': return <MapVisual {...props} />
    case 'chart': return <ChartVisual {...props} />
    case 'notebook': return <NotebookVisual {...props} />
    case 'beer': return <BeerVisual {...props} />
    case 'retail': return <RetailVisual {...props} />
    case 'todo': return <TodoVisual {...props} />
  }
}
