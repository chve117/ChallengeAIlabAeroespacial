import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { TextureLoader } from 'three';
import TextureMars from '../assets/textures/Marte.jpg'

const Planet3DModel = () => {

    const [texture] = useLoader(TextureLoader, [TextureMars]);

    return (
        <Canvas
            style={{
                width: '28rem',
                height: '28rem',
                padding: '0',
                overflow: 'visible',
                filter: 'drop-shadow(1px 5px 40px rgba(227, 90, 38, 0.52))'
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <mesh>
                    <sphereGeometry args={[3, 32, 32]} />
                    <meshStandardMaterial map={texture} />
                    <OrbitControls
                        enableZoom={false}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={5.0}
                        rotateSpeed={1.0}
                    />
                </mesh>
            </Suspense>
        </Canvas>
    );
}

export default Planet3DModel;