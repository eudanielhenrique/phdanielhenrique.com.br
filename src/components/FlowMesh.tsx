"use client";

import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isHub?: boolean;
}

export function FlowMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = 480);
    const height = (canvas.height = 480);

    // Automation & Integration Network Nodes
    const hubLabels = ["n8n", "ERP", "IA", "WhatsApp", "API", "DB"];
    const nodes: NodePoint[] = [];

    // Create 6 main functional hubs
    hubLabels.forEach((label, i) => {
      const angle = (i / hubLabels.length) * Math.PI * 2;
      const dist = 130 + (i % 2) * 35;
      nodes.push({
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 4.5,
        label,
        isHub: true,
      });
    });

    // Create peripheral data packets / particles
    for (let i = 0; i < 16; i++) {
      nodes.push({
        x: width / 2 + (Math.random() - 0.5) * 280,
        y: height / 2 + (Math.random() - 0.5) * 280,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: 2,
        isHub: false,
      });
    }

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulse += 0.02;

      // Update positions with soft bounds
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        const padding = 40;
        if (node.x < padding || node.x > width - padding) node.vx *= -1;
        if (node.y < padding || node.y > height - padding) node.vy *= -1;
      });

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = nodes[i].isHub || nodes[j].isHub ? 165 : 105;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.4;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 96, 240, ${alpha})`;
            ctx.lineWidth = nodes[i].isHub && nodes[j].isHub ? 1.4 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes and Labels
      nodes.forEach((node) => {
        // Node Glow for Hubs
        if (node.isHub) {
          const glow = Math.sin(pulse + node.x) * 3 + 8;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glow, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 96, 240, 0.15)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = "#0060F0";
          ctx.fill();

          // Label
          if (node.label) {
            ctx.font = "10px monospace";
            ctx.fillStyle = "rgba(245, 245, 247, 0.85)";
            ctx.textAlign = "center";
            ctx.fillText(node.label, node.x, node.y - 9);
          }
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 96, 240, 0.45)";
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0060F0]/12 blur-[90px] rounded-full pointer-events-none" />
      <canvas
        ref={canvasRef}
        width={480}
        height={480}
        className="w-full h-full relative z-10"
      />
    </div>
  );
}
