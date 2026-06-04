import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Avatar from "../components/Avatar";
export default function Hero() {
    return (
        <section className="avatarSection">
            <div className="canvasContainer">
                <Canvas camera={{ position: [0, 1, 8], fov: 45 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} />
                    <Avatar />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
        </section>
    );
}