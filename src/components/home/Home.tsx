import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import CerealBox from "./CerealBox";

const Home = () => {
    return (
        <div className="home-content full">
            <Canvas
                className="canvas-root"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50vw',
                    height: '100vh',
                    zIndex: 0,
                }}
                camera={{ position: [1, 2, 4], fov: 50 }}
            >
                <Environment preset="sunset" />
                <Float floatIntensity={0.2} speed={1.75} rotationIntensity={0.5}>
                    <CerealBox 
                        position={[0, -1.5, 0]}
                        rotation={[0,-3.6, 0]}
                        scale={[1, 1, 1]}
                    />
                </Float>
                <OrbitControls enableZoom={false} target={[0, 0, 0]} />
            </Canvas>
        </div>
    )
}

export default Home;

