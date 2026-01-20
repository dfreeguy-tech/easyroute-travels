export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-600"
    >
      {/* Globe/World */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
      
      {/* Horizontal line */}
      <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Vertical lines for longitude */}
      <path d="M 20 2 Q 25 20 20 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M 20 2 Q 15 20 20 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Curved route/path */}
      <path
        d="M 8 20 Q 12 12 20 10 Q 28 8 35 15"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Destination marker */}
      <circle cx="35" cy="15" r="3" fill="currentColor" />
    </svg>
  )
}
