import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()

  useMotionValueEvent(scrollY, 'change', (current) => {
    setVisible(current > 360)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#inicio"
          aria-label="Voltar ao início"
          title="Voltar ao início"
          className="back-to-top"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.94 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
        >
          <ArrowUp size={20} strokeWidth={2} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}