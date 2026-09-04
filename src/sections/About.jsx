import { photos, facts } from "../constants/aboutData"
import NowPlaying from "../components/NowPlaying"

const About = () => {
  return (
    <section className="c-space my-20 scroll-mt-[84px] sm:scroll-mt-[96px]" id="about">
      {/* scoped to the About photo board only.
          Masonry (CSS columns) instead of a fixed-row-height grid: every
          photo keeps its own aspect ratio at any column count, so nothing
          is ever cropped, at any window width. Captions live inside the
          tilted frame (Polaroid-style) so they rotate as one rigid piece
          with the photo instead of sitting in flow below it, where the
          tilted corner could visually overhang the text. */}
      <style>{`
        .about-photo-grid {
          column-count: 3;
          column-gap: 16px;
        }
        @media (max-width: 900px) {
          .about-photo-grid { column-count: 2; }
        }
        @media (max-width: 480px) {
          .about-photo-grid { column-count: 1; }
        }

        .about-photo-figure {
          margin: 0 0 20px;
          display: inline-block;
          width: 100%;
          break-inside: avoid;
        }

        .about-photo-frame {
          transform: rotate(var(--rot, 0deg));
          transition: transform 250ms ease-out;
          background: #F2F3F5; /* white-800 */
          border: 8px solid #F2F3F5; /* white-800 */
          box-shadow: inset 0 0 0 1px rgba(0,0,0,.15), 0 6px 16px rgba(0,0,0,.35);
          display: flex;
          flex-direction: column;
        }
        .about-photo-frame:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .about-photo-clip {
          overflow: hidden;
        }
        .about-photo-frame img {
          width: 100%;
          height: auto;
          display: block;
        }
        .about-photo-frame figcaption {
          font-family: 'Caveat', cursive;
          font-size: 20px;
          line-height: 1.2;
          color: #141619; /* black-200 */
          text-align: center;
          padding: 8px 6px 4px;
        }

        @media (prefers-reduced-motion: reduce), (max-width: 480px) {
          .about-photo-frame { transform: none !important; }
        }
      `}</style>

      {/* BAND 1 — Intro */}
      <div className="max-w-[620px]">
        <h2 className="font-display text-3xl sm:text-4xl text-white-800 mb-4">About</h2>
        <p className="font-generalsans text-white-600">[INTRO COPY]</p>
      </div>

      {/* BAND 2 — Photo board */}
      <div className="about-photo-grid mt-14">
        {photos.map((photo) => (
          <figure key={photo.src} className="about-photo-figure">
            <div className="about-photo-frame" style={{ "--rot": `${photo.rotate}deg` }}>
              <div className="about-photo-clip">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </div>
          </figure>
        ))}
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
