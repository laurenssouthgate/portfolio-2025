import React from 'react';
import './Contact.css';
import { Float, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Book from "./Book";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-content full">
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
                    camera={{ position: [1, 2, 5], fov: 50 }}
                >
                    <ambientLight />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Environment preset="sunset" />
                    <Float floatIntensity={0.2} speed={1.75} rotationIntensity={0.5}>
                        <Book 
                            position={[0, -0.7, 0]}
                            rotation={[0, 3, 0]}
                            scale={[1, 1, 1]}
                        />
                    </Float>
                    <OrbitControls enableZoom={false} target={[0, 0, 0]} />
                </Canvas>
                <form className="contact-form">
                    <h1>Get in touch</h1>
                    <p>Email me at <a href="mailto:laurenssouthgate@gmail.com">laurenssouthgate@gmail.com</a>, connect with me on <a href="https://www.linkedin.com/in/laurenssouthgate/" rel="noreferrer" target="_blank">LinkedIn</a>, <a href="https://x.com/lsouthgate87" rel="noreferrer" target="_blank">X</a>, or use the form below to get in touch</p>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows={5}
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
