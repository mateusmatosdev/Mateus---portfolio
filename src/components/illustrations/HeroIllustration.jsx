import { motion, useReducedMotion } from 'motion/react'

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0.35 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.72, ease: [0.22, 0.61, 0.36, 1] },
  },
}

const drawingVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.045 } },
}

export default function HeroIllustration() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.svg
      viewBox="0 0 440 284"
      className="w-full h-auto mb-6"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.g fill="none" stroke="rgb(var(--color-brand))" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" variants={drawingVariants}>
        <motion.path d="M42 159 L180 226 L319 158 L181 91 Z" variants={pathVariants} />
        <motion.path d="M43 163 L43 174 L180 240 L180 229" variants={pathVariants} />
        <motion.path d="M184 229 L319 163 L319 174 L181 240" variants={pathVariants} />
        <motion.path d="M136 157 L136 118 Q136 113 141 113 L219 113 Q224 113 224 118 L224 158" variants={pathVariants} />
        <motion.path d="M141 119 L219 119 L219 153 L182 171 L141 151 Z" variants={pathVariants} />
        <motion.path d="M132 158 L181 182 L230 158 L224 155 M181 182 L181 187" variants={pathVariants} />
        <motion.path d="M260 91 L330 125 L399 90 L330 55 Z" variants={pathVariants} />
        <motion.path d="M261 93 L261 199 L330 234 L330 127" variants={pathVariants} />
        <motion.path d="M330 127 L399 92 L399 198 L330 233" variants={pathVariants} />
        <motion.path d="M331 158 L398 124 M331 180 L398 146 M331 202 L398 168" variants={pathVariants} />
        <motion.path d="M345 151 L350 149 M345 173 L350 171 M345 195 L350 193" variants={pathVariants} />
        <motion.path d="M59 54 C91 64 112 77 139 93 M378 45 C364 50 350 55 338 61" strokeDasharray="3 7" variants={pathVariants} />
        <motion.path d="M24 48 C24 40 32 36 39 39 C43 29 59 30 63 40 C73 40 76 48 71 54 Q69 57 64 57 L32 57 Q24 55 24 48 Z" variants={pathVariants} />
        <motion.circle cx="378" cy="36" r="10" variants={pathVariants} />
        <motion.path d="M378 19 L378 15 M378 57 L378 53 M361 36 L357 36 M399 36 L395 36 M366 24 L363 21 M393 51 L390 48 M390 24 L393 21 M363 51 L366 48" variants={pathVariants} />
        <motion.path d="M18 79 L22 84 L28 86 L22 88 L18 94 L16 88 L10 86 L16 84 Z" strokeWidth="2.2" variants={pathVariants} />
      </motion.g>
      <motion.text x="29" y="76" fill="rgb(var(--color-brand))" fontFamily="Special Elite, monospace" fontSize="17" initial={shouldReduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.35 }}>nuvem</motion.text>
      <motion.text x="304" y="272" fill="rgb(var(--color-brand))" fontFamily="Special Elite, monospace" fontSize="17" initial={shouldReduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.35 }}>servidor</motion.text>
    </motion.svg>
  )
}
