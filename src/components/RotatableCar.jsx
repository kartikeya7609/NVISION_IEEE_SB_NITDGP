import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function Car({ isDragging }) {
  const carRef = useRef();
  const { scene } = useGLTF("/untitled (2).glb");

  // Apply beach sand color to blue plates and black to wheels
  useEffect(() => {
    if (scene) {
      const beachSandColor = new THREE.Color("#E6D5B8"); // Warm beach sand color
      const lightSandColor = new THREE.Color("#F4E4BC"); // Light sand highlight
      const blackColor = new THREE.Color("#000000"); // Black for wheels
      
      // Helper function to check if a color is blue (more aggressive detection)
      const isBlueColor = (color) => {
        const r = color.r;
        const g = color.g;
        const b = color.b;
        // Check if blue component is dominant (blue > red and blue > green) or if it's a blue hue
        // Also check for cyan/light blue colors
        const isBlue = (b > r && b > g && b > 0.2) || 
                       (b > 0.4 && (b - r) > 0.1 && (b - g) > 0.1);
        return isBlue;
      };
      
      // Helper function to check if mesh is a wheel
      const isWheel = (mesh) => {
        const name = mesh.name?.toLowerCase() || "";
        const parentName = mesh.parent?.name?.toLowerCase() || "";
        // Check if name contains wheel-related keywords
        return (
          name.includes("wheel") ||
          name.includes("tire") ||
          name.includes("rim") ||
          name.includes("tyre") ||
          parentName.includes("wheel") ||
          parentName.includes("tire")
        );
      };
      
      console.log("=== GLB File Structure Analysis ===");
      let meshCount = 0;
      
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          meshCount++;
          const meshName = child.name || `Mesh_${meshCount}`;
          const isWheelMesh = isWheel(child);
          
          console.log(`Mesh ${meshCount}: "${meshName}"`, {
            isWheel: isWheelMesh,
            position: child.position,
            materialType: Array.isArray(child.material) 
              ? `Array[${child.material.length}]` 
              : child.material.type
          });
          
          const processMaterial = (mat) => {
            if (mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial || mat.isMeshLambertMaterial) {
              const originalColor = mat.color.clone();
              
              // Log original color for blue detection
              if (isBlueColor(originalColor)) {
                console.log(`  → Found blue material in "${meshName}": RGB(${originalColor.r.toFixed(2)}, ${originalColor.g.toFixed(2)}, ${originalColor.b.toFixed(2)})`);
              }
              
              // Apply black color to wheels (priority - wheels first)
              if (isWheelMesh) {
                mat.color = blackColor;
                mat.metalness = 0.1;
                mat.roughness = 0.9;
                console.log(`  → Applied BLACK to wheel: "${meshName}"`);
              }
              // Apply beach sand color to ALL blue materials (plates and any blue parts)
              else if (isBlueColor(originalColor)) {
                // Use beach sand color with slight variation
                const sandColor = new THREE.Color().lerpColors(beachSandColor, lightSandColor, Math.random() * 0.3);
                mat.color = sandColor;
                mat.metalness = 0.2;
                mat.roughness = 0.6;
                mat.envMapIntensity = 1.2;
                console.log(`  → Applied BEACH SAND to blue part: "${meshName}"`);
              }
              // Keep other materials but enhance them
              else {
                mat.metalness = mat.metalness || 0.2;
                mat.roughness = mat.roughness || 0.6;
                mat.envMapIntensity = mat.envMapIntensity || 1.2;
              }
            }
          };
          
          if (Array.isArray(child.material)) {
            child.material.forEach(processMaterial);
          } else {
            processMaterial(child.material);
          }
        }
      });
      
      console.log(`Total meshes processed: ${meshCount}`);
      console.log("=== End GLB Analysis ===");
    }
  }, [scene]);

  // Auto-rotate when not being dragged
  useFrame((state, delta) => {
    if (!carRef.current) return;
    if (!isDragging) {
      carRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <primitive
      ref={carRef}
      object={scene}
      scale={0.3}
      position={[0, -0.2, 0]}
      castShadow
      receiveShadow
    />
  );
}

export default function RotatableCar({ zoom = 6 }) {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <>
      {/* Enhanced environment for educational prototype display */}
      <Environment preset="sunset" background={false} />
      
      <PerspectiveCamera makeDefault position={[0, 0.5, zoom]} fov={60} />
      
      {/* Optimized lighting for educational car model prototype */}
      <ambientLight intensity={1.0} color="#F4E4BC" /> {/* Warm sand ambient light */}
      <directionalLight 
        position={[6, 8, 5]} 
        intensity={2.5} 
        castShadow 
        color="#FFF8E7" // Warm white light
      />
      <directionalLight 
        position={[-6, 4, -4]} 
        intensity={1.5} 
        color="#E6D5B8" // Soft sand fill light
      />
      <pointLight position={[0, 6, 0]} intensity={1.2} color="#FFF8E7" />
      <spotLight
        position={[8, 10, 8]}
        angle={0.4}
        penumbra={1}
        intensity={1.0}
        color="#FFF8E7"
      />
      <spotLight
        position={[-8, 6, -8]}
        angle={0.5}
        penumbra={1}
        intensity={0.8}
        color="#E6D5B8"
      />

      {/* Ground plane removed for transparent background */}

      {/* Car auto-rotates via OrbitControls; user can rotate with mouse, zoom via buttons */}
      <Car isDragging={isDragging} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        autoRotate
        autoRotateSpeed={0.6}
        minDistance={2}
        maxDistance={10}
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />
    </>
  );
}

useGLTF.preload("/untitled (2).glb");
