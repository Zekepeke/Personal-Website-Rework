import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF  } from '@react-three/drei';



const RobotExpressive = ({RobotCurrentAnimation, ...props}) => {
    const robotRef = useRef();
    const { scene,  animations  } = useGLTF('../../public/models/robot_expressiveDRACO.glb');
    const {actions} = useAnimations(animations,robotRef);

    useEffect(() =>{
      actions['Dance'].play();
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

export default RobotExpressive