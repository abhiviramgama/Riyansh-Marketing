import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' means dark text for light backgrounds, 'dark' means white text for charcoal backgrounds
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = false,
  className = ''
}) => {
  const isDarkBg = variant === 'dark';

  // Dimension scaling
  const dimensions = {
    sm: { mark: 34, text: 'text-base', subText: 'text-[9px]' },
    md: { mark: 44, text: 'text-xl', subText: 'text-[10px]' },
    lg: { mark: 56, text: 'text-2xl', subText: 'text-xs' }
  }[size];

  const primaryStroke = isDarkBg ? '#FFFFFF' : '#292A30';
  const textColor = isDarkBg ? 'text-white' : 'text-brand-charcoal';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Precision RM Geometric Monogram SVG */}
      <div className="relative flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
        <svg
          width={dimensions.mark}
          height={dimensions.mark}
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Left Diamond (open on bottom-right) */}
          <path
            d="M 28 58 L 10 40 L 38 12 L 56 30"
            stroke={primaryStroke}
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Connecting Diagonal Stroke */}
          <path
            d="M 38 12 L 74 48"
            stroke={primaryStroke}
            strokeWidth="5.5"
            strokeLinecap="round"
          />

          {/* Right Diamond (open on top-left) */}
          <path
            d="M 52 26 L 62 16 L 90 44 L 62 72 L 44 54"
            stroke={primaryStroke}
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Red Vertical Rhomboid Accent */}
          <polygon
            points="48,32 52,36 52,48 48,44"
            fill="#B52B35"
          />

          {/* Stylized R Glyph */}
          <text
            x="32"
            y="46"
            fontFamily="Outfit, Plus Jakarta Sans, Arial, sans-serif"
            fontWeight="800"
            fontSize="22"
            fill={primaryStroke}
            textAnchor="middle"
          >
            R
          </text>

          {/* Stylized M Glyph */}
          <text
            x="68"
            y="46"
            fontFamily="Outfit, Plus Jakarta Sans, Arial, sans-serif"
            fontWeight="800"
            fontSize="22"
            fill={primaryStroke}
            textAnchor="middle"
          >
            M
          </text>
        </svg>
      </div>

      {/* Brand Typography Wordmark */}
      <div className="flex flex-col">
        <div className={`font-heading font-extrabold tracking-tight leading-none ${dimensions.text}`}>
          <span className="text-brand-red">R</span>
          <span className={textColor}>IYANSH</span>
          <span className="text-brand-charcoal opacity-20 mx-1">|</span>
          <span className="text-brand-red">M</span>
          <span className={textColor}>ARKETING</span>
        </div>
        {showSubtitle ? (
          <span className={`tracking-widest uppercase font-semibold text-brand-stone mt-1 ${dimensions.subText}`}>
            Tiles & Sanitary Ware • Morbi
          </span>
        ) : (
          <span className={`tracking-widest uppercase font-medium text-brand-stone mt-0.5 ${dimensions.subText}`}>
            Morbi • Gujarat
          </span>
        )}
      </div>
    </Link>
  );
};
