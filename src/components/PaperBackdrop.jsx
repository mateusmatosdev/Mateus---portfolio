import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

export default function PaperBackdrop() {
  const { scrollY } = useScroll()
  const offset = useTransform(scrollY, [0, 1000], [0, -52], { clamp: false })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="paper-backdrop"
      aria-hidden="true"
      style={{ y: shouldReduceMotion ? 0 : offset }}
    />
  )
}