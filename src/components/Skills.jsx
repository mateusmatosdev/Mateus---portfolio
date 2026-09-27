import { Cloud, GitBranch, Globe2, Network, Server, ShieldCheck, Terminal } from 'lucide-react'
import { StaggerGrid, StaggerItem } from './MotionReveal.jsx'

const SKILLS = [
  {
    icon: GitBranch,
    title: 'DevOps, CI/CD & Versionamento',
    desc: 'Git, Jenkins, GitHub Actions e GitLab CI para controle de versão e pipelines de integração e entrega contínua.',
  },
  {
    icon: Terminal,
    title: 'Desenvolvimento & Automação',
    desc: 'Python e Java para soluções de automação e integração; N8N para workflows e automação de processos.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    desc: 'Microsoft Azure e ambientes híbridos, integrando infraestrutura on-premises e cloud.',
  },
  {
    icon: Server,
    title: 'Infraestrutura & Sistemas',
    desc: 'Windows Server, Linux, Active Directory e Office 365 em ambientes corporativos.',
  },
  {
    icon: Network,
    title: 'Redes',
    desc: 'Equipamentos Cisco (roteadores e switches), redes LAN/WAN, DNS e protocolos de comunicação.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança & Operações',
    desc: 'DevSecOps, segurança de rede e aplicações, gestão de incidentes, troubleshooting e suporte Help Desk N2/N3.',
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="kicker">Habilidades</div>
      <h2 className="text-3xl font-bold">Competências técnicas</h2>

      <StaggerGrid className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        {SKILLS.map(({ icon: Icon, title, desc }) => (
          <StaggerItem key={title} className="interactive-card bg-surface border border-line rounded-2xl p-6">
            <div className="w-10 h-10 rounded-[10px] bg-brandSoft flex items-center justify-center mb-4">
              <Icon size={20} className="text-brand" strokeWidth={1.8} />
            </div>
            <h3 className="font-semibold mb-1.5">{title}</h3>
            <p className="text-sm text-muted">{desc}</p>
          </StaggerItem>
        ))}
      </StaggerGrid>

      <div className="mt-7 flex items-center gap-3 text-muted">
        <Globe2 size={20} className="text-brand flex-shrink-0" />
        <p className="text-sm"><span className="font-semibold text-ink">Idiomas:</span> Inglês fluente · Espanhol básico</p>
      </div>
    </section>
  )
}
