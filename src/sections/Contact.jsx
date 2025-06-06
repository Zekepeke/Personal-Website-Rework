import React, { Suspense } from "react";
import { RobotExpressive, Bender } from "../models";
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera";
import { calculateSizes } from '../constants'
import { useMediaQuery } from "react-responsive";
import { Leva, useControls } from 'leva'
import { socials } from "../constants";



const Contact = () => {

  const isSmall = useMediaQuery({ maxWidth: 480 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="absolute inset-0 min-h-screen w-full">
          <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
        </div>

        <div className="contact-container">
          <h3 className="head-text my-4">Let's talk</h3>
          <p className="text-lg text-white-600">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
          <div className="mt-3">
              {socials.map((social) => (
                <div key={social.id} className="copy-container mt-2">
                  <img className="w-6 h-6" src={social.img} alt={social.social_name} />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    {social.name}
                  </p>
                  <a
                    className="flex gap-2 cursor-pointer text-white-600"
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>{social.social_name}</p>
                    <img className="w-5 h-5" src="assets/checkout-arrow.svg" alt="arrow" />
                  </a>
                </div>
              ))}
          </div>

        </div>
        
        {/* <div className="border border-black-300 bg-black-200 rounded-lg h-70 mt-10">
          <Canvas>
            <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera makeDefault position={[0,0,20]}/>
                <ambientLight intensity={1} />
                <HeroCamera isMobile={isMobile}
                >
                  <group>
                    <RobotExpressive
                      position = {sizes.expressiveRobotPosition}
                      scale = {sizes.expressiveRobotScale}
                      rotation = {[0.4,0.6,0]}
                    />
                    <Bender
                      position = {sizes.benderPosition}
                      scale = {sizes.benderScale}
                      rotation = {[0, -0.2, 0]}
                    />
                  </group>
                </HeroCamera>

                <directionalLight intensity={0.5} position={[10,10,0]} />
            </Suspense>
          </Canvas>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;