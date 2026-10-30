import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Figma - Official 5-color emblem
export const FigmaIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 38 57" className={className} fill="none" aria-label="Figma Logo">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);

// 2. Adobe Photoshop - Official CC Brand Square
export const PhotoshopIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-label="Adobe Photoshop">
    <rect width="48" height="48" rx="10" fill="#001E36" />
    <rect x="1.5" y="1.5" width="45" height="45" rx="8.5" stroke="#31A8FF" strokeWidth="2.5" />
    <text
      x="24"
      y="31.5"
      textAnchor="middle"
      fill="#31A8FF"
      fontSize="21"
      fontWeight="900"
      fontFamily="Inter, system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5px"
    >
      Ps
    </text>
  </svg>
);

// 3. Adobe Illustrator - Official CC Brand Square
export const IllustratorIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-label="Adobe Illustrator">
    <rect width="48" height="48" rx="10" fill="#330000" />
    <rect x="1.5" y="1.5" width="45" height="45" rx="8.5" stroke="#FF9A00" strokeWidth="2.5" />
    <text
      x="24"
      y="31.5"
      textAnchor="middle"
      fill="#FF9A00"
      fontSize="21"
      fontWeight="900"
      fontFamily="Inter, system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5px"
    >
      Ai
    </text>
  </svg>
);

// 4. Adobe After Effects - Official CC Brand Square
export const AfterEffectsIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-label="Adobe After Effects">
    <rect width="48" height="48" rx="10" fill="#00005B" />
    <rect x="1.5" y="1.5" width="45" height="45" rx="8.5" stroke="#9999FF" strokeWidth="2.5" />
    <text
      x="24"
      y="31.5"
      textAnchor="middle"
      fill="#9999FF"
      fontSize="21"
      fontWeight="900"
      fontFamily="Inter, system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5px"
    >
      Ae
    </text>
  </svg>
);

// 5. Adobe Premiere Pro - Official CC Brand Square
export const PremiereProIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-label="Adobe Premiere Pro">
    <rect width="48" height="48" rx="10" fill="#00005B" />
    <rect x="1.5" y="1.5" width="45" height="45" rx="8.5" stroke="#EA77FF" strokeWidth="2.5" />
    <text
      x="24"
      y="31.5"
      textAnchor="middle"
      fill="#EA77FF"
      fontSize="21"
      fontWeight="900"
      fontFamily="Inter, system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5px"
    >
      Pr
    </text>
  </svg>
);

// 6. HTML5 - Official W3C Shield
export const Html5Icon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 512 512" className={className} aria-label="HTML5">
    <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#EF652A" d="M256,472 L407,430 440,41 256,41" />
    <path fill="#EBEBEB" d="M256,176 L160,176 166,242 256,242 256,176 Z M256,314 L204,300 200,265 152,265 159,343 256,370 Z M256,92 L146,92 153,142 256,142 Z" />
    <path fill="#FFFFFF" d="M256,176 L352,176 343,265 256,289 256,242 301,230 304,196 256,196 Z M256,92 L366,92 359,142 256,142 Z M256,370 L353,343 359,265 311,265 308,300 256,314 Z" />
  </svg>
);

// 7. CSS3 - Official Shield
export const Css3Icon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 512 512" className={className} aria-label="CSS3">
    <path fill="#1572B6" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#33A9DC" d="M256,472 L407,430 440,41 256,41" />
    <path fill="#EBEBEB" d="M256,176 L182,176 186,224 256,224 Z M256,92 L146,92 153,142 256,142 Z M256,314 L204,300 201,265 153,265 160,343 256,370 Z" />
    <path fill="#FFFFFF" d="M256,92 L366,92 359,142 256,142 Z M256,176 L352,176 345,252 256,276 Z M256,314 L308,300 312,252 360,252 353,343 256,370 Z" />
  </svg>
);

