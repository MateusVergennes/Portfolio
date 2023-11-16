import { useRef, useEffect} from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const birdRef = useRef()
  const  {scene, animations} = useGLTF(birdScene)
  const {actions} = useAnimations(animations, birdRef)

  useEffect(() => {
    actions['Take 001'].play() //faz ele bater as asas
  }, [])

  useFrame(({clock, camera}) => {//faz ele se mover
    //Update the y position simulate the flight moving ins a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) *0.2 +2 //ele ve se o tempo muda entao ele continua a se mover

    if(birdRef.current.position.x > camera.position.x + 10){//para rodar em torno da ilha, ele checa se o passaro esta no endpoint da camera e roda ele 180graus
      birdRef.current.rotation.y = Math.PI
    }else if(birdRef.current.position.x < camera.position.x - 10){
      birdRef.current.rotation.y = 0
    }

    if(birdRef.current.rotation.y === 0 ){
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    }else{
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    <mesh 
      position={[-5, 2, 1]} 
      scale={[0.003, 0.003, 0.003]} 
      ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird