import Globe from "react-globe.gl"
import { color } from "three/webgpu"
import Button from "../components/Button"
import { useState, Suspense, useEffect, useRef} from 'react'
import { navLinks } from '../constants'
import { Canvas } from "@react-three/fiber"
import Aztec from "../models/Aztec"
import RollingGallery from "../components/RollingGallery"
import CanvasLoader from "../components/CanvasLoader"
import Sky from "../models/Sky"
import Plane from "../models/Plane"


const About = () => {

    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('zekedev06@gmail.com');

        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">

                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                    
                    <div>
                        <p className="grid-headtext">Demo name section</p>
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
                        <p className="grid-headtext">Tech</p>
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
                        <p className="grid-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#contact">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </a>
                    </div>
                </div>

            </div>

            <div className="xl:col-span-2 xl:row-span-3"> 
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                    <div> 
                    <p className="grid-headtext">
                            Lorem.
                            </p>
                        <p className="grid-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="copy-container" onClick={handleCopy}>
                            <img src={isCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy"/>
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">zekedev06@gmail.com</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default About