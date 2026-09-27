import foto from '../../img/foto.png'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="mb-8">
        <div className="kicker">Sobre mim</div>
        <h2 className="text-3xl font-bold">Da infraestrutura para a automação</h2>
      </div>
      <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-14 items-start">
        <div className="flex justify-center lg:justify-start">
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
        <div className="space-y-4 opacity-85">
          <p>
            Profissional de Tecnologia da Informação com experiência em Infraestrutura de TI, Suporte, Redes e
            Automação, com direcionamento de carreira para DevOps. Conhecimentos em Git, CI/CD, Jenkins, GitHub
            Actions, GitLab CI, Linux, Python, Java e automação de workflows com N8N.
          </p>
          <p>
            Experiência profissional construída em ambientes de infraestrutura e suporte, aliada à formação em
            Ciência e Tecnologia e conhecimentos em redes de computadores. Interesse e atuação no desenvolvimento
            de soluções de automação, integração, versionamento de código e melhoria de processos.
          </p>
          <div className="!opacity-100 mt-2 px-5 py-4 bg-brandSoft border-l-[3px] border-brand rounded-md font-medium">
            Formado com base sólida em suporte e redes, atuação em DevOps aplicando automação e boas
            práticas de entrega de software.
          </div>
        </div>
      </div>
    </section>
  )
}
