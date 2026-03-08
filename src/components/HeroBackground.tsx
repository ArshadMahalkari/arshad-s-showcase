import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 1500;
  const mouse = useRef({ x: 0, y: 0 });

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("hsl(185, 100%, 50%)"),
      new THREE.Color("hsl(263, 70%, 58%)"),
      new THREE.Color("hsl(330, 80%, 55%)"),
      new THREE.Color("hsl(217, 91%, 60%)"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

const HeroBackground = () => (
  <div className="absolute inset-0">
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: "transparent" }}>
      <ParticleField />
    </Canvas>
  </div>
);

export default HeroBackground;
