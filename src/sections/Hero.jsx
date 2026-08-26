import { useEffect, useState } from 'react'
import Button from '../components/Button'
import PixelTransition from '../components/animations/PixelTransition'

const Hero = () => {
  // Defer mounting the poster/video so the hero text paints first and
  // stays the LCP candidate instead of the background media.
  const [showMedia, setShowMedia] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShowMedia(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="home">
      {/* Background media */}
      <div className="absolute inset-0 z-0 bg-black-100">
        {showMedia && (
          <>
            {/* Poster image: shown on mobile and when reduced motion is preferred */}
            <img
              src="/assets/hero-poster.jpg"
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchpriority="low"
              className="absolute inset-0 hidden h-full w-full object-cover max-md:block motion-reduce:block"
            />
            {/* Video: hidden on mobile and when reduced motion is preferred */}
            <video
              className="absolute inset-0 hidden h-full w-full object-cover md:block motion-reduce:!hidden"
              src="/vid_background.mp4"
              poster="/assets/hero-poster.jpg"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              fetchpriority="low"
              aria-hidden="true"
            />
          </>
        )}

        {/* Scrim so hero text stays readable over the video */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 c-space flex min-h-screen flex-col justify-center">
        <div className="max-w-[640px]">
          <h1 className="text-4xl font-generalsans font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Zeke Linares
          </h1>
          <p className="mt-4 max-w-[600px] font-generalsans text-base text-white/90 sm:text-lg">
            CS @ Purdue &apos;28 · Software Engineering Intern at JPMorgan Chase · I build infrastructure for AI systems that actually run in production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work">
              <Button name="See my work" isBeam containerClass="!mx-0" />
            </a>
            <a
              href="/assets/Esequiel_Linares_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-white/40 px-5 py-3 text-white transition-all hover:bg-white/10 active:scale-95"
            >
              Résumé
            </a>
          </div>
        </div>
      </div>

      {/* Cat polaroid */}
      <div className="absolute bottom-6 right-4 z-10 w-[150px] sm:bottom-10 sm:right-10 sm:w-[220px]">
        <PixelTransition
          firstContent={
            <img
              src="/assets/tyson.jpeg"
              alt="Tyson"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          }
          secondContent={
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                placeItems: 'center',
                backgroundColor: '#3d3d3d',
              }}
            >
              <p style={{ fontWeight: 900, fontSize: '3rem', color: '#f3efe8' }}>Hello👋</p>
            </div>
          }
          gridSize={12}
          pixelColor="#336659"
          animationStepDuration={0.35}
        />
      </div>
    </section>
  )
}

export default Hero
