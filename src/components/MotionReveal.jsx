import { motion, useReducedMotion } from 'motion/react'

const ease = [0.22, 0.61, 0.36, 1]

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

export function MotionReveal({ children }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGrid({ children, className }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={groupVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, hover = true }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      whileHover={shouldReduceMotion || !hover ? undefined : { y: -4 }}
      whileTap={shouldReduceMotion || !hover ? undefined : { scale: 0.985 }}
    >
      {children}
    </motion.div>
  )
}