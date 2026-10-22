import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AiCore3DProps {
  className?: string;
  interactive?: boolean;
}

export const AiCore3D: React.FC<AiCore3DProps> = ({ className = '', interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRotatingFast, setIsRotatingFast] = useState(false);
  const [wireframeMode, setWireframeMode] = useState(false);

  // References for dynamic toggles
  const fastSpeedRef = useRef(false);
  fastSpeedRef.current = isRotatingFast;
  const wireframeRef = useRef(false);
  wireframeRef.current = wireframeMode;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0a192f, 1.5);
    scene.add(ambientLight);

    // Central cyan/blue point light inside core
    const corePointLight = new THREE.PointLight(0x00f0ff, 4, 15);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // Dynamic key lights
    const blueKeyLight = new THREE.DirectionalLight(0x0070f3, 3);
    blueKeyLight.position.set(5, 5, 4);
    scene.add(blueKeyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    cyanRimLight.position.set(-5, -3, 3);
    scene.add(cyanRimLight);

    const purpleFillLight = new THREE.PointLight(0x3b82f6, 2, 10);
    purpleFillLight.position.set(0, 4, -3);
    scene.add(purpleFillLight);

    // 3. Central Energy Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere (Singularity)
    const innerGeo = new THREE.SphereGeometry(0.75, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // Mid energy aura sphere
    const auraGeo = new THREE.SphereGeometry(0.95, 32, 32);
    const auraMat = new THREE.MeshStandardMaterial({
      color: 0x0070f3,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const auraCore = new THREE.Mesh(auraGeo, auraMat);
    coreGroup.add(auraCore);

    // Outer lattice shell (geodesic icosahedron)
    const shellGeo = new THREE.IcosahedronGeometry(1.28, 2);
    const shellMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.95,
      roughness: 0.1,
      wireframe: false,
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    coreGroup.add(shellMesh);

    // Outer wireframe overlay
    const wireGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // 4. Metallic Orbital Rings
    interface RingItem {
      mesh: THREE.Mesh;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
    }
    const rings: RingItem[] = [];

    const ringConfigs = [
      { radius: 2.1, tube: 0.05, arc: Math.PI * 2, tiltX: 0.6, tiltY: 0.2, color: 0x1e293b, speedX: 0.003, speedY: 0.006 },
      { radius: 2.7, tube: 0.04, arc: Math.PI * 2, tiltX: -0.8, tiltY: 0.7, color: 0x334155, speedX: -0.004, speedY: 0.004 },
      { radius: 3.3, tube: 0.035, arc: Math.PI * 2, tiltX: 1.2, tiltY: -0.5, color: 0x475569, speedX: 0.002, speedY: -0.005 },
      { radius: 3.8, tube: 0.02, arc: Math.PI * 2, tiltX: -0.4, tiltY: 1.1, color: 0x00f0ff, speedX: -0.003, speedY: -0.003 },
    ];

    ringConfigs.forEach((cfg, idx) => {
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 24, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        metalness: 0.95,
        roughness: 0.15,
        emissive: idx === 3 ? 0x00f0ff : 0x0070f3,
        emissiveIntensity: idx === 3 ? 0.6 : 0.15,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = cfg.tiltX;
      ringMesh.rotation.y = cfg.tiltY;
      scene.add(ringMesh);

      // Add a couple small glowing satellite nodes on the ring
      const nodeGeo = new THREE.SphereGeometry(cfg.tube * 2.2, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        emissive: 0x00f0ff,
        emissiveIntensity: 1.2,
        metalness: 0.9,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(cfg.radius, 0, 0);
      ringMesh.add(nodeMesh);

      rings.push({
        mesh: ringMesh,
        rotSpeedX: cfg.speedX,
        rotSpeedY: cfg.speedY,
        rotSpeedZ: 0.002,
      });
    });

    // 5. Floating Obsidian & Glossy Spheroids (as seen in the reference image!)
    const floatingOrbs: { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number; phase: number }[] = [];
    const orbPositions = [
      new THREE.Vector3(-2.8, 1.8, 0.5),
      new THREE.Vector3(2.9, 1.5, -0.5),
      new THREE.Vector3(-1.4, -2.4, 0.8),
      new THREE.Vector3(2.4, -1.9, 0.2),
      new THREE.Vector3(0.3, 2.7, -1.2),
      new THREE.Vector3(3.5, 0.2, 0.8),
    ];

    orbPositions.forEach((pos, idx) => {
      const radius = 0.15 + (idx % 3) * 0.08;
      const orbGeo = new THREE.SphereGeometry(radius, 24, 24);
      const orbMat = new THREE.MeshStandardMaterial({
        color: 0x0b1329,
        metalness: 0.98,
        roughness: 0.08,
      });
      const orbMesh = new THREE.Mesh(orbGeo, orbMat);
      orbMesh.position.copy(pos);
      scene.add(orbMesh);
      floatingOrbs.push({
        mesh: orbMesh,
        basePos: pos.clone(),
        speed: 1.5 + idx * 0.4,
        phase: idx * 1.2,
      });
    });

    // 6. Particle Energy Field (Subtle electric blue star dust)
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const blueColor = new THREE.Color(0x0070f3);

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a spherical cloud around the core
      const r = 1.5 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = cyanColor.clone().lerp(blueColor, Math.random());
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Mouse Parallax on Desktop
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);
    setIsLoaded(true);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      const speedMultiplier = (prefersReducedMotion ? 0.2 : 1) * (fastSpeedRef.current ? 2.5 : 1);

      // Smooth mouse parallax lerp
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;

      // Core rotation & gentle breathing float
      coreGroup.rotation.y += 0.005 * speedMultiplier;
      coreGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      // Pulsing energy light
      const pulse = 3.5 + Math.sin(elapsedTime * 3) * 0.8;
      corePointLight.intensity = pulse;

      // Animate rings
      rings.forEach((r, idx) => {
        r.mesh.rotation.x += r.rotSpeedX * speedMultiplier;
        r.mesh.rotation.y += r.rotSpeedY * speedMultiplier;
        r.mesh.rotation.z += r.rotSpeedZ * speedMultiplier;
      });

      // Animate particles rotation
      particles.rotation.y -= 0.0015 * speedMultiplier;
      particles.rotation.x += 0.0008 * speedMultiplier;

      // Animate floating obsidian spheroids
      floatingOrbs.forEach((orb) => {
        const t = elapsedTime * orb.speed + orb.phase;
        orb.mesh.position.y = orb.basePos.y + Math.sin(t) * 0.18;
        orb.mesh.position.x = orb.basePos.x + Math.cos(t * 0.8) * 0.08;
      });

      // Handle wireframe mode toggle dynamically
      shellMat.wireframe = wireframeRef.current;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose Three objects
      innerGeo.dispose();
      innerMat.dispose();
      auraGeo.dispose();
      auraMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      rings.forEach((r) => {
        r.mesh.geometry.dispose();
        if (Array.isArray(r.mesh.material)) {
          r.mesh.material.forEach((m) => m.dispose());
        } else {
          r.mesh.material.dispose();
        }
      });

      floatingOrbs.forEach((orb) => {
        orb.mesh.geometry.dispose();
        if (Array.isArray(orb.mesh.material)) {
          orb.mesh.material.forEach((m) => m.dispose());
        } else {
          orb.mesh.material.dispose();
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[420px] md:min-h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        aria-label="Interactive 3D AI Core with metallic orbital rings"
      />

      {/* Subtle Background Glow behind 3D core */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-blue-600/20 blur-2xl" />
      </div>

      {/* Interactive Controls Pill for Core Inspection */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 pointer-events-auto">
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-tech text-[11px] tracking-wider text-cyan-200">AI CORE ACTIVE</span>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => setIsRotatingFast(!isRotatingFast)}
            className={`transition-colors hover:text-white px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider ${
              isRotatingFast ? 'bg-cyan-500/30 text-cyan-300' : 'text-slate-400'
            }`}
            title="Toggle Core Hyper-Drive Speed"
          >
            {isRotatingFast ? 'Hyper 2x' : '1x Orbit'}
          </button>
          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`transition-colors hover:text-white px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider ${
              wireframeMode ? 'bg-blue-500/30 text-blue-300' : 'text-slate-400'
            }`}
            title="Toggle Wireframe Mesh Architecture"
          >
            {wireframeMode ? 'Wire' : 'Solid'}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-800 text-[10px] font-tech text-slate-400">
          <span>PARALLAX: MOUSE SYNCD</span>
        </div>
      </div>
    </div>
  );
};
