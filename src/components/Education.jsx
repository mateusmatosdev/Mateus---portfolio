import { StaggerGrid, StaggerItem } from './MotionReveal.jsx'

const EDUCATION = [
  {
    period: 'Em andamento',
    title: 'Bacharelado Interdisciplinar em Ciência e Tecnologia',
    org: 'Universidade Federal da Bahia (UFBA)',
  },
  {
    period: '2017 – 2018',
    title: 'Técnico em Redes de Computadores',
    org: 'SENAI Bahia',
  },
]

const CERTIFICATIONS = [
  {
    title: 'Computação em Nuvem (AWS)',
    org: 'Escola da Nuvem',
    period: 'Em andamento',
  },
  {
    title: 'Business AI Builder',
    org: 'Oracle Next Education / Alura',
    period: 'Em andamento',
  },
  {
    title: 'Certificado Profissional de Segurança Cibernética do Google',
    org: 'Coursera',
    period: 'Em andamento',
  },
  {
    title: 'Cybersecurity Essentials',
    period: 'Concluído',
  },
  {
    title: 'Santander Tech+ — Back-End',
    period: 'Concluído',
  },
  {
    title: 'One AI For Tech',
    period: 'Concluído',
  },
  {
    title: 'Capacitação em Redes 5G',
    org: 'Huawei / UFBA',
    period: 'Concluído',
  },
]

export default function Education() {
  return (
    <section id="formacao" className="section">
      <div className="kicker">Trajetória acadêmica</div>
      <h2 className="text-3xl font-bold">Formação</h2>

      <StaggerGrid className="grid md:grid-cols-2 gap-5 mt-9">
        {EDUCATION.map((e) => (
          <StaggerItem key={e.title} className="interactive-card border border-line rounded-xl p-5 bg-surface">
            <div className="text-brand text-sm font-semibold">{e.period}</div>
            <h3 className="text-base mt-1.5 mb-1">{e.title}</h3>
            <p className="text-sm text-muted">{e.org}</p>
          </StaggerItem>
        ))}
      </StaggerGrid>

      <h3 className="text-2xl font-bold mt-14">Formação / Cursos</h3>
      <StaggerGrid className="grid md:grid-cols-2 gap-5 mt-6">
        {CERTIFICATIONS.map((certificate) => (
          <StaggerItem key={certificate.title} className="interactive-card border border-line rounded-xl p-5 bg-surface">
            {certificate.period && <div className="text-brand text-sm font-semibold">{certificate.period}</div>}
            <h4 className="text-base mt-1.5 mb-1 font-semibold">{certificate.title}</h4>
            {certificate.org && <p className="text-sm text-muted">{certificate.org}</p>}
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  )
}
