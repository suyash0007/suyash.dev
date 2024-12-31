import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function GlowingRing() {
  const ringRef = useRef();

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const time = clock.getElapsedTime();
      // Subtle wavy animation for the ring's position and scale
      ringRef.current.scale.set(
        1 + Math.sin(time * 2) * 0.05, // Scale oscillates slightly
        1 + Math.cos(time * 2) * 0.05,
        1
      );
      ringRef.current.rotation.z = Math.sin(time * 1.5) * 0.1; // Gentle rotation
    }
  });

  return (
    <group>
      {/* Center Image */}
      <mesh position={[0, 0, 0.1]}>
        <circleGeometry args={[0.7, 64]} />
        <meshBasicMaterial
          map={new THREE.TextureLoader().load('/assets/hero-img.png')}
        />
      </mesh>

      {/* Rotating Glow Ring with Subtle Animation */}
      <group ref={ringRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            rotation={[0, 0, (Math.PI * 2 * i) / 8]}
            position={[0, 0, -0.1]}
          >
            <ringGeometry args={[0.8, 1, 32]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.5}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function GlowingRingWrapper() {
  return (
    <div className='h-32'>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <GlowingRing />
      </Canvas>
    </div>
  );
}

export default GlowingRingWrapper;
