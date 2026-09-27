import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const CONTACTS = [
  { icon: Mail, label: 'contato.mateusmatos@outlook.com', href: 'mailto:contato.mateusmatos@outlook.com' },
  { icon: Phone, label: '(71) 99292-5065', href: 'tel:+557192925065' },
  { icon: Linkedin, label: 'linkedin.com/in/mateus-matos-ti', href: 'https://linkedin.com/in/mateus-matos-ti/' },
  { icon: Github, label: 'github.com/mateusmatosdev', href: 'https://github.com/mateusmatosdev' },
]

export default function Contact() {
  return (
    <>
      <section id="contato" className="section">
        <div className="kicker">Contato</div>
        <h2 className="text-4xl sm:text-5xl font-bold max-w-[14ch]">Vamos conversar</h2>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10">
          {CONTACTS.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="contact-link flex items-center gap-3 font-medium">
              <div className="w-9 h-9 rounded-[9px] bg-ink text-white flex items-center justify-center flex-shrink-0">
                <Icon size={17} />
              </div>
              {label}
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-line py-6 px-[8vw] text-center text-muted text-sm">
        © 2026 Mateus Matos — Portfólio DevOps
      </footer>
    </>
  )
}
