import { Float, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BugSpray from "./BugSpray";

const Projects = () => {
    return (
        <div className="projects-content full">
            <Canvas
                className="canvas-root"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '33%',
                    height: '100vh',
                    zIndex: 0,
                }}
                camera={{ position: [1, 2, 8], fov: 50 }}
            >
                <ambientLight />
                <directionalLight position={[5, 5, 5]} intensity={5} />
                <Environment preset="sunset" />
                <Float floatIntensity={0.2} speed={1.75} rotationIntensity={0.5}>
                    <BugSpray 
                        position={[0, -3, 0]}
                        rotation={[0, -1, 0]}
                        scale={[1, 1, 1]}
                    />
                </Float>
                <OrbitControls enableZoom={false} target={[0, 0, 0]} />
            </Canvas>
        </div>
    )
}

export default Projects;
