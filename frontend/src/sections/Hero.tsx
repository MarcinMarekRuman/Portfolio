import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import '../styles/HeroBg.css'

import Avatar from "../components/Avatar";
export default function Hero() {
    return (
        <section className="avatarSection">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="grid-overlay" />
            <div className="glow-ring" />
            <div className="canvasContainer">
                <Canvas camera={{ position: [0, 1, 8], fov: 45 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} />
                    <Avatar />
                    <OrbitControls enableZoom={false}
                        autoRotate={true}
                        autoRotateSpeed={-2}
                    />
                </Canvas>
            </div>
        </section>
    );
}