import { useRef, useEffect } from 'react'
import PlaneScene from "../../public/models/cartoon_plane2DRACO.glb";
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei';



const Plane = ({ ...props }) => {
    const ref = useRef();
    const { scene,  animations  } = useGLTF(PlaneScene);
    const {actions} = useAnimations(animations,ref);

    useEffect(() =>{
        actions['Main'].play();
    })
    useFrame(({ clock }) => {
      const radius = 4; // Distance from the center
        const height = 1; // Height of the plane
        const elapsedTime = clock.getElapsedTime() * 0.7;

        const x = Math.sin(elapsedTime) * radius;
        const z = Math.cos(elapsedTime) * radius;

        ref.current.position.set(x, height, z);

        // Calculate rotation to face the direction of motion
        const lookAtX = Math.sin(elapsedTime + 0.1) * radius;
        const lookAtZ = Math.cos(elapsedTime + 0.1) * radius;
        ref.current.lookAt(lookAtX, height, lookAtZ);

    
        
      
      
    });





  return (
    <mesh {...props} ref = {ref}>
        <primitive object = {scene} />
    </mesh>
  )
}


export default Plane