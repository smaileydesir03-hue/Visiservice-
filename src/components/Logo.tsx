import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isDark = false }) => {
  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Geometric modern brand mark */}
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          {/* Base structural diamond */}
          <rect
            x="4"
            y="4"
            width="20"
            height="20"
            rx="5"
            transform="rotate(45 14 14)"
            className={isDark ? "fill-white/10 stroke-white/20" : "fill-[#171717] stroke-[#171717]"}
            strokeWidth="1.5"
          />
          {/* Apricot yellow digital accent facet */}
          <rect
            x="13"
            y="13"
            width="14"
            height="14"
            rx="3.5"
            transform="rotate(45 20 20)"
            fill="#FFC56E"
          />
          {/* Inner focal dot */}
          <circle cx="20" cy="20" r="2.5" fill="#171717" />
        </svg>
      </div>

      {/* Brand typographic wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-[#171717]'
          }`}
        >
          Visi<span className="font-light text-[#FFC56E] ml-1">Service</span>
        </span>
      </div>
    </div>
  );
};
