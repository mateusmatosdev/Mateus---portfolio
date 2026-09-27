import { StaggerGrid, StaggerItem } from './MotionReveal.jsx'

const EDU = [
  {
    period: 'Em andamento',
    title: 'Bacharelado Interdisciplinar em Ciência e Tecnologia',
    org: 'Universidade Federal da Bahia (UFBA)',
  },
  {
    period: '2022 – 2023',
    title: 'Qualificação em Redes 5G',
    org: 'HUAWEI / Universidade Federal da Bahia',
  },
  {
    period: '2017 – 2018',
    title: 'Técnico em Redes de Computadores',
    org: 'SENAI CETIND',
  },
  {
    period: 'Janeiro de 2024',
    title: 'Formação Desenvolvimento Pessoal T6 – ONE',
    org: 'Alura',
  },
]

export default function Education() {
  return (
    <section id="formacao" className="section">
      <h2 className="text-3xl font-bold">Formação e Certificações</h2>

      <StaggerGrid className="grid md:grid-cols-2 gap-5 mt-9">
        {EDU.map((e) => (
          <StaggerItem key={e.title} className="interactive-card border border-line rounded-xl p-5 bg-surface">
            <div className="text-brand text-sm font-semibold">{e.period}</div>
            <h3 className="text-base mt-1.5 mb-1">{e.title}</h3>
            <p className="text-sm text-muted">{e.org}</p>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  )
}
