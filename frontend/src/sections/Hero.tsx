import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../styles/HeroBg.css";

import Avatar from "../components/Avatar";

export default function Hero() {
    return (
        <section className="hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="grid-overlay" />
            <div className="glow-ring" />

            <div className="hero-content">
                <div className="hero-text">
                    <span>Hello, I'm Marcin</span>
                    <h1>Full Stack Developer</h1>
                    <p>
                        Tworzę nowoczesne aplikacje webowe i backendowe,
                        skupiając się na wydajności, estetyce oraz czytelnym kodzie.
                    </p>

                    <div className="hero-buttons">
                        <a href="#portfolio" className="primary-btn">Zobacz projekty</a>
                        <a href="#contact" className="secondary-btn">Kontakt</a>
                    </div>
                </div>

                <div className="model-container">
                    <Canvas camera={{ position: [0, 1, 8], fov: 45 }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[5, 5, 5]} />
                        <Avatar />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={-2} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}