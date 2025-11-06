import Globe from "react-globe.gl"
import { color } from "three/webgpu"
import Button from "../components/Button"
import Shuffle from "../components/Shuffle"
import ASCIIText from "../components/ASCIIText"
import Folder from "../components/Folder"
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import Aztec from "../models/Aztec"
import RollingGallery from "../components/RollingGallery"
import CanvasLoader from "../components/CanvasLoader"
import Sky from "../models/Sky"
import Plane from "../models/Plane"



const FolderItems = [
    <img key="item1" src="/assets/tysonabout3.jpg" />,
    <img key="item2" src="/assets/tysonabout1.jpg"/>,
    <img key="item3" src="/assets/tysonabout2.jpg"/>,
]

// --- responsive sizing helpers ---
const useWindowWidth = () => {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280)
  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return w
}

const useResponsiveSizes = () => {
  const w = useWindowWidth()
  // Tune breakpoints for folder + ASCII sizes
  const folderSize = w < 640 ? 1.9 : w < 1024 ?  2: 2
  const textFontSize = w < 640 ? 240 : w < 1024 ? 340 : 400
  const asciiFontSize = w < 640 ? 0.9 : 1.8
  return { folderSize, textFontSize, asciiFontSize }
}

const About = () => {
  const { folderSize, textFontSize, asciiFontSize } = useResponsiveSizes()

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3 ">
                <div className="grid-container h-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex flex-col justify-end overflow-visible pt-6 sm:pt-10">
                    <div className="w-full flex justify-center items-center mb-4">
                      <Folder
                        size={folderSize}
                        color="#2EFFA8"
                        items={FolderItems}
                      />
                    </div>
                    <div>
                        <span className="relative block overflow-visible whitespace-nowrap h-16 sm:h-24 md:h-24">
                            <ASCIIText
                            text="I'm Zeke!"
                            enableWaves={false}
                            asciiFontSize={asciiFontSize}
                            textFontSize={textFontSize}
                            />
                        </span>
                        <p className="grid-headtext">
                            Building intelligent systems that make technology feel human.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <div className="flex justify-center items-center h-[360px]">{/* fixed height across breakpoints */}
                        <RollingGallery
                          autoplay
                          pauseOnHover
                          height={240}
                          itemWidth={160}
                          itemGap={24}
                        />
                    </div>

                    <div>
                        <p className="grid-headtext">Languages, Frameworks & AI Tools</p>
                       <p className="grid-subtext">
                            My favorite tools for turning imagination into logic, from web apps to neural networks.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">

                <div className="grid-container">
                    <div className="rounded-3xl w-full aspect-square max-w-[326px] mx-auto flex justify-center items-center overflow-hidden bg-[#181818] relative">
                        <Canvas
                            camera={{ position: [0, -0.2, 5], fov: 75 }}
                            style={{ width: '100%', height: '100%' }}
                            gl={{ preserveDrawingBuffer: true }}
                        >
                            <Suspense fallback={<CanvasLoader />} />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Sky isRotating={true} />
                            <Plane
                                isRotating={true}
                                position = {[0, 0.9, 3]}
                                scale = {[0.73,0.73,0.73]}
                                rotation ={[0,1.6,0]}
                            />
                            <Aztec scale={0.0058} position={[0, -0.22, 0]} rotation={[0, 10, 0]}/>
                        </Canvas>
                    </div>
                    <div className="mt-5">
                      <p className="grid-headtext">Exploration Through Code</p>
                      <p className="grid-subtext">
                        I treat code as art and research; experimenting with 3D and AI to turn curiosity into meaningful experiences.                      </p>
                    </div>
                </div>

            </div>

            <div className="xl:col-span-2 xl:row-span-3"> 
            <div className="grid-container">
                <div> 
                <p className="grid-headtext">
                    My Mission & Values
                </p>
                <p className="grid-subtext space-y-2 list-disc marker:text-2xl marker:text-[#B3B3B3] pl-5">
                    <li><strong>Build with intention.</strong>  I create code that is useful, beautiful, or kind, never meaningless complexity.</li>
                    <li><strong>Stay curious.</strong> I seek ideas that challenge how we think, learn, and connect through technology.</li>
                    <li><strong>Bridge art and logic.</strong> Creativity paired with precision transforms imagination into working systems.</li>
                    <li><strong>Empower through empathy.</strong> Software must embrace accessibility and inclusion from the start.</li>
                    <li><strong>Keep learning, keep shipping.</strong>  I continually build, test, and improve projects, delivering value at every stage of development.</li>
                </p>
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
                                colorFrom="#1DB954"
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