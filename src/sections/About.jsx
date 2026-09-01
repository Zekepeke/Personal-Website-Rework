import { photos, facts } from "../constants/aboutData"
import NowPlaying from "../components/NowPlaying"

// Alternating tilt per tile index, capped at 3deg — see BAND 2 spec.
const ROTATIONS = [-2.5, 2, -1.5, 3, -2]

const SPAN_CLASS = {
  sm: "about-span-sm",
  md: "about-span-md",
  lg: "about-span-lg",
}

// Intrinsic size hints per span so the browser can reserve layout space.
const SPAN_DIMENSIONS = {
  sm: { width: 600, height: 400 },
  md: { width: 800, height: 400 },
  lg: { width: 800, height: 800 },
}

const About = () => {
  return (
    <section className="c-space my-20 scroll-mt-[84px] sm:scroll-mt-[96px]" id="about">
      {/* scoped to the About photo board only */}
      <style>{`
        .about-photo-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          grid-auto-rows: 180px;
          grid-auto-flow: dense;
          gap: 16px;
        }
        .about-span-sm { grid-column: span 3; grid-row: span 1; }
        .about-span-md { grid-column: span 4; grid-row: span 1; }
        .about-span-lg { grid-column: span 5; grid-row: span 2; }

        .about-photo-frame {
          transform: rotate(var(--rot, 0deg));
          transition: transform 250ms ease-out;
        }
        .about-photo-frame:hover {
          transform: rotate(0deg) scale(1.02);
        }

        @media (max-width: 640px) {
          .about-photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .about-span-sm, .about-span-md, .about-span-lg { grid-column: span 1; grid-row: span 1; }
          .about-photo-frame { transform: none !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-photo-frame:hover { transform: rotate(var(--rot, 0deg)); }
        }
      `}</style>

      {/* BAND 1 — Intro */}
      <div className="max-w-[620px]">
        <h2 className="font-display text-3xl sm:text-4xl text-white-800 mb-4">About</h2>
        <p className="font-generalsans text-white-600">[INTRO COPY]</p>
      </div>

      {/* BAND 2 — Photo board */}
      <div className="about-photo-grid mt-14">
        {photos.map((photo, i) => {
          const { width, height } = SPAN_DIMENSIONS[photo.span]
          return (
            <figure key={photo.src} className={`${SPAN_CLASS[photo.span]} h-full flex flex-col gap-2`}>
              <div
                className="about-photo-frame relative flex-1 min-h-0 border-8 border-white-800 shadow-inner overflow-hidden"
                style={{ "--rot": `${ROTATIONS[i % ROTATIONS.length]}deg` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={width}
                  height={height}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>
              <figcaption className="font-mono text-xs text-white-500">{photo.caption}</figcaption>
            </figure>
          )
        })}
      </div>

      {/* BAND 3 — Facts */}
      <div className="max-w-[620px] mt-14">
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`flex items-baseline justify-between gap-6 py-3 ${i !== 0 ? "border-t-[0.5px] border-black-300" : ""}`}
          >
            <span className="font-mono text-sm text-white-500 shrink-0">{fact.label}</span>
            <span className="font-generalsans text-white-800 text-right">{fact.value}</span>
          </div>
        ))}
      </div>

      {/* BAND 4 — Currently */}
      <div className="max-w-[620px] mt-14">
        <p className="font-mono text-sm text-white-500 mb-1">Currently</p>
        <NowPlaying />
      </div>
    </section>
  )
}

export default About
