import { PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
// import Character from '../components/HackerRoom'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import { HackerRoom } from '../models'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import LetterGlitch from '../components/background/LetterGlitch'
import PixelTransition from '../components/animations/PixelTransition'

const Hero = () => {
  // const controls = useControls(
  //   'HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   }, 
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   }
  // })
  const isSmall = useMediaQuery({ maxWidth: 480 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="c-space my-20" id="home">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background layer */}
        <div className="absolute inset-0 z-0">
          <LetterGlitch />
        </div>

        {/* Foreground content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center c-space">
          <div className='absolute bottom-25'>
            <PixelTransition
              firstContent={
                <img
                  src="/assets/tyson.png"
                  alt="Tyson"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#3d3d3d"
                  }}>
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#f3efe8"}}>Hello👋</p>
                </div>
              }
            gridSize={12}
            pixelColor='#336659'
            animationStepDuration={0.35}
            />
          </div>

          {/* Button */}
          <div className="absolute bottom-24 left-0 right-0 w-full z-20">
            <a href="#about" className="w-fit mx-auto">
              <Button name="Demo Button" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero