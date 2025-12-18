import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

export default function RotatableCar() {
  const carRef = useRef()
  const { camera, gl } = useThree()

  const { scene } = useGLTF('/car.glb')

  const zoomTarget = useRef(7)
  const rotationTarget = useRef(0)

  /* ---------------- INPUT CONTROLS ---------------- */
  useEffect(() => {
    let dragging = false
    let lastX = 0
    let lastDist = 0

    const getDist = (t) =>
      Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY)

    const down = (e) => {
      dragging = true
      lastX = e.clientX ?? e.touches?.[0]?.clientX
    }

    const move = (e) => {
      if (!dragging) return

      // Rotate
      if (e.touches?.length === 1 || e.clientX) {
        const x = e.clientX ?? e.touches[0].clientX
        rotationTarget.current += (x - lastX) * 0.005
        lastX = x
      }

      // Pinch zoom
      if (e.touches?.length === 2) {
        const d = getDist(e.touches)
        zoomTarget.current -= (d - lastDist) * 0.01
        zoomTarget.current = THREE.MathUtils.clamp(zoomTarget.current, 5, 11)
        lastDist = d
      }
    }

    const up = () => (dragging = false)

    const wheel = (e) => {
      zoomTarget.current += e.deltaY * 0.002
      zoomTarget.current = THREE.MathUtils.clamp(zoomTarget.current, 5, 11)
    }

    const dom = gl.domElement
    dom.addEventListener('mousedown', down)
    dom.addEventListener('mousemove', move)
    dom.addEventListener('mouseup', up)
    dom.addEventListener('wheel', wheel, { passive: true })

    dom.addEventListener('touchstart', down, { passive: true })
    dom.addEventListener('touchmove', move, { passive: true })
    dom.addEventListener('touchend', up)

    return () => {
      dom.removeEventListener('mousedown', down)
      dom.removeEventListener('mousemove', move)
      dom.removeEventListener('mouseup', up)
      dom.removeEventListener('wheel', wheel)

      dom.removeEventListener('touchstart', down)
      dom.removeEventListener('touchmove', move)
      dom.removeEventListener('touchend', up)
    }
  }, [gl])

  /* ---------------- SMOOTH ANIMATION ---------------- */
  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y +=
        (rotationTarget.current - carRef.current.rotation.y) * 0.08
    }

    camera.position.set(0, 1.4, camera.position.z)
    camera.position.z +=
      (zoomTarget.current - camera.position.z) * 0.08
  })

  return (
    <>
      {/* HDR ENVIRONMENT (MAKES CAR LOOK REAL) */}
      <Environment files="/studio.hdr" background={false} />

      {/* KEY LIGHTING */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 8, 5]} intensity={2.2} />
      <directionalLight position={[-6, 3, -4]} intensity={1.2} />

      {/* CAR */}
      <primitive
        ref={carRef}
        object={scene}
        scale={1.2}
        position={[0, -0.6, 0]}
      />
    </>
  )
}

useGLTF.preload('/car.glb')
