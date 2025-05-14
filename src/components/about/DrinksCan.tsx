import { useGLTF } from '@react-three/drei';

interface DrinksCanProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const DrinksCan = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }: DrinksCanProps) => {
  // Replace 'your-model.gltf' with your actual filename if different
  const gltf = useGLTF('/can/can.gltf');
  return <primitive object={gltf.scene} position={position} rotation={rotation} scale={scale} />;
};

export default DrinksCan; 