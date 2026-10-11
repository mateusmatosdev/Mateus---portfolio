import foto from '../../img/foto.png'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="mb-8">
        <div className="kicker">Sobre mim</div>
        <h2 className="text-3xl font-bold">Da infraestrutura para a automação</h2>
      </div>
      <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-14 items-center">
        <div className="flex justify-center lg:justify-start lg:self-center">
          <div className="person-stage">
            <span className="person-note" aria-hidden="true">Infra • DevOps</span>
            <svg className="person-doodles" viewBox="0 0 300 500" aria-hidden="true">
              <path d="M 267 43 C 300 54 302 88 281 105 C 260 122 237 109 229 88" />
              <path d="M 229 88 L 230 101 M 229 88 L 242 91" />
              <path d="M 8 92 Q 5 92 5 95 L 5 112 Q 5 115 8 115 L 20 115 L 20 120 L 13 120 Q 11 120 11 122 L 35 122 Q 35 120 33 120 L 26 120 L 26 115 L 38 115 Q 41 115 41 112 L 41 95 Q 41 92 38 92 Z" />
              <path d="M 10 97 L 36 97 L 36 110 L 10 110 Z M 15 106 L 20 101 L 24 105 L 31 99" />
            </svg>
            <div className="person-photo">
              <img src={foto} alt="" aria-hidden="true" className="person-photo-outline" />
              <img src={foto} alt="Mateus Matos" className="person-photo-image" />
            </div>
          </div>
        </div>
        <div className="space-y-4 opacity-85 lg:self-center">
          <p>
            Minha trajetória em TI começou na base da Infraestrutura, Suporte Avançado e Redes, acumulando sólida
            experiência prática com ferramentas e ambientes corporativos como Cisco, Windows Server, Linux e Active
            Directory. Movido pela busca por eficiência e escalabilidade, migrei minha atuação para a cultura DevOps e
            Cloud Computing (AWS e Azure). Nessa transição, tive contato com automação de processos, construção de
            pipelines de CI/CD (GitHub Actions, GitLab CI, Jenkins) e orquestração de fluxos via N8N. Hoje, uno minha
            vivência em infraestrutura tradicional às melhores práticas de DevSecOps, segurança da informação e gestão
            de incidentes, garantindo ambientes ágeis, automatizados e altamente seguros.
          </p>
        </div>
      </div>
    </section>
  )
}
