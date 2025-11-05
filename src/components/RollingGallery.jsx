import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import { skills } from "../constants";

const number = 1
const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
  height = 340,
  itemWidth = 160,
  itemGap = 24,
  radius: radiusProp = 390, // keep a constant depth so items don't explode in size as count grows
}) => {
  images = images.length > 0 ? images : skills;

  // --- 3D geometry: constant apparent size regardless of item count ---
  const faceCount = images.length;
  const faceWidth = itemWidth; // face width == card width => no overflow
  const radius = radiusProp;   // do NOT grow with faceCount; prevents over-zoom
  

  // Framer Motion
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Convert rotation -> 3D transform
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: faceWidth + itemGap, // minimal width; faces are absolutely positioned
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                padding: `${itemGap / 2}px`,
                transform: `rotateY(${(360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none w-full h-auto max-h-[80%] rounded-[15px] border-[3px] border-white object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;