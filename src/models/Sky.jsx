import { useGLTF, useKTX2 } from '@react-three/drei'
import {useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import skyScene from '../../public/models/skyDRACO.glb'

const Sky = ({ isRotating }) => {
    
    const sky = useGLTF(skyScene);
    const skyRef = useRef();
    
    useFrame((_,delta) => {
        if(isRotating){
            skyRef.current.rotation.y += 0.15 * delta
        }
    })

  return (
    <mesh 
    position={[1,-2,0]}
    ref={skyRef}
    >
        <primitive object = {sky.scene}/>
    </mesh>
  )
}

export default Sky
