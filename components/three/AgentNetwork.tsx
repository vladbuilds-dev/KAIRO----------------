"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* Build a cloud of agent nodes and the edges between nearby ones. */
function buildGraph(count: number, radius: number) {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    // Fibonacci-ish sphere with jitter for an organic, non-uniform cloud
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = radius * (0.6 + Math.random() * 0.4);
    nodes.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ),
    );
  }

  const edges: [number, number][] = [];
  const maxDist = radius * 0.62;
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) edges.push([i, j]);
    }
  }
  return { nodes, edges };
}

function Graph({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const { nodes, edges } = useMemo(() => buildGraph(46, 3.4), []);

  // Node points
  const pointsGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setFromPoints(nodes);
    return g;
  }, [nodes]);

  // Edge line segments
  const linesGeo = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    edges.forEach(([a, b]) => {
      pts.push(nodes[a], nodes[b]);
    });
    const g = new THREE.BufferGeometry();
    g.setFromPoints(pts);
    return g;
  }, [nodes, edges]);

  // A subset of edges carry "capital" — animated travelling dots
  const flows = useMemo(() => {
    const picks = edges
      .filter((_, i) => i % 5 === 0)
      .slice(0, 14)
      .map(([a, b]) => ({
        from: nodes[a],
        to: nodes[b],
        offset: Math.random(),
        speed: 0.18 + Math.random() * 0.22,
      }));
    return picks;
  }, [nodes, edges]);

  const flowRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    if (group.current) {
      // Slow ambient rotation
      group.current.rotation.y += delta * (reduced ? 0 : 0.05);
      // Gentle cursor parallax
      const tx = pointer.y * 0.18;
      const ty = pointer.x * 0.3;
      group.current.rotation.x += (tx - group.current.rotation.x) * 0.04;
      group.current.rotation.z += (-ty * 0.15 - group.current.rotation.z) * 0.04;
    }

    if (reduced) return;
    const t = state.clock.elapsedTime;
    flows.forEach((f, i) => {
      const mesh = flowRefs.current[i];
      if (!mesh) return;
      const p = (f.offset + t * f.speed) % 1;
      mesh.position.lerpVectors(f.from, f.to, p);
      const mat = mesh.material as THREE.MeshBasicMaterial;
      // Fade in/out at the ends of each edge
      mat.opacity = Math.sin(p * Math.PI);
    });
  });

  return (
    <group ref={group}>
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial
          color="#6366F1"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </lineSegments>

      <points geometry={pointsGeo}>
        <pointsMaterial
          color="#22D3EE"
          size={0.12}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      {flows.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            flowRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.055, 8, 8]} />
          <meshBasicMaterial color="#A5F3FC" transparent depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

interface AgentNetworkProps {
  reduced?: boolean;
}

/** The hero's interactive WebGL scene. Mounted client-side, lazily. */
export default function AgentNetwork({ reduced = false }: AgentNetworkProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Graph reduced={reduced} />
    </Canvas>
  );
}
