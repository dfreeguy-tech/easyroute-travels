interface TestimonialProps {
  quote: string
  author: string
  role: string
  image?: string
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}
