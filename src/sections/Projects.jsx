import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { tier1Projects, githubRepoCount, githubProfileUrl } from "../constants/projectsData";

const TOTAL = tier1Projects.length;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const mobileCardRefs = useRef([]);
  const isMobileScrollSync = useRef(false);

  // Clicking a chip / index slot, or using the arrow keys, should also move
  // the mobile scroll-snap row to match - the two are the same "active slide".
  const goToIndex = (i) => {
    setActiveIndex(i);
    const card = mobileCardRefs.current[i];
    const container = mobileScrollRef.current;
    if (card && container) {
      isMobileScrollSync.current = true;
      const targetLeft = card.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft;
      container.scrollTo({ left: targetLeft, behavior: "auto" });
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goToIndex((activeIndex + 1) % TOTAL);
      if (e.key === "ArrowLeft") goToIndex((activeIndex - 1 + TOTAL) % TOTAL);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  // Keep the named index in sync when the user swipes the mobile row directly
  // (rather than tapping a chip) rather than routing every swipe through state.
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isMobileScrollSync.current) return;
        const visible = entries.find((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.6);
        if (visible) {
          const index = mobileCardRefs.current.indexOf(visible.target);
          if (index !== -1) setActiveIndex(index);
        }
      },
      { root: container, threshold: [0.6] }
    );

    mobileCardRefs.current.forEach((card) => card && observer.observe(card));

    let settleTimeout;
    const onScroll = () => {
      isMobileScrollSync.current = true;
      clearTimeout(settleTimeout);
      settleTimeout = setTimeout(() => {
        isMobileScrollSync.current = false;
      }, 150);
    };
    container.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", onScroll);
      clearTimeout(settleTimeout);
    };
  }, []);

  return (
    <section id="projects" className="c-space mt-20 overflow-x-hidden scroll-mt-[84px] sm:scroll-mt-[96px]" ref={sectionRef}>
      <p className="head-text text-center">Projects</p>

      {/* TIER 1 - carousel */}
      <div
        role="region"
        aria-label="Featured projects carousel"
        className="mt-14"
      >
        {/* Index sits above the carousel on every breakpoint - scrolling chip
            row on mobile, centered row on desktop - so it's visible before
            you've scrolled past it, and arrow-key nav becomes a shortcut
            rather than the only discoverable way to switch slides. */}
        <IndexNav
          activeIndex={activeIndex}
          setActiveIndex={goToIndex}
          className="flex mb-5 md:mb-10 gap-2 md:gap-8 md:justify-center max-w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] px-1 md:px-0"
        />

        {/* Desktop / tablet: single active slide, no peeking side cards */}
        <div className="hidden md:block relative min-h-[720px] lg:min-h-[640px]">
          <motion.div
            key={tier1Projects[activeIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Tier1Slide project={tier1Projects[activeIndex]} isMobile={false} />
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll-snap cards */}
        <div
          ref={mobileScrollRef}
          className="md:hidden -mx-5 px-5 flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {tier1Projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (mobileCardRefs.current[i] = el)}
              className="w-full shrink-0 grow-0 basis-full snap-center"
            >
              <Tier1Slide project={project} isMobile={true} />
            </div>
          ))}
        </div>
      </div>

      {/* TIER 3 - full repo list */}
      <div className="mt-10 md:mt-16 text-center">
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-white-500 hover:text-accent transition-colors"
        >
          {githubRepoCount} repos on GitHub ↗
        </a>
      </div>
    </section>
  );
}

function IndexNav({ activeIndex, setActiveIndex, className }) {
  return (
    <div className={className}>
      {tier1Projects.map((project, i) => (
        <button
          key={project.id}
          type="button"
          onClick={() => setActiveIndex(i)}
          aria-current={i === activeIndex}
          className={`shrink-0 snap-start whitespace-nowrap font-mono text-xs sm:text-sm pb-1 border-b-2 transition-colors outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm ${
            i === activeIndex
              ? "text-white-800 border-accent"
              : "text-white-500 border-transparent hover:text-white-600"
          }`}
        >
          {String(project.index).padStart(2, "0")} {project.title}
        </button>
      ))}
    </div>
  );
}

