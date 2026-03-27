import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, Text } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function RotatingCrystal() {
  const mesh = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.35
      mesh.current.rotation.y = t * 0.48
      mesh.current.scale.set(1 + Math.sin(t * 0.8) * 0.08, 1 + Math.cos(t * 0.8) * 0.08, 1 + Math.sin(t * 0.8) * 0.08)
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial color="#71f1ff" emissive="#28b7ff" roughness={0.12} metalness={0.8} envMapIntensity={1.5} />
    </mesh>
  )
}

function FloatingParticles() {
  const particlesRef = useRef()
  const particleCount = 50

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#76f1ff" transparent opacity={0.6} />
    </points>
  )
}

function FloatingText() {
  return (
    <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={[-3, 2, -2]}
        fontSize={0.3}
        color="#76f1ff"
        anchorX="center"
        anchorY="middle"
      >
        React
      </Text>
    </Float>
  )
}

function FloatingText2() {
  return (
    <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.8}>
      <Text
        position={[3, -1, -3]}
        fontSize={0.25}
        color="#ff6b9d"
        anchorX="center"
        anchorY="middle"
      >
        3D Web
      </Text>
    </Float>
  )
}

function FloatingCubes() {
  const cubesRef = useRef([])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    cubesRef.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.015
        cube.position.y += Math.sin(t * 0.5 + i) * 0.005
      }
    })
  })

  return (
    <>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => (cubesRef.current[i] = el)}
          position={[i * 3 - 3, 0, -2]}
        >
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color={['#ff6b9d', '#9c86ff', '#76f1ff'][i]} />
        </mesh>
      ))}
    </>
  )
}

export default function Hero3D() {
  const webglSupported = typeof window !== 'undefined' && !!window.WebGLRenderingContext

  if (!webglSupported) {
    return (
      <div className="hero-3d-fallback">
        <h1>WebGL not available</h1>
        <p>Enable 3D support or switch to a browser with WebGL support (Chrome/Edge/Firefox).</p>
      </div>
    )
  }

  return (
    <div className="hero-3d">
      <Canvas shadows camera={{ position: [0, 0.8, 4], fov: 55 }}>
        <ambientLight intensity={0.25} />
        <directionalLight castShadow position={[5, 5, 5]} intensity={0.9} />
        <pointLight position={[-4, 2, -3]} intensity={1.1} color="#9c86ff" />
        <pointLight position={[4, -2, 3]} intensity={0.8} color="#ff6b9d" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#ffffff" />
        <Stars radius={70} depth={40} count={1300} factor={4} saturation={0.45} fade />
        <RotatingCrystal />
        <FloatingParticles />
        <FloatingCubes />
        <FloatingText />
        <FloatingText2 />
        <OrbitControls enablePan={false} minDistance={2.2} maxDistance={8} />
      </Canvas>
    </div>
  )
}
