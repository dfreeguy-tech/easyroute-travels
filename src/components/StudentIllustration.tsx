export default function StudentIllustration() {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Head */}
      <circle cx="100" cy="60" r="25" fill="#d4a574" />

      {/* Hair */}
      <path
        d="M 75 60 Q 75 35 100 35 Q 125 35 125 60"
        fill="#8b6f47"
      />

      {/* Eyes */}
      <circle cx="90" cy="55" r="2.5" fill="#000" />
      <circle cx="110" cy="55" r="2.5" fill="#000" />

      {/* Smile */}
      <path
        d="M 90 65 Q 100 70 110 65"
        stroke="#000"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Graduation cap */}
      <rect x="70" y="25" width="60" height="8" fill="#1f2937" rx="2" />
      <polygon points="100,25 100,15 85,20 115,20" fill="#1f2937" />
      <line x1="100" y1="15" x2="110" y2="5" stroke="#fbbf24" strokeWidth="2" />

      {/* Neck */}
      <rect x="95" y="82" width="10" height="8" fill="#d4a574" />

      {/* Body - Shirt */}
      <rect x="70" y="90" width="60" height="40" fill="#3b82f6" rx="5" />

      {/* Arms */}
      <rect x="35" y="95" width="35" height="12" fill="#d4a574" rx="6" />
      <rect x="130" y="95" width="35" height="12" fill="#d4a574" rx="6" />

      {/* Hands holding diploma */}
      <circle cx="38" cy="110" r="6" fill="#d4a574" />
      <circle cx="162" cy="110" r="6" fill="#d4a574" />

      {/* Diploma */}
      <rect x="80" y="105" width="40" height="25" fill="#ffffff" stroke="#dc2626" strokeWidth="2" rx="3" />
      <line x1="85" y1="115" x2="115" y2="115" stroke="#dc2626" strokeWidth="1" />
      <line x1="85" y1="120" x2="115" y2="120" stroke="#dc2626" strokeWidth="1" />
      <circle cx="118" cy="120" r="4" fill="#fbbf24" />

      {/* Pants */}
      <rect x="75" y="130" width="25" height="35" fill="#1f2937" />
      <rect x="100" y="130" width="25" height="35" fill="#1f2937" />

      {/* Shoes */}
      <ellipse cx="87" cy="168" rx="8" ry="6" fill="#000" />
      <ellipse cx="113" cy="168" rx="8" ry="6" fill="#000" />

      {/* Sparkle - success indicator */}
      <circle cx="140" cy="40" r="2" fill="#fbbf24" />
      <path
        d="M 140 35 L 142 40 L 140 45 M 135 40 L 140 40 L 145 40"
        stroke="#fbbf24"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}
