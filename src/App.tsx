import { useEffect, useRef, useState } from 'react'
import StarField from './components/StarField'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProjectSlide from './components/ProjectSlide'
import Footer from './components/Footer'
import { projects } from './data/projects'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActiveIndex(idx)
          }
        }
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll('section')
    sections.forEach((s, i) => {
      sectionRefs.current[i] = s as HTMLElement
      observer.observe(s)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section')
    sections[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <StarField />
      <Nav activeIndex={activeIndex} onDotClick={scrollToSection} />
      <main>
        <Hero />
        {projects.map((project, i) => (
          <ProjectSlide key={project.id} project={project} index={i} />
        ))}
        <Footer />
      </main>
    </>
  )
}
