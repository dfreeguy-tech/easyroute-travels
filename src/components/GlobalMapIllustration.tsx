export default function GlobalMapIllustration() {
  return (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background circle */}
      <circle cx="150" cy="100" r="95" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />

      {/* Globe */}
      <circle cx="150" cy="100" r="85" fill="#10b981" opacity="0.3" />

      {/* Continents - simplified */}
      <ellipse cx="100" cy="85" rx="20" ry="25" fill="#059669" opacity="0.7" />
      <ellipse cx="180" cy="95" rx="25" ry="30" fill="#059669" opacity="0.7" />
      <ellipse cx="150" cy="140" rx="18" ry="20" fill="#059669" opacity="0.7" />

      {/* Connection points - cities */}
      <circle cx="90" cy="75" r="5" fill="#3b82f6" />
      <circle cx="200" cy="100" r="5" fill="#ef4444" />
      <circle cx="140" cy="155" r="5" fill="#f59e0b" />

      {/* Connection lines */}
      <path
        d="M 90 75 Q 150 50 200 100"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 200 100 Q 175 130 140 155"
        stroke="#ef4444"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 140 155 Q 110 120 90 75"
        stroke="#f59e0b"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />

      {/* Labels with background */}
      <text x="90" y="70" fontSize="10" fill="#1f2937" fontWeight="bold" textAnchor="middle">
        UK
      </text>
      <text x="200" y="105" fontSize="10" fill="#1f2937" fontWeight="bold" textAnchor="middle">
        CANADA
      </text>
      <text x="140" y="175" fontSize="10" fill="#1f2937" fontWeight="bold" textAnchor="middle">
        WORLD
      </text>

      {/* Decorative elements */}
      <circle cx="150" cy="100" r="95" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />

      {/* Orbiting elements */}
      <circle cx="65" cy="100" r="3" fill="#10b981" />
      <circle cx="235" cy="100" r="3" fill="#10b981" />
      <circle cx="150" cy="25" r="3" fill="#10b981" />
    </svg>
  )
}
