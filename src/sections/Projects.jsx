import { Suspense, useState, useEffect, useMemo } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { DemoComputer } from "../models";
import { motion, AnimatePresence } from "framer-motion";

const FancyArrow = ({ dir = "next", onClick }) => {
  const [pressing, setPressing] = useState(false);

  // hold-to-repeat (fast skip)
  useEffect(() => {
    if (!pressing) return;
    const id = setInterval(onClick, 220); // repeat speed
    return () => clearInterval(id);
  }, [pressing, onClick]);

  // simple 8-way sparkle burst positions
  const sparks = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => {
        const t = (i / 8) * Math.PI * 2;
        return { x: Math.cos(t) * 18, y: Math.sin(t) * 18 };
      }),
    []
  );

  return (
    <motion.button
      className="arrow-btn relative overflow-visible"
      onClick={onClick}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      onMouseLeave={() => setPressing(false)}
      whileHover={{ x: dir === "next" ? 4 : -4 }}
      whileTap={{ scale: 0.92, rotate: dir === "next" ? 8 : -8 }}
    >
      <img
        src={dir === "next" ? "/assets/right-arrow.png" : "/assets/left-arrow.png"}
        alt={`${dir} arrow`}
        className="w-4 h-4"
      />

      {/* ripple */}
      <motion.span
        key={`ripple-${Date.now()}`} // new ripple each click
        className="absolute inset-0 rounded-full"
        style={{ pointerEvents: "none", border: "2px solid rgba(255,255,255,0.35)" }}
        initial={{ scale: 0.4, opacity: 0.9 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />

      {/* sparkles */}
      {sparks.map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/90"
          style={{ left: "50%", top: "50%", translateX: "-50%", translateY: "-50%" }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  );
};

const Projects = () => {
  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // page transition variants
  const variants = {
    enterFromRight: { opacity: 0, x: 40, rotateY: 10, filter: "blur(4px)" },
    enterFromLeft: { opacity: 0, x: -40, rotateY: -10, filter: "blur(4px)" },
    center: { opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" },
    exitToLeft: { opacity: 0, x: -40, rotateY: -10, filter: "blur(4px)" },
    exitToRight: { opacity: 0, x: 40, rotateY: 10, filter: "blur(4px)" },
  };

  // detect direction for nicer animation
  const [lastIndex, setLastIndex] = useState(0);
  useEffect(() => setLastIndex(selectedProjectIndex), [selectedProjectIndex]);

  const goingForward =
    (lastIndex === projectCount - 1 && selectedProjectIndex === 0) ||
    selectedProjectIndex > lastIndex;

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">Projects</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Animated content panel */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentProject?.title ?? selectedProjectIndex}
            className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"
            initial={goingForward ? "enterFromRight" : "enterFromLeft"}
            animate="center"
            exit={goingForward ? "exitToLeft" : "exitToRight"}
            variants={variants}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          >
            <div className="absolute top-0 right-0">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={myProjects[0].logoStyle}
            >
              <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
            </div>

            {/* Make the whole info block draggable to change project */}
            <motion.div
              className="flex flex-col gap-5 text-white-600 my-5 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) handleNavigation("next");
                if (info.offset.x > 60) handleNavigation("previous");
              }}
            >
              <p className="text-white text-2xl font-semibold animatedText animate-pulse">
                {currentProject.title}
              </p>
              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>

              <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  {currentProject.tags.map((tag, index) => (
                    <div key={index} className="tech-logo">
                      <img src={tag.path} alt={tag.name} className="w-5 h-5" />
                    </div>
                  ))}
                </div>
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600"
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>See more</p>
                  <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                </a>
              </div>

              <div className="flex justify-between items-center mt-7">
                <FancyArrow dir="previous" onClick={() => handleNavigation("previous")} />
                <FancyArrow dir="next" onClick={() => handleNavigation("next")} />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* (Optional) Keep your 3D canvas / preview column here */}
        {/* <div> ... </div> */}
      </div>
    </section>
  );
};

export default Projects;