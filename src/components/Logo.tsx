"use client";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "w-7 h-7", showText = false }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-2.5 group select-none">
      {/* Precision Geometric 'DH' Monogram */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} text-[#0060F0] transition-transform duration-300 group-hover:scale-105 shrink-0`}
        aria-label="Daniel Henrique Logo"
      >
        {/* D shape with integrated H bridge */}
        <path
          d="M6 5V23"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M6 5H12C16.2 5 18.5 8 18.5 14C18.5 20 16.2 23 12 23H6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* H right pillar & connector bridge */}
        <path
          d="M18.5 14H22"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M22 5V23"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <span className="font-display font-bold text-sm tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
          Daniel Henrique
        </span>
      )}
    </div>
  );
}
