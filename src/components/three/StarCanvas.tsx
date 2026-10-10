"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";

interface StarCanvasProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export function StarCanvas({ className = "", size = 320, interactive = true }: StarCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check WebGL availability
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!gl || prefersReducedMotion) {
      setWebGlSupported(false);
      return;
    }

    setWebGlSupported(true);

    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch {
      setWebGlSupported(false);
      return;
    }

    // Star group
    const starGroup = new THREE.Group();

    // Custom 5-pointed star shape with extruded bevel to simulate the ACEUP chrome star
    const starShape = new THREE.Shape();
    const outerRadius = 1.4;
    const innerRadius = 0.65;
    const points = 5;

    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) {
        starShape.moveTo(x, y);
      } else {
        starShape.lineTo(x, y);
      }
    }
    starShape.closePath();

    const extrudeSettings = {
      depth: 0.35,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.12,
      bevelThickness: 0.15,
    };

    const geometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
    geometry.center();

    // Chrome Metallic Material
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9dde3,
      metalness: 0.95,
      roughness: 0.14,
      envMapIntensity: 1.5,
    });

    const starMesh = new THREE.Mesh(geometry, chromeMaterial);
    starGroup.add(starMesh);

    // Shooting tail flutes (3 tapered trailing facets)
    const tailShape = new THREE.Shape();
    tailShape.moveTo(-0.4, 0);
    tailShape.lineTo(-1.8, -2.8);
    tailShape.lineTo(0.1, -0.6);
    tailShape.closePath();

    const tailGeo = new THREE.ExtrudeGeometry(tailShape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    });
    const tailMesh = new THREE.Mesh(tailGeo, chromeMaterial);
    tailMesh.position.set(-0.3, -0.2, -0.1);
    tailMesh.rotation.z = -0.15;
    starGroup.add(tailMesh);

    scene.add(starGroup);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Electric Blue rim lights for signature ACEUP aesthetic
    const bluePointLight = new THREE.PointLight(0x005cff, 4.0, 12);
    bluePointLight.position.set(-3, -2, 2);
    scene.add(bluePointLight);

    const cyanRimLight = new THREE.PointLight(0x00a8ff, 3.5, 10);
    cyanRimLight.position.set(2, -3, 3);
    scene.add(cyanRimLight);

    // Pointer Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.5;
      mouseY = y * 1.5;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle floating
      const idleTiltY = Math.sin(elapsedTime * 0.8) * 0.15;
      const idleTiltX = Math.cos(elapsedTime * 0.6) * 0.1;

      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;

      starGroup.rotation.y = targetRotationY + idleTiltY;
      starGroup.rotation.x = -targetRotationX + idleTiltX;
      starGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

      // Animate electric blue lighting accent sweep
      bluePointLight.position.x = Math.sin(elapsedTime) * 3;
      bluePointLight.position.y = Math.cos(elapsedTime * 0.8) * 2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || size;
      const newHeight = container.clientHeight || size;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      tailGeo.dispose();
      chromeMaterial.dispose();
      renderer.dispose();
    };
  }, [size, interactive]);

  // Graceful fallback for non-WebGL devices or while initializing
  if (webGlSupported === false) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="relative w-full h-full min-h-[220px] flex items-center justify-center">
          <Image
            src="/assets/brand/star.png"
            alt="ACEUP Star Symbol"
            width={size}
            height={size}
            className="object-contain drop-shadow-[0_0_35px_rgba(0,92,255,0.45)] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{ minHeight: `${size * 0.8}px` }}
      aria-label="Interactive 3D ACEUP Star"
    />
  );
}
