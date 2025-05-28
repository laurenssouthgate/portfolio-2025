import { Float, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import BugSpray from "./BugSpray";
import projectsData from "./projects.json";
import portfolioPreview from "../../assets/webp/portfolio-preview.webp";
import randomPoetryPreview from "../../assets/webp/random-poetry-generator.webp";
import todoHandlerPreview from "../../assets/webp/todo-handler-preview.webp";
import tetrisPreview from "../../assets/webp/tetris-preview.webp";
import githubIcon from "../../assets/svg/github-logo.svg";
import externalLinkIcon from "../../assets/svg/external-link.svg";
import "./Projects.css";

type Project = {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    liveLink?: string;
}

const ProjectCard = ({ project } : { project: Project }) => {
    const imageMap: { [key: string]: string } = {
        "This Portfolio": portfolioPreview,
        "Random Poetry Generator": randomPoetryPreview,
        "Tetris": tetrisPreview,
        "Todo Handler": todoHandlerPreview,
    };

    return (
        <div className="project-card">
            <img src={ imageMap[project.title] } alt={ project.title } />
            <div className="project-card__text">
                            <h3>{ project.title }</h3>
            <div className="technologies">
                { project.technologies.map((technology) => (
                    <span key={ technology }>{ technology }</span>
                )) }
            </div>
            <p>{ project.description }</p>
            <div className="project-links">
                { project.github && (
                    <a href={ project.github } target="_blank" rel="noopener noreferrer">
                        <img src={ githubIcon } alt="GitHub" width={ 20 } height={ 20 } />
                    </a>
                )}
                { project.liveLink && (
                    <a href={ project.liveLink } target="_blank" rel="noopener noreferrer">
                        <img src={ externalLinkIcon } alt="Live link"  width={ 20 } height={ 20 } />
                    </a>
                )}
            </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const handleNext = () => {
        setSlideIndex((prevIndex) => 
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setSlideIndex((prevIndex) => 
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="projects-content full">
            <div className="projects-section">
                <h1>My Projects</h1>
                <div className="projects-slider">
                    <div className="projects-slider__wrapper">
                        <div 
                            className="projects-slider__rail"
                            style={{
                                transform: `translateX(-${slideIndex * 100}%)`,
                            }}
                        >
                            {projectsData.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </div>
                    </div>
                <div className="projects-slider__controls">
                    <button onClick={handlePrev}>Prev</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
            </div>

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
                camera={{ position: [1, 2, 8], fov: 50 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} intensity={ 5 } />
                <Environment preset="sunset" />
                <Float floatIntensity={ 0.2 } speed={ 1.75 } rotationIntensity={ 0.5 }>
                    <BugSpray 
                        position={[0, -3, 0]}
                        rotation={[0, -1, 0]}
                        scale={[1, 1, 1]}
                    />
                </Float>
                <OrbitControls enableZoom={ false } target={[0, 0, 0]} />
            </Canvas>
        </div>
    )
}

export default Projects;
