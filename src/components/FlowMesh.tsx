"use client";

import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isHub?: boolean;
}

interface DataPacket {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export function FlowMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const size = 480;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Mouse coordinates relative to canvas
    let mouse = { x: -9999, y: -9999, isHovering: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * size;
      mouse.y = ((e.clientY - rect.top) / rect.height) * size;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Automation & Integration Network Nodes
    const hubLabels = ["n8n", "ERP", "IA", "WhatsApp", "API", "DB"];
    const nodes: NodePoint[] = [];

    // Create 6 main functional hubs
    hubLabels.forEach((label, i) => {
      const angle = (i / hubLabels.length) * Math.PI * 2;
      const dist = 135 + (i % 2) * 35;
      const x = size / 2 + Math.cos(angle) * dist;
      const y = size / 2 + Math.sin(angle) * dist;
      nodes.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 4.5,
        label,
        isHub: true,
      });
    });

    // Peripheral data nodes
    for (let i = 0; i < 14; i++) {
      const x = size / 2 + (Math.random() - 0.5) * 290;
      const y = size / 2 + (Math.random() - 0.5) * 290;
      nodes.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2,
        isHub: false,
      });
    }

    // Active data packets running on connection routes
    const packets: DataPacket[] = [];
    const spawnPacket = () => {
      const hubIndices = [0, 1, 2, 3, 4, 5];
      const from = hubIndices[Math.floor(Math.random() * hubIndices.length)];
      let to = hubIndices[Math.floor(Math.random() * hubIndices.length)];
      while (to === from) {
        to = hubIndices[Math.floor(Math.random() * hubIndices.length)];
      }

      packets.push({
        fromIndex: from,
        toIndex: to,
        progress: 0,
        speed: 0.012 + Math.random() * 0.014,
        color: Math.random() > 0.4 ? "#60A5FA" : "#0060F0",
      });
    };

    for (let k = 0; k < 6; k++) {
      spawnPacket();
      packets[k].progress = Math.random();
    }

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      pulse += 0.025;

      // Update positions with soft bounds & mouse physics
      nodes.forEach((node) => {
        // Natural gentle drift
        node.x += node.vx;
        node.y += node.vy;

        // Mouse attraction/displacement
        if (mouse.isHovering) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130 && dist > 1) {
            const force = (1 - dist / 130) * 1.8;
            node.x -= (dx / dist) * force;
            node.y -= (dy / dist) * force;
          }
        }

        // Elastic return to neighborhood
        const homeDx = node.originX - node.x;
        const homeDy = node.originY - node.y;
        node.x += homeDx * 0.02;
        node.y += homeDy * 0.02;

        const pad = 35;
        if (node.x < pad || node.x > size - pad) node.vx *= -1;
        if (node.y < pad || node.y > size - pad) node.vy *= -1;
      });

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = nodes[i].isHub || nodes[j].isHub ? 175 : 100;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 96, 240, ${alpha})`;
            ctx.lineWidth = nodes[i].isHub && nodes[j].isHub ? 1.4 : 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw and update active data packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          spawnPacket();
          continue;
        }

        const fromNode = nodes[pkt.fromIndex];
        const toNode = nodes[pkt.toIndex];
        const currX = fromNode.x + (toNode.x - fromNode.x) * pkt.progress;
        const currY = fromNode.y + (toNode.y - fromNode.y) * pkt.progress;

        // Packet glow
        ctx.beginPath();
        ctx.arc(currX, currY, 3, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Nodes and Labels
      nodes.forEach((node) => {
        if (node.isHub) {
          const glow = Math.sin(pulse + node.originX) * 3 + 9;

          // Outer halo
          ctx.beginPath();
          ctx.arc(node.x, node.y, glow, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 96, 240, 0.16)";
          ctx.fill();

          // Core node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = "#0060F0";
          ctx.fill();

          // Hub label
          if (node.label) {
            ctx.font = "500 11px var(--font-sora), system-ui, sans-serif";
            ctx.fillStyle = "#F5F5F7";
            ctx.textAlign = "center";
            ctx.fillText(node.label, node.x, node.y - 11);
          }
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 96, 240, 0.4)";
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[460px] aspect-square flex items-center justify-center select-none cursor-crosshair group"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[#0060F0]/15 blur-[95px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#0060F0]/25" />
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
        className="relative z-10 block"
      />
    </div>
  );
}
