"use client";

import { useEffect, useRef } from "react";

export function WireframeSphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0;
    let angleY = 0;

    // Generate icosahedron / geodesic sphere vertices and edges
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseVertices = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len];
    });

    // Edges between vertices
    const edges: [number, number][] = [];
    for (let i = 0; i < baseVertices.length; i++) {
      for (let j = i + 1; j < baseVertices.length; j++) {
        const [x1, y1, z1] = baseVertices[i];
        const [x2, y2, z2] = baseVertices[j];
        const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
        // Distance between connected vertices in an icosahedron is approx 1.05
        if (dist < 1.15) {
          edges.push([i, j]);
        }
      }
    }

    // Add extra interior rings for rich geodesic wireframe look
    const extraEdges: [number, number][] = [
      [0, 2], [1, 3], [4, 6], [5, 7], [8, 10], [9, 11]
    ];
    edges.push(...extraEdges);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width * 0.38;

      angleX += 0.003;
      angleY += 0.005;

      // Rotate vertices
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected = baseVertices.map(([x, y, z]) => {
        // Rotate Y
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        // Rotate X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Perspective projection
        const cameraDistance = 3.2;
        const scale = cameraDistance / (cameraDistance - z2);
        return {
          x: centerX + x1 * radius * scale,
          y: centerY + y2 * radius * scale,
          z: z2,
        };
      });

      // Draw edges with subtle green glow
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];

        // Depth alpha: front lines are brighter, back lines are fainter
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.12, (avgZ + 1) * 0.32);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 245, 118, ${alpha})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      });

      // Draw subtle vertices nodes
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 118, ${Math.max(0.2, (p.z + 1) * 0.45)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
      <div className="absolute inset-0 bg-[#00f576]/10 blur-[80px] rounded-full pointer-events-none" />
      <canvas
        ref={canvasRef}
        width={460}
        height={460}
        className="w-full h-full relative z-10"
      />
    </div>
  );
}
