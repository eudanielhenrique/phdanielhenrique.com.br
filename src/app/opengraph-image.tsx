import { ImageResponse } from "next/og";

export const alt = "Daniel Henrique | Desenvolvedor Full Stack & Founder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0B0D12",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(0, 96, 240, 0.22) 0%, transparent 55%), radial-gradient(circle at 15% 85%, rgba(0, 96, 240, 0.12) 0%, transparent 45%)",
          color: "#F5F5F7",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top Bar: Monogram + Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Custom DH Monogram SVG */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#12151B",
                border: "1px solid rgba(0, 96, 240, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <path d="M7 6H17C22.5 6 26.5 10 26.5 18C26.5 26 22.5 30 17 30H7V6Z" stroke="#0060F0" strokeWidth="3" />
                <path d="M14 6V30" stroke="#F5F5F7" strokeWidth="2.5" />
                <path d="M21 6V30" stroke="#F5F5F7" strokeWidth="2.5" />
                <path d="M14 18H21" stroke="#0060F0" strokeWidth="3" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#F5F5F7",
                textTransform: "uppercase",
              }}
            >
              Daniel Henrique
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(18, 21, 27, 0.8)",
              border: "1px solid rgba(34, 38, 47, 0.9)",
              fontSize: "15px",
              fontFamily: "monospace",
              color: "#0060F0",
            }}
          >
            <span>phdanielhenrique.com.br</span>
          </div>
        </div>

        {/* Center: Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "980px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0060F0",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            <span>Automação com n8n & IA • Integração de ERPs • Full Stack</span>
          </div>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#F5F5F7",
            }}
          >
            Eu construo sistemas e automatizo processos que geram resultado.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.4,
              color: "#8A8F99",
              margin: 0,
            }}
          >
            Fundador de 4 startups e desenvolvedor há mais de 8 anos conectando sistemas corporativos e ecossistema WhatsApp.
          </p>

          {/* Explicit Conversion CTA Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingTop: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                borderRadius: "999px",
                backgroundColor: "#0060F0",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 700,
                boxShadow: "0 8px 25px rgba(0, 96, 240, 0.45)",
              }}
            >
              <span>Acessar portfólio</span>
              <span style={{ fontSize: "18px" }}>→</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Ventures Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(34, 38, 47, 0.8)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {["Figprod", "Bora Automatizar", "BuskaLeads", "LetsGoPedir"].map((v) => (
              <div
                key={v}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  backgroundColor: "#12151B",
                  border: "1px solid #22262F",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#F5F5F7",
                }}
              >
                {v}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "14px",
              color: "#8A8F99",
            }}
          >
            <span>+40 Projetos</span>
            <span>•</span>
            <span>Desde 2016</span>
            <span>•</span>
            <span>Barra de São Francisco - ES</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