// 8. JavaScript - Official JS Badge
export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 630 630" className={className} aria-label="JavaScript">
    <rect width="630" height="630" rx="90" fill="#F7DF1E" />
    <path d="m165.8 450.4c0-36 21.6-60.6 57.6-60.6 22.8 0 39.6 10.2 49.2 25.2l-22.8 14.4c-6.6-9.6-14.4-14.4-26.4-14.4-18 0-28.8 12.6-28.8 35.4v124.8h-28.8zm166.8 55.2c10.8 18 27.6 27.6 51.6 27.6 22.8 0 37.2-11.4 37.2-27 0-18-15.6-24.6-43.2-31.2-36.6-9-60.6-21.6-60.6-55.8 0-31.8 25.2-54.6 63.6-54.6 27.6 0 48 9.6 61.2 30l-22.8 15c-9-13.8-21-19.8-38.4-19.8-19.8 0-33.6 11.4-33.6 25.2 0 15 11.4 21.6 37.8 28.2 40.8 10.2 66 22.8 66 58.8 0 35.4-28.2 57.6-68.4 57.6-34.8 0-58.8-13.8-72.6-37.2z" fill="#000000" />
  </svg>
);

// 9. React - Official Atom
export const ReactIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="-11.5 -10.23 23 20.46" className={className} fill="none" aria-label="React">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// 10. Node.js - Official Hexagon Brand Mark
export const NodejsIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 256 256" className={className} fill="none" aria-label="Node.js">
    <path
      d="M128 12.5L232.5 73.5V195.5L128 256.5L23.5 195.5V73.5L128 12.5Z"
      fill="#333333"
    />
    <path
      d="M128 27.5L220 81V188L128 241.5L36 188V81L128 27.5Z"
      fill="#5FA04E"
    />
    {/* Node N letterform */}
    <path
      d="M96 88V168M96 112L156 168V88"
      stroke="#FFFFFF"
      strokeWidth="18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 11. Java - Official Brand Icon
export const JavaIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-label="Java">
    {/* Steam curls */}
    <path
      d="M27.5 7C27.5 7 30 9.5 28 12.5C26 15.5 22.5 16 23.5 19"
      stroke="#E76F00"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M21 9C21 9 23 11 21.5 13.5C20 16 17.5 17 18.5 20"
      stroke="#E76F00"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Coffee Cup / Base in Java Navy Blue */}
    <path
      d="M12 25H32C32 25 33 34 22 35C13 36 12 25 12 25Z"
      fill="#007396"
    />
    <path
      d="M32 26C35.5 26 38 28 38 30C38 32.5 35 34 32 34"
      stroke="#007396"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Saucer */}
    <path
      d="M10 39C16 41.5 28 41.5 34 39"
      stroke="#E76F00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M14 42C18 43.5 26 43.5 30 42"
      stroke="#007396"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 12. Python - Official Dual-Color Emblem
export const PythonIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 110 110" className={className} aria-label="Python">
    <path
      d="M54.1 3.5c-24.8 0-23.2 10.8-23.2 10.8l.1 11.2h23.7v3.4H21.2S7 27.2 7 52.2s12.5 24.2 12.5 24.2h7.4v-10.4s-.4-12.5 12.3-12.5h23.5s11.9.2 11.9-11.6V15.4S76.8 3.5 54.1 3.5zm-13.1 7.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"
      fill="#3776AB"
    />
    <path
      d="M55.9 106.5c24.8 0 23.2-10.8 23.2-10.8l-.1-11.2H55.3V81h33.5s14.2 1.7 14.2-23.3-12.5-24.2-12.5-24.2h-7.4v10.4s.4 12.5-12.3 12.5H47.3s-11.9-.2-11.9 11.6v23.5s-2.2 11.5 20.5 11.5zm13.1-7.2a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z"
      fill="#FFD43B"
    />
  </svg>
);

// 13. C++ - Official ISO / Devicon Emblem
export const CppIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-label="C++">
    {/* Hexagon Shield */}
    <path
      d="M32 4L56 18V46L32 60L8 46V18L32 4Z"
      fill="#00599E"
    />
    {/* C Letter */}
    <path
      d="M31 22C23.5 22 19 26.5 19 32C19 37.5 23.5 42 31 42C34.5 42 37 40.5 38.5 39L36 35.5C34.8 36.8 33.2 37.5 31 37.5C26.8 37.5 24 35 24 32C24 29 26.8 26.5 31 26.5C33.2 26.5 34.8 27.2 36 28.5L38.5 25C37 23.5 34.5 22 31 22Z"
      fill="#FFFFFF"
    />
    {/* First + */}
    <path d="M42 29H45V26H47V29H50V31H47V34H45V31H42V29Z" fill="#00B4F0" />
    {/* Second + */}
    <path d="M51 35H54V32H56V35H59V37H56V40H54V37H51V35Z" fill="#00B4F0" />
  </svg>
);

