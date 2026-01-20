interface StatCardProps {
  number: string
  label: string
  icon: string
}

export default function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-3">{icon}</div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </div>
  )
}
