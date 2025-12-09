import './App.css'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/aidencullo' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aidencullo' },
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'Email', href: 'mailto:aidencullo@gmail.com' },
] as const

function App() {
  return (
    <main className="app">
      <section className="link-card">
        <p className="eyebrow">Aiden Cullo</p>
        <h1>Find me online</h1>

        <ul className="link-list">
          {LINKS.map(({ label, href }) => {
            const isExternal = href.startsWith('http')

            return (
              <li key={label}>
                <a
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer noopener' : undefined}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default App