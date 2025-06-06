import Globe from "react-globe.gl"
import { color } from "three/webgpu"
import Button from "../components/Button"
import { useState } from "react"
import Folder from "../components/Folder"

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
                    <div style={{ height: '600px'}} className="flex justify-center items-center">
                        <Folder size={2} color="#00d8ff"/>
                    </div>

                    <div>
                        <p className="grid-headtext">Tech</p>
                        <p className="grid-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">

                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 40.6331,
                                lng: -89,
                                text: "Demo name",
                                size: 100,
                                color: 'red',
                            }]}
                        />
                        
                    </div>
                    <div>
                        <p className="grid-headtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className="grid-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
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