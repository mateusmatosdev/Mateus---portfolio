import { StaggerGrid, StaggerItem } from './MotionReveal.jsx'

const JOBS = [
  {
    role: 'Analista de Serviços de Infraestrutura II',
    company: 'DXC Technology',
    period: 'Junho de 2024 – Agosto de 2026 · 2 anos e 3 meses',
    location: 'Salvador, BA',
    responsibilities: [
      'Administração de infraestrutura híbrida em Windows Server e Microsoft Azure, sustentando ambientes on-premises integrados à nuvem.',
      'Gestão de Active Directory, usuários, permissões, políticas de segurança e Office 365, com foco em padronização de acessos e redução de riscos.',
      'Gestão e resposta a incidentes com análise de causa raiz, contribuindo para reduzir MTTR e aumentar a estabilidade dos ambientes.',
      'Atuação em segurança da informação e de redes, aplicando práticas alinhadas a DevSecOps na sustentação de sistemas críticos.',
      'Suporte técnico avançado Help Desk N2/N3 em ambiente de alta criticidade, incluindo infraestrutura, servidores e aplicativos.',
      'Instalação, configuração e manutenção de software e hardware em sistemas de produção.',
    ],
  },
  {
    role: 'Analista de Suporte',
    company: 'Exago Innovation',
    period: 'Fevereiro de 2022 – Agosto de 2023 · 1 ano e 7 meses',
    location: 'Salvador, BA',
    responsibilities: [
      'Administração de sistemas Windows e Active Directory, gerenciando usuários, permissões e ativos de TI.',
      'Atuação em redes LAN/WAN e dispositivos Cisco, incluindo configuração de DNS e protocolos de comunicação.',
      'Apoio à segurança da informação e de redes, avaliação de vulnerabilidades e boas práticas alinhadas a DevSecOps.',
      'Gestão e resposta a incidentes, com análise técnica para identificar causas raiz e resolver problemas.',
      'Suporte técnico e Help Desk, manutenção preventiva de hardware e solução de problemas de software.',
      'Gerenciamento de serviços de TI e administração de Office 365, com foco em disponibilidade e continuidade operacional.',
    ],
  },
  {
    role: 'Estagiário',
    company: 'SENAI CETIND',
    period: 'Fevereiro de 2018 – Janeiro de 2019 · 1 ano',
    location: 'Lauro de Freitas, BA',
    responsibilities: [
      'Configuração de roteadores e switches Cisco, com prática em redes LAN/WAN e protocolos de comunicação.',
      'Gerenciamento de servidores e serviços Windows, administração de sistemas e Active Directory.',
      'Suporte técnico e Help Desk em ambiente simulado, com resolução de problemas de hardware e software.',
      'Instalação de software, manutenção preventiva de hardware e configuração de DNS.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="kicker">Experiência</div>
      <h2 className="text-3xl font-bold">Trajetória profissional</h2>

      <StaggerGrid className="experience-timeline relative pl-7 mt-10">
        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />
        {JOBS.map((job, index) => (
          <StaggerItem key={job.company} hover={false} className={`relative ${index === JOBS.length - 1 ? '' : 'pb-10'}`}>
            <div className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-bg" />
            <h3 className="font-semibold">{job.role} — {job.company}</h3>
            <div className="text-brand text-sm font-semibold mt-1">{job.period}</div>
            <div className="text-muted text-sm mt-0.5">{job.location}</div>
            <ul className="text-muted text-sm mt-3 space-y-2 list-disc pl-5 max-w-[90ch]">
              {job.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  )
}
