import { useEffect, useState } from 'react'
import Button from '../components/Button'

const TERMINAL_LINES = [
  { text: '$ whoami', cls: 'text-accent-3' },
  { text: 'esequiel-linares', cls: 'text-white-600' },
  { text: '$ deploy --env=prod', cls: 'text-accent-3' },
  { text: '✓ infra healthy', cls: 'text-accent' },
  { text: '✓ p99 latency 32ms', cls: 'text-accent' },
  { text: '✓ ai pipeline: running', cls: 'text-accent' },
]

// Loops a lightweight "typing" effect through TERMINAL_LINES. Renders the
// finished lines instantly (no loop) when the visitor prefers reduced motion.
const TerminalPanel = () => {
  const [lines, setLines] = useState([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLines(TERMINAL_LINES)
      return undefined
    }

    let cancelled = false
    let timer

    const wait = (ms) => new Promise((resolve) => { timer = setTimeout(resolve, ms) })

    const run = async (lineIndex = 0, built = []) => {
      if (cancelled) return
      if (lineIndex >= TERMINAL_LINES.length) {
        setLines(built)
        setTyping('')
        await wait(2200)
        run(0, [])
        return
      }
      const line = TERMINAL_LINES[lineIndex]
      for (let i = 1; i <= line.text.length; i++) {
        if (cancelled) return
        setTyping(line.text.slice(0, i))
        await wait(22)
      }
      if (cancelled) return
      const nextBuilt = [...built, line]
      setLines(nextBuilt)
      setTyping('')
      await wait(260)
      run(lineIndex + 1, nextBuilt)
    }

    run()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="w-full max-w-[460px] justify-self-center overflow-hidden rounded-xl border border-black-300 bg-black-600 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] lg:justify-self-end">
      <div className="flex items-center gap-2 border-b border-black-300 bg-black-200 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-black-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-black-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-black-500" />
        <span className="ml-1.5 font-mono text-[11px] text-white-500">status.sh</span>
      </div>
      <div className="min-h-[180px] px-4 py-4 font-mono text-[13px] leading-[1.85]" aria-hidden="true">
        {lines.map((line, i) => (
          <div key={i} className={line.cls}>{line.text}</div>
        ))}
        {typing && (
          <div className="text-accent-3">
            {typing}
            <span className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] animate-pulse bg-accent-3" />
          </div>
        )}
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden scroll-mt-[84px] sm:scroll-mt-[96px]" id="home">
      <style>{`
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px);
          -webkit-mask-image: radial-gradient(ellipse 90% 80% at 65% 40%, black 45%, transparent 92%);
          mask-image: radial-gradient(ellipse 90% 80% at 65% 40%, black 45%, transparent 92%);
        }
      `}</style>

      <div className="absolute inset-0 bg-black-100">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(1100px 700px at 100% -10%, rgba(133,161,106,0.14), transparent 60%)' }}
        />
        <div className="hero-grid-bg" />
      </div>

      <div className="relative z-10 c-space grid min-h-screen items-center gap-12 py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-[520px]">
          <h1 className="font-generalsans text-3xl font-bold leading-tight text-white-800 sm:text-4xl md:text-5xl">
            I build <span className="text-accent-3">infrastructure</span> for AI systems that actually run in production.
          </h1>
          <p className="mt-4 max-w-[460px] font-generalsans text-base text-white-500 sm:text-lg">
            CS @ Purdue &apos;28 · Former Software Engineering Intern at JPMorgan Chase.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work">
              <Button name="See my work" isBeam containerClass="!mx-0" />
            </a>
            <a
              href="/assets/Esequiel_Linares_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-white/40 px-5 py-3 text-white-800 transition-all hover:bg-white/10 active:scale-95"
            >
              Resume
            </a>
          </div>
        </div>

        <TerminalPanel />
      </div>
    </section>
  )
}

export default Hero
