import { motion, useReducedMotion } from 'motion/react'

const STACK = [
  'Git · Jenkins · GitHub Actions · GitLab CI',
  'Linux · Windows avançado',
  'Python · Java',
  'N8N · automação de workflows',
  'Redes Cisco · infraestrutura corporativa',
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 18 }
  const introTransition = { duration: 0.72, ease: [0.22, 0.61, 0.36, 1] }

  return (
    <section id="inicio" className="section pt-16 pb-12">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start">
        <motion.div initial={initial} animate={{ opacity: 1, y: 0 }} transition={introTransition}>
          <div className="kicker">Portfólio profissional</div>
          <h1 className="text-4xl sm:text-6xl font-bold">Mateus Matos</h1>
          <div className="text-muted text-xl mt-3">DevOps · Infraestrutura de TI · Cloud & Automação</div>
          <p className="mt-5 max-w-[52ch] opacity-85">
            Profissional de TI com experiência em infraestrutura, suporte e redes, atuando com foco em Cloud Computing, automação de processos, controle de versão e integração contínua.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#experiencia"
              className="px-6 py-3 rounded-lg font-semibold bg-brand text-white hover:bg-brandDark transition-colors"
              whileHover={shouldReduceMotion ? undefined : { y: -2, rotate: -0.5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              Ver experiência
            </motion.a>
            <motion.a
              href="#contato"
              className="px-6 py-3 rounded-lg font-semibold border border-ink hover:bg-ink hover:text-white transition-colors"
              whileHover={shouldReduceMotion ? undefined : { y: -2, rotate: 0.5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              Falar comigo
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ ...introTransition, delay: 0.12 }}>
          <motion.div
            className="interactive-card bg-surface border border-line rounded-[18px] p-7 shadow-[0_20px_40px_-28px_rgba(28,35,51,0.35)]"
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {STACK.map((item) => (
              <div key={item} className="flex items-center gap-3 py-3 lg:py-[18px] border-b border-line last:border-none">
                <div className="w-2.5 h-2.5 rounded-full bg-brand flex-shrink-0" />
                <span className="text-sm opacity-85">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
