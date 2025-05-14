import { useGLTF } from '@react-three/drei';

interface BugSprayProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const BugSpray = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }: BugSprayProps) => {
  // Replace 'your-model.gltf' with your actual filename if different
  const gltf = useGLTF('/bug-spray/bug-spray.gltf');
  return <primitive object={gltf.scene} position={position} rotation={rotation} scale={scale} />;
};

export default BugSpray; 