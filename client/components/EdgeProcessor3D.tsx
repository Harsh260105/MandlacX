import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function EdgeProcessorModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      // Slow rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      {/* Main Device Body */}
      <Box args={[3, 0.8, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.3}
          metalness={0.7}
        />
      </Box>
      
      {/* Top Surface with slight bevel */}
      <Box args={[2.8, 0.1, 1.8]} position={[0, 0.45, 0]}>
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
      
      {/* Front Camera Lens 1 */}
      <Cylinder args={[0.15, 0.15, 0.1]} position={[-0.8, 0.5, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#000000" 
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>
      
      {/* Front Camera Lens 2 */}
      <Cylinder args={[0.15, 0.15, 0.1]} position={[0, 0.5, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#000000" 
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>
      
      {/* Front Camera Lens 3 */}
      <Cylinder args={[0.15, 0.15, 0.1]} position={[0.8, 0.5, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#000000" 
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>

      {/* Yellow accent LED indicators */}
      <Sphere args={[0.03]} position={[-1.2, 0.5, 0.9]}>
        <meshStandardMaterial 
          color="#FFCC00" 
          emissive="#FFCC00"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      <Sphere args={[0.03]} position={[1.2, 0.5, 0.9]}>
        <meshStandardMaterial 
          color="#FFCC00" 
          emissive="#FFCC00"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Side Ports */}
      <Box args={[0.15, 0.4, 0.8]} position={[-1.5, 0, -0.5]}>
        <meshStandardMaterial 
          color="#0a0a0a" 
          roughness={0.8}
        />
      </Box>
      
      {/* USB Ports */}
      <Box args={[0.05, 0.15, 0.3]} position={[-1.52, 0.1, -0.2]}>
        <meshStandardMaterial color="#001a33" />
      </Box>
      <Box args={[0.05, 0.15, 0.3]} position={[-1.52, -0.1, -0.2]}>
        <meshStandardMaterial color="#001a33" />
      </Box>
      
      {/* Ventilation grilles */}
      {Array.from({ length: 8 }, (_, i) => (
        <Box 
          key={i}
          args={[2.5, 0.02, 0.05]} 
          position={[0, 0.52, -0.8 + i * 0.2]}
        >
          <meshStandardMaterial color="#333333" />
        </Box>
      ))}
      
      {/* Logo area */}
      <Text
        fontSize={0.15}
        position={[0, 0.55, 0.2]}
        rotation={[-Math.PI / 2, 0, 0]}
        color="#FFCC00"
        anchorX="center"
        anchorY="middle"
      >
        MandlacX
      </Text>
    </group>
  );
}

export default function EdgeProcessor3D() {
  return (
    <div className="w-full h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [4, 2, 4], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#FFCC00" />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={1} 
          angle={0.3} 
          penumbra={0.5}
          color="#ffffff"
        />
        
        <EdgeProcessorModel />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
