import FeatureCard from '@/components/FeatureCard'
import GlobalMapIllustration from '@/components/GlobalMapIllustration'

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">About Easy Route Travels</h1>
          <p className="text-xl text-blue-100">Building bridges between ambitious students and world-class universities</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          {/* Who We Are */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Easy Route Travels is an independent education and travel support consultancy providing admissions guidance for students seeking to study in the United Kingdom and Canada.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We were founded on a simple principle: students deserve honest, transparent guidance without pressure tactics or false promises.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <GlobalMapIllustration />
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-t-4 border-blue-600">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="font-bold text-gray-900 mb-2">Accuracy</h3>
                <p className="text-gray-700 text-sm">Current, reliable, and verified information every time</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-t-4 border-green-600">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2">Ethics</h3>
                <p className="text-gray-700 text-sm">Ethical practices at the heart of everything we do</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-t-4 border-purple-600">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-700 text-sm">Clear pricing and open communication always</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-t-4 border-orange-600">
                <div className="text-4xl mb-4">✊</div>
                <h3 className="font-bold text-gray-900 mb-2">Respect</h3>
                <p className="text-gray-700 text-sm">Honoring university standards and integrity</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-12 border-l-8 border-blue-600">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
              To help students access global education opportunities through honest guidance, structured support, and compliance-driven processes.
            </p>
            <p className="text-lg text-gray-700 mt-6">
              We believe that education is transformative. We're here to make the journey to study abroad clearer, more confident, and more achievable.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon="🎯"
                title="Student-Centered"
                description="Your goals and interests always come first. We succeed only when you succeed."
              />
              <FeatureCard
                icon="⚖️"
                title="Independent"
                description="No university affiliations or commission-driven incentives. Just honest advice."
              />
              <FeatureCard
                icon="🔐"
                title="Compliant"
                description="Full GDPR compliance and adherence to all educational standards and regulations."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
