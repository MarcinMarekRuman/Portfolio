import { useGLTF } from "@react-three/drei";

export default function Avatar() {
    const model = useGLTF("/models/avatar.glb");

    return (
        <primitive
            object={model.scene}
            scale={0.04}
            position={[0, -2, 0]}
            rotation={[0, Math.PI, 0]}
        />
    );
}