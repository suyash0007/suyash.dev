import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  const woodMaterial = { color: '#8B5E3C', roughness: 0.85, metalness: 0.05 };
  const darkWoodMaterial = { color: '#5C3A1E', roughness: 0.9, metalness: 0.05 };
  const metalMaterial = { color: '#888888', roughness: 0.3, metalness: 0.8 };

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* ===== TRIPOD STAND ===== */}

      {/* Front-left leg */}
      <mesh position={[-0.25, -0.85, 0.2]} rotation={[0.15, 0, 0.18]}>
        <cylinderGeometry args={[0.035, 0.045, 1.4, 12]} />
        <meshStandardMaterial {...woodMaterial} />
      </mesh>

      {/* Front-right leg */}
      <mesh position={[0.25, -0.85, 0.2]} rotation={[0.15, 0, -0.18]}>
        <cylinderGeometry args={[0.035, 0.045, 1.4, 12]} />
        <meshStandardMaterial {...woodMaterial} />
      </mesh>

      {/* Back leg (support) */}
      <mesh position={[0, -0.75, -0.35]} rotation={[-0.35, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.045, 1.2, 12]} />
        <meshStandardMaterial {...woodMaterial} />
      </mesh>

      {/* Cross brace between front legs */}
      <mesh position={[0, -0.65, 0.22]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.45, 8]} />
        <meshStandardMaterial {...darkWoodMaterial} />
      </mesh>

      {/* Metal bolt at top joint */}
      <mesh position={[0, -0.18, 0.05]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial {...metalMaterial} />
      </mesh>

      {/* ===== TARGET BOARD ===== */}

      {/* Backboard (thick disc for depth) */}
      <mesh position={[0, 0.38, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 0.06, 48]} />
        <meshStandardMaterial color="#d4c9a8" roughness={0.95} metalness={0.0} />
      </mesh>

      {/* Rim / edge ring */}
      <mesh position={[0, 0.38, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.03, 12, 48]} />
        <meshStandardMaterial {...darkWoodMaterial} />
      </mesh>

      {/* Ring 1 — White (outermost) */}
      <mesh position={[0, 0.38, 0.032]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.70, 0.70, 0.005, 48]} />
        <meshStandardMaterial color="#f0ece0" roughness={0.6} metalness={0.0} />
      </mesh>

      {/* Ring 2 — Black */}
      <mesh position={[0, 0.38, 0.034]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.58, 0.58, 0.005, 48]} />
        <meshStandardMaterial color="#2c2c2c" roughness={0.5} metalness={0.0} />
      </mesh>

      {/* Ring 3 — Blue */}
      <mesh position={[0, 0.38, 0.036]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.46, 0.46, 0.005, 48]} />
        <meshStandardMaterial color="#1565C0" roughness={0.45} metalness={0.05} />
      </mesh>

      {/* Ring 4 — Red */}
      <mesh position={[0, 0.38, 0.038]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.005, 48]} />
        <meshStandardMaterial color="#c62828" roughness={0.45} metalness={0.05} />
      </mesh>

      {/* Ring 5 — Gold / Yellow (inner) */}
      <mesh position={[0, 0.38, 0.040]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.20, 0.20, 0.005, 48]} />
        <meshStandardMaterial color="#f9a825" roughness={0.35} metalness={0.15} />
      </mesh>

      {/* Bullseye — Gold center dot */}
      <mesh position={[0, 0.38, 0.042]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.005, 48]} />
        <meshStandardMaterial color="#ffeb3b" roughness={0.3} metalness={0.2} />
      </mesh>
    </group>
  );
};

export default Target;
