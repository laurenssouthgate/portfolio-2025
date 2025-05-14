import { useGLTF } from '@react-three/drei';

interface CerealBoxProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const CerealBox = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }: CerealBoxProps) => {
  // Replace 'your-model.gltf' with your actual filename if different
  const gltf = useGLTF('/cereal-box/CerealBox.gltf');
  return <primitive object={gltf.scene} position={position} rotation={rotation} scale={scale} />;
};

export default CerealBox; 