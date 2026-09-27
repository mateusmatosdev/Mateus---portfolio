import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#inicio')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const sections = LINKS
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0]

      if (visibleSection) {
        setActiveLink(`#${visibleSection.target.id}`)
      }
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-[8vw] py-4">
        <div className="flex items-center gap-2.5 font-display font-bold">
          <div className="w-8 h-8 rounded-[9px] bg-brand text-white flex items-center justify-center text-sm">
            MM
          </div>
          Mateus Matos
        </div>

        <div className="hidden lg:flex gap-8 text-sm font-medium">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={activeLink === l.href ? 'location' : undefined}
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </div>

        <motion.button
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
          className="lg:hidden flex flex-col gap-1 px-[8vw] pb-4 border-t border-line overflow-hidden"
        >
          {LINKS.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={activeLink === l.href ? 'location' : undefined}
              className="py-2.5 text-sm font-medium opacity-80"
              whileHover={shouldReduceMotion ? undefined : { x: 4, color: '#2454E0' }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              {l.label}
            </motion.a>
          ))}
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
