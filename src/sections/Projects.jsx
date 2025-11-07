import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { nanoid } from "nanoid";
import { myProjects } from "../constants";
import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";
import Carousel from "react-spring-3d-carousel";

export default function Projects() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = myProjects.map((project, index) => ({
    key: nanoid(),
    content: (
      <ProjectCard
        project={project}
        index={index}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    ),
  }));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setSlideIndex((i) => (i + 1) % myProjects.length);
      if (e.key === "ArrowLeft") setSlideIndex((i) => (i - 1 + myProjects.length) % myProjects.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="min-h-screen overflow-hidden bg-[#121212] px-4 sm:px-6 pb-[calc(env(safe-area-inset-bottom)+96px)] sm:pb-24">
        <div className="relative h-72 flex items-start justify-center">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tight text-[#FFFFFF] ">
            Projects
          </h1>
        </div>
      <Parallax speed={50}>
        {/* 3D carousel of project cards */}
        <div className="mt-10 max-w-full">
          <Carousel
            slides={slides}
            showNavigation={true}
            goToSlide={slideIndex}
            animationConfig={{ tension: 210, friction: 50 }}
          />
        </div>

        {/* Spacer for scroll playroom */}
        <div className="h-72 sm:h-96" />
      </Parallax>
    </section>
  );
}

function ProjectCard({ project, index, slideIndex, setSlideIndex }) {
  const onPress = () =>
    slideIndex === index
      ? 
        window.open(project.href, "_blank", "noopener noreferrer")
      : setSlideIndex(index);

  const animateFrom = "bottom";

  return (
      <Card
        className="w-[88vw] sm:w-full max-w-[650px] mx-auto md:rounded-2xl rounded-xl bg-[#181818]/85 backdrop-blur-md ring-1 ring-white/10 shadow-xl p-5 md:p-8 space-y-4 md:space-y-6"
        isPressable
        onPress={onPress}
      >
      {/* Header: project title + quick link */}
      <CardHeader className="block text-left">
        <div className="flex items-start gap-2">
          <h3 className="font-semibold tracking-[-0.01em] leading-[1.1] text-[clamp(18px,5vw,24px)] text-[#FFFFFF]">
            {project.title}
          </h3>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 rounded-md px-1 py-0.5 text-sm text-[#b3b3b3] hover:text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#1db954]"
            aria-label={`Open ${project.title} on GitHub`}
          >
            ↗
          </a>
        </div>
        <p className="mt-2 text-[15px] leading-5 text-[#b3b3b3]">
          {project.desc}
        </p>
      </CardHeader>

      <CardBody className="text-sm">
        <p className="text-[#B3B3B3]">{project.subdesc}</p>
      </CardBody>

      {/* Media section beneath description */}
      <div className="mt-4 w-full">
        <div className="rounded-xl border border-[#282828] bg-[#0f0f10] p-2 h-[56vw] min-h-44 max-h-80 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
          <div
            className="flex gap-2 h-full overflow-x-auto snap-x snap-mandatory px-1 [scrollbar-width:none] [-ms-overflow-style:none]"
            style={{ scrollBehavior: "smooth" }}
            aria-label={`${project.title} screenshots`}
          >
            {(project.img || []).map((m) => (
              <img
                key={m.id}
                src={m.img}
                alt={`${project.title} screenshot ${m.id}`}
                className="h-full w-auto rounded-lg snap-center object-cover transition-transform duration-300 hover:scale-[0.985] select-none"
                loading="lazy"
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer: tech tags (chips) */}
      <CardFooter className="flex flex-row flex-wrap gap-2 pt-">
        {(project.tags || []).map((tag) => (
          <Chip
            key={tag.name}
            size="sm"
            className="bg-[#1e1e1e] text-[#b3b3b3] border border-[#404040] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            {tag.name}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
}