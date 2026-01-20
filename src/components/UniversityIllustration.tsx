export default function UniversityIllustration() {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background - sky */}
      <rect width="240" height="280" fill="#e0f2fe" />

      {/* Sun */}
      <circle cx="30" cy="30" r="15" fill="#fbbf24" />
      <line x1="30" y1="10" x2="30" y2="0" stroke="#fbbf24" strokeWidth="2" />
      <line x1="50" y1="30" x2="60" y2="30" stroke="#fbbf24" strokeWidth="2" />
      <line x1="45" y1="15" x2="52" y2="8" stroke="#fbbf24" strokeWidth="2" />

      {/* Main building - central tower */}
      <rect x="80" y="120" width="80" height="120" fill="#8b5cf6" />
      <polygon points="120,120 80,80 160,80" fill="#7c3aed" />

      {/* Roof detail */}
      <line x1="85" y1="80" x2="85" y2="75" stroke="#6d28d9" strokeWidth="2" />
      <line x1="155" y1="80" x2="155" y2="75" stroke="#6d28d9" strokeWidth="2" />
      <circle cx="120" cy="70" r="4" fill="#fbbf24" />

      {/* Windows - grid pattern */}
      <rect x="90" y="135" width="12" height="12" fill="#fef08a" />
      <rect x="110" y="135" width="12" height="12" fill="#fef08a" />
      <rect x="130" y="135" width="12" height="12" fill="#fef08a" />

      <rect x="90" y="160" width="12" height="12" fill="#fef08a" />
      <rect x="110" y="160" width="12" height="12" fill="#fef08a" />
      <rect x="130" y="160" width="12" height="12" fill="#fef08a" />

      <rect x="90" y="185" width="12" height="12" fill="#fef08a" />
      <rect x="110" y="185" width="12" height="12" fill="#fef08a" />
      <rect x="130" y="185" width="12" height="12" fill="#fef08a" />

      <rect x="90" y="210" width="12" height="12" fill="#fef08a" />
      <rect x="110" y="210" width="12" height="12" fill="#fef08a" />
      <rect x="130" y="210" width="12" height="12" fill="#fef08a" />

      {/* Door */}
      <rect x="110" y="225" width="20" height="35" fill="#3b2314" />
      <circle cx="125" cy="242" r="2" fill="#fbbf24" />

      {/* Left wing */}
      <rect x="40" y="160" width="40" height="80" fill="#a78bfa" />
      <polygon points="60,160 40,130 80,130" fill="#9370db" />

      {/* Windows left wing */}
      <rect x="50" y="175" width="8" height="8" fill="#fef08a" />
      <rect x="65" y="175" width="8" height="8" fill="#fef08a" />

      <rect x="50" y="200" width="8" height="8" fill="#fef08a" />
      <rect x="65" y="200" width="8" height="8" fill="#fef08a" />

      {/* Right wing */}
      <rect x="160" y="160" width="40" height="80" fill="#a78bfa" />
      <polygon points="180,160 160,130 200,130" fill="#9370db" />

      {/* Windows right wing */}
      <rect x="170" y="175" width="8" height="8" fill="#fef08a" />
      <rect x="185" y="175" width="8" height="8" fill="#fef08a" />

      <rect x="170" y="200" width="8" height="8" fill="#fef08a" />
      <rect x="185" y="200" width="8" height="8" fill="#fef08a" />

      {/* Base/Foundation */}
      <rect x="20" y="240" width="200" height="10" fill="#5a4a3a" />
      <rect x="25" y="245" width="190" height="2" fill="#4a3a2a" />

      {/* Flag on top */}
      <line x1="120" y1="68" x2="120" y2="50" stroke="#1f2937" strokeWidth="2" />
      <rect x="120" y="48" width="20" height="12" fill="#ef4444" />
      <circle cx="135" cy="54" r="2" fill="#fbbf24" />

      {/* Decorative - books/knowledge symbols */}
      <rect x="10" y="200" width="8" height="12" fill="#10b981" transform="rotate(-15 14 206)" />
      <rect x="210" y="210" width="8" height="12" fill="#3b82f6" transform="rotate(25 214 216)" />
    </svg>
  )
}
