import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF  } from '@react-three/drei';


const Bender = ({RobotCurrentAnimation, ...props}) => {
    const robotRef = useRef();
    const { scene, animations } = useGLTF('/models/benderTrash.glb');
    const {actions} = useAnimations(animations, robotRef);

    useEffect(() =>{
        actions['mixamo.com'].play();
    }, [actions] )

  return (
    <mesh 
    {...props}
    ref ={robotRef}
    >
        <primitive object = {scene} />
    </mesh>
  )
}

export default Bender