// 14. SQL - Relational Database Stack
export const SqlIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-label="SQL">
    <ellipse cx="24" cy="11" rx="16" ry="6" fill="#336791" />
    <path
      d="M8 11V23C8 26.3 15.2 29 24 29C32.8 29 40 26.3 40 23V11"
      stroke="#204A6E"
      strokeWidth="2.5"
      fill="#295B83"
    />
    <ellipse cx="24" cy="23" rx="16" ry="6" fill="#336791" />
    <path
      d="M8 23V35C8 38.3 15.2 41 24 41C32.8 41 40 38.3 40 35V23"
      stroke="#204A6E"
      strokeWidth="2.5"
      fill="#204A6E"
    />
    <ellipse cx="24" cy="35" rx="16" ry="6" fill="#336791" />
    <rect x="14" y="19" width="20" height="10" rx="3" fill="#00B4D8" />
    <text
      x="24"
      y="26.5"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="7.5"
      fontWeight="900"
      fontFamily="monospace"
      letterSpacing="0.5px"
    >
      SQL
    </text>
  </svg>
);

// 15. MongoDB - Official Leaf Logo
export const MongoDbIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-label="MongoDB">
    {/* Left Leaf Half */}
    <path
      d="M32 4C32 4 19 22 19 36C19 45 25 53 32 58C32 58 32 4 32 4Z"
      fill="#47A248"
    />
    {/* Right Leaf Half (Lighter gradient tint) */}
    <path
      d="M32 4C32 4 45 22 45 36C45 45 39 53 32 58C32 58 32 4 32 4Z"
      fill="#4DB33D"
    />
    {/* Center Spine */}
    <path
      d="M32 10V56"
      stroke="#337835"
      strokeWidth="1.5"
    />
  </svg>
);

// 16. DaVinci Resolve - Official 3-Blade Color Iris
export const DaVinciResolveIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-label="DaVinci Resolve">
    <rect width="64" height="64" rx="14" fill="#1C1C1E" />
    {/* Red Petal */}
    <path
      d="M32 14C37 14 42 16.5 45 20.5L34 32L32 14Z"
      fill="#FF3B30"
    />
    <path
      d="M48 25C51 29 51.5 34.5 49.5 39.5L34 32L48 25Z"
      fill="#FF9500"
    />
    {/* Green Petal */}
    <path
      d="M48 42C45 47 40 50 34.5 50.5L32 34L48 42Z"
      fill="#34C759"
    />
    {/* Cyan/Blue Petal */}
    <path
      d="M30 50.5C24.5 50 19.5 46.5 17 41.5L30 34L30 50.5Z"
      fill="#00C7BE"
    />
    {/* Blue / Violet Petal */}
    <path
      d="M15.5 37C14 32 15 26.5 18 22L31 32L15.5 37Z"
      fill="#007AFF"
    />
    <path
      d="M20 19C23.5 15.5 28 14 32 14L32 32L20 19Z"
      fill="#AF52DE"
    />
    {/* Center core */}
    <circle cx="32" cy="32" r="4.5" fill="#FFFFFF" />
  </svg>
);

// 17. CapCut - Official Sharp Bow-Tie Silhouette
export const CapCutIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-label="CapCut">
    <rect width="64" height="64" rx="14" fill="#050505" />
    {/* Top cutter blade */}
    <path
      d="M16 20L48 20L36 30L16 20Z"
      fill="#FFFFFF"
    />
    {/* Bottom cutter blade */}
    <path
      d="M16 44L48 44L36 34L16 44Z"
      fill="#FFFFFF"
    />
    {/* Modern CapCut Cyan accent indicator */}
    <circle cx="21" cy="32" r="3" fill="#00F0FF" />
    <path d="M48 20L40 32L48 44" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 18. Wix - Official Brand Logo
export const WixIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-label="Wix">
    <rect width="64" height="64" rx="14" fill="#0C6EFC" />
    {/* WiX Letterform in White */}
    <text
      x="32"
      y="39"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="20"
      fontWeight="900"
      fontFamily="Inter, system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5px"
    >
      WiX
    </text>
  </svg>
);