function Tier1Slide({ project, isMobile }) {
  return (
    <article
      aria-label={`${String(project.index).padStart(2, "0")} of ${String(TOTAL).padStart(2, "0")} - ${project.title}`}
      className="relative max-w-4xl mx-auto"
    >
      {/* Inset pill with its own backdrop, not flush text at the corner -
          plain top-0 right-0 text had no backdrop, so mid-swipe on mobile
          (adjacent card peeking in) it visually blended into whatever was
          behind it and read as clipped. */}
      <span className="absolute top-1 right-1 sm:top-0 sm:right-0 font-mono text-xs text-white-500 bg-black-100/90 border border-black-300 rounded-full px-2.5 py-1 backdrop-blur-sm">
        {String(project.index).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
      </span>

      <div className="pr-16 sm:pr-0">
        <h3 className="font-display text-3xl sm:text-4xl text-white-800">{project.title}</h3>
        <p className="font-mono text-xs sm:text-sm text-white-500 mt-2">
          {project.role} · {project.org} · {project.year}
        </p>
      </div>

      <div className="mt-6 inline-block rounded-lg border border-accent/40 bg-accent/5 px-4 py-3">
        <p className="font-mono text-accent text-sm sm:text-base">{project.anchor}</p>
      </div>

      <p className="mt-6 max-w-[620px] text-white-600 font-generalsans">{project.narrative}</p>

      <div className="mt-8">
        <MediaBlock project={project} isMobile={isMobile} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-white-500 border border-black-300 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.live) && (
        <div className="mt-6 flex gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-white-500 hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-white-500 hover:text-accent transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function MediaBlock({ project, isMobile }) {
  const { media } = project;

  if (media.type === "diagram") {
    return (
      <figure>
        <div className="w-full aspect-video rounded-xl border border-black-300 bg-black-200 overflow-hidden">
          <MachineLearnDiagram />
        </div>
        <figcaption className="mt-2 font-mono text-xs text-white-500">{media.caption}</figcaption>
      </figure>
    );
  }

  if (!media.items || media.items.length === 0) {
    return (
      <div className="w-full aspect-video rounded-xl border border-dashed border-black-300 bg-black-200 flex items-center justify-center">
        <span className="font-mono text-xs text-white-500">[MEDIA PENDING]</span>
      </div>
    );
  }

  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]">
      {media.items.map((item) => (
        <figure key={item.id} className="shrink-0 snap-center w-[85%] sm:w-[70%] md:w-[60%]">
          <div className="aspect-video rounded-xl border border-black-300 bg-black-200 overflow-hidden">
            {item.video && !isMobile ? (
              <video
                src={item.video}
                poster={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                draggable="false"
              />
            )}
          </div>
          <figcaption className="mt-2 font-mono text-xs text-white-500">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

// Inline architecture diagram for machine(learn) - mirrors the 4-phase async
// pipeline (Plan -> Implement -> Tune -> Report) described in the repo's
// orchestrator.py, with the retry loop each of the middle two phases runs.
function MachineLearnDiagram() {
  const boxes = [
    { x: 20, label: "PLAN" },
    { x: 190, label: "IMPLEMENT", retry: true },
    { x: 360, label: "TUNE", retry: true },
    { x: 530, label: "REPORT" },
  ];
  const boxW = 130;
  const boxH = 60;
  const midY = 150;

  return (
    <svg viewBox="0 0 680 360" className="w-full h-full" role="img" aria-label="machine(learn) 4-phase pipeline diagram">
      <rect x="0" y="0" width="680" height="360" fill="#141619" />

      {boxes.map((box, i) => (
        <g key={box.label}>
          <rect
            x={box.x}
            y={midY}
            width={boxW}
            height={boxH}
            rx="8"
            fill="#1D2025"
            stroke="#85A16A"
            strokeWidth="1.5"
          />
          <text
            x={box.x + boxW / 2}
            y={midY + boxH / 2 + 5}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="14"
            fill="#F2F3F5"
          >
            {box.label}
          </text>

          {box.retry && (
            <>
              <path
                d={`M ${box.x + 20} ${midY} C ${box.x - 10} ${midY - 40}, ${box.x + boxW + 10} ${midY - 40}, ${box.x + boxW - 20} ${midY}`}
                fill="none"
                stroke="#9BA1A9"
                strokeWidth="1"
                strokeDasharray="4 3"
                markerEnd="url(#retryArrow)"
              />
              <text
                x={box.x + boxW / 2}
                y={midY - 46}
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="10"
                fill="#9BA1A9"
              >
                retry
              </text>
            </>
          )}

          {i < boxes.length - 1 && (
            <>
              <line
                x1={box.x + boxW}
                y1={midY + boxH / 2}
                x2={boxes[i + 1].x}
                y2={midY + boxH / 2}
                stroke="#85A16A"
                strokeWidth="1.5"
                markerEnd="url(#phaseArrow)"
              />
              <text
                x={box.x + boxW + (boxes[i + 1].x - (box.x + boxW)) / 2}
                y={midY + boxH / 2 + 22}
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="9"
                fill="#9BA1A9"
              >
                schema
              </text>
            </>
          )}
        </g>
      ))}

      <defs>
        <marker id="phaseArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#85A16A" />
        </marker>
        <marker id="retryArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#9BA1A9" />
        </marker>
      </defs>
    </svg>
  );
}
