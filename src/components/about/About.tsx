import { Float, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DrinksCan from "./DrinksCan";
import "./About.css";
import { ContentContext } from "../../context/ContentContext";
import { useContext } from "react";
import { Content } from "../../model/Content";

const About = () => {
    const { setContent } = useContext(ContentContext);
    
    return (
        <div className="about-content full">
            <Canvas
                className="canvas-root"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '33%',
                    height: '100vh',
                    zIndex: 0,
                }}
                camera={{ position: [1, 2, 3], fov: 50 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} intensity={20} />
                <Environment preset="sunset" />
                <Float floatIntensity={0.2} speed={1.75} rotationIntensity={0.5}>
                    <DrinksCan 
                        position={[0, -1.3, 0]}
                        rotation={[0, 1, 0]}
                        scale={[1, 1, 1]}
                    />
                </Float>
                <OrbitControls enableZoom={false} target={[0, 0, 0]} />
            </Canvas>
            <div className="about-section">
                <h1>About me</h1>
                <p>I’m a front-end developer with two years of professional experience, built on a lifelong interest in coding - going all the way back to the days of HTML layouts and table-based positioning. I enjoy solving problems and finding ways to make my code more efficient and streamlined. With a background in art, I also bring a strong creative perspective to my programming.
                </p>
                <p>I work primarily with React and TypeScript, and enjoy using tools like React Three Fiber to bring 3D models - which I create and texture in Blender and Photoshop - into the browser to build interactive, visually distinctive experiences. I have professional experience in a fast-paced agency environment, delivering high-quality websites and web apps to clients across a range of industries.
                </p>
                <p>Outside of work, I’m always exploring new technologies and developing personal projects. I have a keen interest in the intersection of AI and front-end development. I am also currently expanding my skills into the area of C and Data Structures and Algorithms. I am constantly looking to learn and develop next skills.</p>
                <div className="buttons">
                    <button onClick={ () => setContent(Content.Contact) }>Get in touch</button>
                    <button onClick={ () => setContent(Content.Projects) }>Check out my projects</button>
                </div>
            </div>
        </div>
    )
}

export default About;
