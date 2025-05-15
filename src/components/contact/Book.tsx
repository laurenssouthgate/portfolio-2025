import { useGLTF } from '@react-three/drei';

interface BookProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const Book = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }: BookProps) => {
  // Replace 'your-model.gltf' with your actual filename if different
  const gltf = useGLTF('/book/book.gltf');
  return <primitive object={gltf.scene} position={position} rotation={rotation} scale={scale} />;
};

export default Book;