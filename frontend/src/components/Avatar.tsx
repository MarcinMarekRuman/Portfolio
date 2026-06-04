import { useGLTF } from "@react-three/drei";

export default function Avatar() {
    const model = useGLTF("/models/avatar.glb");

    return (
        <primitive
            object={model.scene}
            scale={0.03}
            position={[0, -1, 0]}
            rotation={[0, Math.PI, 0]}
        />
    );
}