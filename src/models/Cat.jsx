import { useGLTF, useAnimations } from '@react-three/drei';

import catScene from '../../public/models/Sleeping_cat.glb';
import { useRef, useEffect } from 'react';

const Cat = ({ ...props}) => {
  
    
    const catRef = useRef();

    const { scene } = useGLTF(catScene);


    return (
      <mesh 
      {...props}
      ref ={catRef}
      >
          <primitive object = {scene} />
      </mesh>
    )
  }


export default Cat