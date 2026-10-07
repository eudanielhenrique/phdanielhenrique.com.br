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

    const size = 460;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Geodesic icosahedron vertices
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
        if (dist < 1.15) {
          edges.push([i, j]);
        }
      }
    }

    // Extra interior geodesic arcs
    const extraEdges: [number, number][] = [
      [0, 2], [1, 3], [4, 6], [5, 7], [8, 10], [9, 11]
    ];
    edges.push(...extraEdges);

    let targetSpeedX = 0.003;
    let targetSpeedY = 0.005;
    let currentSpeedX = 0.003;
    let currentSpeedY = 0.005;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetSpeedY = x * 0.015;
      targetSpeedX = -y * 0.015;
    };

    const handlePointerLeave = () => {
      targetSpeedX = 0.003;
      targetSpeedY = 0.005;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size * 0.38;

      currentSpeedX += (targetSpeedX - currentSpeedX) * 0.05;
      currentSpeedY += (targetSpeedY - currentSpeedY) * 0.05;

      angleX += currentSpeedX;
      angleY += currentSpeedY;

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

      // Draw edges with Bora Automatizar blue
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];

        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.12, (avgZ + 1) * 0.38);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 96, 240, ${alpha})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      });

      // Draw vertices points with subtle glow
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 96, 240, ${Math.max(0.3, (p.z + 1) * 0.6)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center select-none group">
      <div className="absolute inset-0 bg-[#0060F0]/12 blur-[85px] rounded-full pointer-events-none group-hover:bg-[#0060F0]/20 transition-all duration-700" />
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
        className="relative z-10 block cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
