import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useProxy } from "valtio"

const state1 = proxy({
  current: null,
  items: {
    'Material.009': 'red',
    'Material.002': 'blue',
    'Material.005': 'gray',
    'Material.008': 'gray',
  }
});

function Rest() {
  const group = useRef()
  const snap = useProxy(state1);
  const { nodes, materials } = useGLTF('/room1Comp.glb');


  const [hovered, set] = useState(null)
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
  }, [hovered])


  return (
    <group ref={group} dispose={null}
    onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
    onPointerOut={(e) => e.intersections.length === 0 && set(null)}
    onPointerMissed={() => (state1.current = null)}
    onPointerDown={(e) => (e.stopPropagation(), (state1.current = e.object.material.name))}>
      <group position={[0.53, 10.46, 2.36]}>
        <mesh material={materials.hidden_material} geometry={nodes.CTRL_Hole.geometry} position={[0, 0.98, 0]} />
        <group position={[0, 0.94, -0.02]}>
          <mesh material={materials.PVC} geometry={nodes.Window_1.geometry}/>
          <mesh material={materials.Plastic} geometry={nodes.Window_2.geometry} />
          <mesh material={materials.Glass} geometry={nodes.Window_3.geometry} />
          <mesh material={materials.Marble} geometry={nodes.Window_4.geometry} />
        </group>
      </group>
      <group position={[-2.37, 1.06, -2.62]} scale={[1.37, 1.37, 1.37]}>
        <mesh material={materials['Material.002']} geometry={nodes.Cube001_1.geometry}  material-color={snap.items['Material.002']}/>
        <mesh material={materials['Material.011']} geometry={nodes.Cube001_2.geometry} />
      </group>
      <mesh
        material={materials['Material.003']}
        geometry={nodes.Sphere.geometry}
        position={[-1.61, 2.61, -1.58]}
        scale={[0.3, 0.15, 0.3]}>
        <mesh
          material={materials['Material.004']}
          geometry={nodes.Cylinder.geometry}
          position={[0, 0.67, 0]}
          scale={[1.26, 0.13, 1.26]}
        />
        <mesh
          material={materials['Material.004']}
          geometry={nodes.Sphere001.geometry}
          position={[0, -0.41, 0]}
          scale={[0.1, 0.07, 0.1]}
        />
      </mesh>
      <mesh
        material={materials.rug}
        geometry={nodes.rug.geometry}
        position={[-1.74, 0, -0.64]}
        scale={[2.95, 2.95, 2.95]}
        material-color={snap.items['rug']}
      />
      <mesh
        material={materials['Material.001']}
        geometry={nodes.Plane.geometry}
        position={[-2, -0.19, -1.64]}
        scale={[3.38, 3.38, 3.05]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Plane001.geometry}
        position={[-1.15, 1.16, 1.23]}
        rotation={[-Math.PI, 0, 0]}
        material-color={snap.items['Material.009']}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Plane002.geometry}
        position={[-3.94, 1.16, 1.24]}
        rotation={[-Math.PI, 0, 0]}
        material-color={snap.items['Material.009']}
      />
      <mesh
        material={materials['Material.005']}
        material-color={snap.items['Material.005']}
        geometry={nodes.Cylinder001.geometry}
        position={[-3.98, 1.2, -3.23]}
        scale={[0.28, 0.12, 0.28]}>
        <mesh
          material={materials['Material.010']}
          geometry={nodes.Cylinder002.geometry}
          position={[0, -1.69, 0]}
          scale={[0.06, 0.32, 0.06]}
        />
        <mesh
          material={materials['Material.010']}
          geometry={nodes.Cylinder003.geometry}
          position={[0, -6.13, 0.78]}
          rotation={[-0.44, 0, 0]}
          scale={[0.07, 4.46, 0.08]}
        />
        <mesh
          material={materials['Material.010']}
          geometry={nodes.Cylinder004.geometry}
          position={[0.62, -6.13, -0.43]}
          rotation={[-2.22, 0.97, 1.88]}
          scale={[0.07, 4.46, 0.08]}
        />
        <mesh
          material={materials['Material.010']}
          geometry={nodes.Cylinder005.geometry}
          position={[-0.72, -6.13, -0.37]}
          rotation={[-2.22, -0.97, -1.88]}
          scale={[0.07, 4.46, 0.08]}
        />
      </mesh>
      <mesh material={materials['Material.006']} geometry={nodes.Cube001.geometry} position={[-4.68, 0.43, -0.63]} />
      <mesh material={materials['Material.006']} geometry={nodes.Cube003.geometry} position={[-2.81, 0.38, -0.63]} />
      <mesh material={materials['Material.006']} geometry={nodes.Cube004.geometry} position={[-4.08, 0.55, -0.63]} />
      <mesh
        material={materials['Material.007']}
        geometry={nodes.Cube005.geometry}
        position={[-5.04, 1.03, -0.14]}
        rotation={[0, 0, -1.17]}
      />
      <mesh
        material={materials['Material.007']}
        geometry={nodes.Cube006.geometry}
        position={[-5.04, 1.03, -1.04]}
        rotation={[0, 0, -1.1]}
      />
      <mesh
        material={materials['Material.010']}
        geometry={nodes.Cylinder006.geometry}
        position={[-2.45, 2.53, 1.33]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.03, 1.84, 0.03]}
      />
      <group position={[0.16, 0.34, 0.55]} rotation={[0, 0.45, 0]} scale={[0.44, 0.05, 0.44]}>
        <mesh material={materials['Material.015']} geometry={nodes.Cube008_1.geometry} />
        <mesh material={materials['Material.006']} geometry={nodes.Cube008_2.geometry} />
      </group>
      <mesh
        material={materials['Material.006']}
        geometry={nodes.Cube007.geometry}
        position={[0.15, 0.37, 0.53]}
        rotation={[0, 0.45, 0]}
        scale={[0.83, 0.83, 0.83]}
      />
      <mesh
        material={materials['Material.006']}
        geometry={nodes.Cube009.geometry}
        position={[0.32, 0.71, 0.9]}
        rotation={[0, 0.45, 0]}
        scale={[0.83, 1.14, 1.16]}
      />
      <mesh
        material={materials['Material.001']}
        geometry={nodes.Plane003.geometry}
        position={[-2, -0.19, -7.7]}
        scale={[3.38, 3.38, 3.05]}
      />
      <mesh
        material={materials['Material.008']}
        geometry={nodes.Plane004.geometry}
        position={[-4, 0.67, -0.63]}
        rotation={[0, 0, -0.32]}
        material-color={snap.items['Material.008']}
      />
      <mesh material={materials['Material.006']} geometry={nodes.Cube002.geometry} position={[-4.79, 0.43, -1.66]} />
      <mesh material={materials['Material.006']} geometry={nodes.Cube010.geometry} position={[-4.79, 0.43, 0.41]} />
      <group position={[-5.34, 2.05, -0.58]} scale={[0.03, 0.31, 0.46]}>
        <mesh material={materials['Material.014']} geometry={nodes.Cube018.geometry} />
        <mesh material={materials['Material.012']} geometry={nodes.Cube018_1.geometry} />
        <mesh material={materials['Material.013']} geometry={nodes.Cube018_2.geometry} />
      </group>
      <mesh
        material={materials['Material.006']}
        geometry={nodes.Cube012.geometry}
        position={[-4.69, 0.92, -0.63]}
        rotation={[0, 0, -0.61]}
      />
      <mesh
        material={materials['Material.024']}
        geometry={nodes.Plane007.geometry}
        position={[4.11, 29.99, 0.71]}
        rotation={[Math.PI, -1.49, Math.PI]}
        scale={[0.14, 0.75, 0.86]}
      />
      <mesh
        material={materials['Material.018']}
        geometry={nodes.Cube013.geometry}
        position={[-2.82, 0.1, -1.23]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.17, 0.22, 28.43]}
      />
      <group position={[-4.61, 0.65, 1.35]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[1.53, 1.53, 1.53]}>
        <mesh material={materials.Wall_socket_white} geometry={nodes.Wall_outlet007_Plane339_1.geometry} />
        <mesh material={materials.Wall_socket_black} geometry={nodes.Wall_outlet007_Plane339_2.geometry} />
      </group>
      <mesh
        material={materials.Wall_socket_white}
        geometry={nodes.Light_switch003_Plane344.geometry}
        position={[-4.76, 1.44, -2.35]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.53, 1.53, 1.53]}
      />
      <mesh
        material={materials['Material.015']}
        geometry={nodes.Cube014.geometry}
        position={[-2.93, 0.04, 0.27]}
        scale={[0.83, 0.03, 0.83]}
      />
      <mesh
        material={materials['Material.015']}
        geometry={nodes.Cube015.geometry}
        position={[-2.93, 0.04, -1.55]}
        scale={[0.83, 0.03, 0.83]}
      />
      <mesh
        material={materials['Material.015']}
        geometry={nodes.Cube016.geometry}
        position={[-5.18, 0.04, 0.27]}
        scale={[0.83, 0.03, 0.83]}
      />
      <mesh
        material={materials['Material.015']}
        geometry={nodes.Cube017.geometry}
        position={[-5.18, 0.04, -1.55]}
        scale={[0.83, 0.03, 0.83]}
      />
    </group>
  )
}

function Picker() {
  const snap = useProxy(state1)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state1.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Canvas concurrent pixelRatio={[1, 2]} camera={{ position: [0, 5, 0.75] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          
          <Rest />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true}/>        
      </Canvas>
      <Picker />
    </>
  )
}
