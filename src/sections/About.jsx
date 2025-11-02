import Globe from "react-globe.gl"
import { color } from "three/webgpu"
import Button from "../components/Button"
import Shuffle from "../components/Shuffle"
import ASCIIText from "../components/ASCIIText"
import { Suspense, useEffect, useRef} from 'react'
import { navLinks, socials } from '../constants'
import { Canvas } from "@react-three/fiber"
import Aztec from "../models/Aztec"
import RollingGallery from "../components/RollingGallery"
import CanvasLoader from "../components/CanvasLoader"
import Sky from "../models/Sky"
import Plane from "../models/Plane"


const About = () => {

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    
                    <div>
                                                <p className="grid-headtext">
                          <span className="relative block h-12 sm:h-24 overflow-hidden">
                            <ASCIIText
                              text="Hi, I'm Zeke"
                              enableWaves={false}
                              textFontSize={500}
                              asciiFontSize={1}
                            />
                          </span>
                        </p>
                        <p className="grid-subtext"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <div style={{ height: '400px'}} className="flex justify-center items-center sm:h-[300px]"> {
                    /* Increased mobile height from 300px to 400px */}
                        <RollingGallery autoplay={true} pauseOnHover={true} />
                    </div>

                    <div>
                        <p className="grid-headtext">Here is</p>
                        <p className="grid-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">

                <div className="grid-container">
                    <div className="rounded-3xl w-full aspect-square max-w-[326px] mx-auto flex justify-center items-center overflow-hidden bg-black-300">
                        <Canvas
                            camera={{ position: [0, 0, 5], fov: 75 }}
                            style={{ width: '100%', height: '100%' }}
                            gl={{ preserveDrawingBuffer: true }}
                        >
                            <Suspense fallback={<CanvasLoader />}>

                            </Suspense>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Sky isRotating={true} />
                            <Plane
                                isRotating={true}
                                position = {[0, 1, 3]}
                                scale = {[0.73,0.73,0.73]}
                                rotation ={[0,1.6,0]}
                            />
                            <Aztec scale={0.005} position={[0, 0, 0]} rotation={[0, 10, 0]}/>
                        </Canvas>
                    </div>

                    <div>
                        <p className="grid-headtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    
                    </div>
                </div>

            </div>

            <div className="xl:col-span-2 xl:row-span-3"> 
                <div className="grid-container">

                    <div> 
                    <p className="grid-headtext">
                            AHhHH.
                            </p>
                        <p className="grid-subtext">
                            Lorem ipsum dolor d amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <div className="space-y-2">

                        <a
                            className="copy-container cursor-pointer"
                            href="/assets/Esequiel_Linares_resume.pdf"
                            download="Esequiel_Linares_resume.pdf"
                        >

                            <Shuffle
                                text="Click Here to Download Resume"
                                shuffleDirection="right"
                                duration={0.35}
                                animationMode="evenodd"
                                shuffleTimes={1}
                                ease="power3.out"
                                stagger={0.03}
                                threshold={0.1}
                                colorFrom="#2EFFA8"
                                colorTo="#2EFFA8"
                                triggerOnce={true}
                                triggerOnHover={true}
                                respectReducedMotion={true}
                            />
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default About