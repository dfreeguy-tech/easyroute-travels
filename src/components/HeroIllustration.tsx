export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="url(#skyGradient)" />

      {/* Clouds */}
      <ellipse cx="80" cy="50" rx="40" ry="20" fill="white" opacity="0.8" />
      <ellipse cx="100" cy="55" rx="35" ry="18" fill="white" opacity="0.8" />
      <ellipse cx="320" cy="70" rx="45" ry="22" fill="white" opacity="0.7" />
      <ellipse cx="350" cy="75" rx="38" ry="20" fill="white" opacity="0.7" />

      {/* Earth/Globe */}
      <circle cx="200" cy="180" r="60" fill="#10b981" opacity="0.9" />
      <circle cx="200" cy="180" r="60" fill="none" stroke="#059669" strokeWidth="2" />

      {/* Continents - simple shapes */}
      <ellipse cx="170" cy="160" rx="15" ry="20" fill="#047857" />
      <ellipse cx="230" cy="170" rx="18" ry="25" fill="#047857" />
      <ellipse cx="200" cy="210" rx="12" ry="15" fill="#047857" />

      {/* Orbital path */}
      <circle cx="200" cy="180" r="85" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />

      {/* Satellite/Student */}
      <circle cx="270" cy="120" r="8" fill="#f59e0b" />
      <rect x="265" y="112" width="10" height="4" fill="#f59e0b" />
      <rect x="265" y="124" width="10" height="4" fill="#f59e0b" />

      {/* Destination marker */}
      <circle cx="130" cy="240" r="10" fill="#ef4444" />
      <circle cx="130" cy="240" r="6" fill="white" />

      {/* Connecting line */}
      <path
        d="M 270 120 Q 200 180 130 240"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
      />

      {/* Arrow indicating movement */}
      <path
        d="M 250 140 L 245 155 L 255 150"
        fill="#3b82f6"
      />

      {/* University building */}
      <rect x="340" y="210" width="40" height="70" fill="#8b5cf6" />
      <polygon points="360,210 340,190 380,190" fill="#7c3aed" />
      {/* Windows */}
      <rect x="345" y="220" width="6" height="6" fill="#fbbf24" />
      <rect x="355" y="220" width="6" height="6" fill="#fbbf24" />
      <rect x="365" y="220" width="6" height="6" fill="#fbbf24" />
      <rect x="345" y="235" width="6" height="6" fill="#fbbf24" />
      <rect x="355" y="235" width="6" height="6" fill="#fbbf24" />
      <rect x="365" y="235" width="6" height="6" fill="#fbbf24" />
      <rect x="345" y="250" width="6" height="6" fill="#fbbf24" />
      <rect x="355" y="250" width="6" height="6" fill="#fbbf24" />
      <rect x="365" y="250" width="6" height="6" fill="#fbbf24" />

      {/* Success star */}
      <path
        d="M 130 210 L 133 220 L 143 220 L 135 226 L 138 236 L 130 230 L 122 236 L 125 226 L 117 220 L 127 220 Z"
        fill="#fbbf24"
      />
    </svg>
  )
}
