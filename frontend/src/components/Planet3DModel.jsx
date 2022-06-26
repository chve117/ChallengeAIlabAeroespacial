import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

let dropShadows = new Map();
dropShadows.set("Marte",'drop-shadow(1px 5px 40px rgba(227, 90, 38, 0.52))');
dropShadows.set("Jupiter",'drop-shadow(rgba(236, 151, 77, 0.54) 1px 4px 71px)');
dropShadows.set("Mercurio",'drop-shadow(1px 4px 30px rgba(146, 115, 74, 0.55))');
dropShadows.set("Neptuno",'drop-shadow(1px 5px 35px rgba(77, 115, 236, 0.53))');
dropShadows.set("Saturno",'drop-shadow(rgba(219, 204, 70, 0.71) 4px 6px 47px)');
dropShadows.set("Urano",'drop-shadow(3px 4px 40px rgba(45, 242, 248, 0.54))');
dropShadows.set("Venus",'drop-shadow(1px 4px 30px rgba(255, 228, 54, 0.33))');

const Planet3DModel = ({ nameSolarPlanet = 'Marte' }) => {

    const [texture] = useLoader(TextureLoader, [`/images/texturePlanets/${nameSolarPlanet}.jpg`]);


    return (
        <Canvas
            style={{
                width: '28rem',
                height: '28rem',
                padding: '0',
                overflow: 'visible',
                filter: dropShadows.get(nameSolarPlanet)
            }}
        >
                <ambientLight intensity={0.5} />
                <mesh>
                    <sphereGeometry args={[3, 32, 32]} />
                    <meshStandardMaterial map={texture} />
                </mesh>
                <OrbitControls
                        enableZoom={false}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={5.0}
                        rotateSpeed={1.0}
                    />
        </Canvas>
    );
}

export default Planet3DModel;