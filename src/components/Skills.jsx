import { GitBranch, Terminal, Network, Globe2 } from 'lucide-react'
import { StaggerGrid, StaggerItem } from './MotionReveal.jsx'

const SKILLS = [
  {
    icon: GitBranch,
    title: 'CI/CD & Versionamento',
    desc: 'Git, Jenkins, GitHub Actions e GitLab CI para pipelines de integração e entrega contínua.',
  },
  {
    icon: Terminal,
    title: 'Linguagens & Automação',
    desc: 'Python e Java aplicados à automação de tarefas; N8N para orquestração de workflows.',
  },
  {
    icon: Network,
    title: 'Cloud, Sistemas & Redes',
    desc: 'Cloud, Linux, Windows avançado e redes de computadores, com conhecimento intermediário em Cisco.',
  },
  {
    icon: Globe2,
    title: 'Idiomas',
    desc: 'Inglês avançado e Espanhol intermediário.',
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="kicker">Habilidades</div>
      <h2 className="text-3xl font-bold">Competências técnicas</h2>

      <StaggerGrid className="grid md:grid-cols-2 gap-5 mt-10">
        {SKILLS.map(({ icon: Icon, title, desc }) => (
          <StaggerItem key={title} className="interactive-card bg-surface border border-line rounded-2xl p-6">
            <div className="w-10 h-10 rounded-[10px] bg-brandSoft flex items-center justify-center mb-4">
              <Icon size={20} color="#2454E0" strokeWidth={1.8} />
            </div>
            <h3 className="font-semibold mb-1.5">{title}</h3>
            <p className="text-sm text-muted">{desc}</p>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  )
}
