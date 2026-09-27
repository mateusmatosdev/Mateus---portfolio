import HeroIllustration from './illustrations/HeroIllustration.jsx'
import { StaggerGrid, StaggerItem } from './MotionReveal.jsx'

const JOBS = [
  {
    role: 'Analista de Infraestrutura II — DXC Technology',
    period: 'Junho de 2024 – Agosto de 2026',
    desc: 'Administração de sistemas Windows e Windows Server, Microsoft Azure e Active Directory.',
  },
  {
    role: 'Analista de Suporte — Exago Innovation',
    period: '2022 – 2023',
    desc: 'Suporte de TI e atendimento de demandas relacionadas a ambientes computacionais.',
  },
  {
    role: 'Analista de Suporte Computacional — CSTI',
    period: '2021 – 2022',
    desc: 'Suporte computacional e atendimento de demandas de hardware, software e infraestrutura de TI.',
  },
  {
    role: 'Estagiário de TI — SENAI CETIND',
    period: '2018 – 2019',
    desc: 'Atividades de suporte e tecnologia da informação.',
  },
  {
    role: 'Estagiário — Arca Urbana',
    period: '2017 (3 meses)',
    desc: 'Atividades de apoio durante estágio profissional.',
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="kicker">Experiência</div>
      <h2 className="text-3xl font-bold">Trajetória profissional</h2>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-stretch mt-10">
        <StaggerGrid className="experience-timeline relative pl-7">
        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />
        {JOBS.map((job, i) => (
          <StaggerItem key={job.role} hover={false} className={`relative ${i === JOBS.length - 1 ? '' : 'pb-8'}`}>
            <div className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-bg" />
            <div className="font-semibold">{job.role}</div>
            <div className="text-brand text-sm font-semibold mt-0.5">{job.period}</div>
            <div className="text-muted text-sm mt-1.5 max-w-[62ch]">{job.desc}</div>
          </StaggerItem>
        ))}
        </StaggerGrid>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[400px]">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
