import FeatureCard from '@/components/FeatureCard'

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Study Abroad Services</h1>
          <p className="text-xl text-blue-100">Comprehensive support designed around your needs</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial assessment to post-offer guidance, we support you at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FeatureCard
              icon="🎯"
              title="Programme Guidance"
              description="Course suitability assessment, entry requirements, and budget-aligned planning"
            />
            <FeatureCard
              icon="📝"
              title="Application Support"
              description="Forms, documents, personal statements, CV guidance, and submission support"
            />
            <FeatureCard
              icon="✅"
              title="Offer Guidance"
              description="Understanding offers, reviewing conditions, and navigating deposits and deadlines"
            />
            <FeatureCard
              icon="🚀"
              title="Pre-Departure"
              description="Arrival preparation, accommodation guidance, and travel readiness checklists"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Detailed Service Breakdown</h2>

          {/* Programme & Course Guidance */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Programme & Course Guidance
              </h3>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Course Suitability Assessment</p>
                    <p className="text-gray-600">We evaluate which programmes align with your academic background, interests, and goals</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Entry Requirement Guidance</p>
                    <p className="text-gray-600">Clear explanation of GPA, test scores, and prerequisites for each programme</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Budget-Aligned Study Planning</p>
                    <p className="text-gray-600">Finding universities and programmes that fit your financial situation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Support */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Application Support
              </h3>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Application Form Guidance</p>
                    <p className="text-gray-600">Step-by-step support through online applications and portal submissions</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Document Preparation Checklist</p>
                    <p className="text-gray-600">Comprehensive checklist of transcripts, certificates, and required documentation</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Personal Statement & CV Structuring</p>
                    <p className="text-gray-600">Advice on crafting compelling narratives that showcase your strengths</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Submission Support</p>
                    <p className="text-gray-600">Guidance on submitting applications (where permitted by universities)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Offer & Decision Guidance */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🎉</span>
                Offer & Decision Guidance
              </h3>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Offer Interpretation</p>
                    <p className="text-gray-600">Understanding conditional vs unconditional offers and what they mean</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Conditions Review</p>
                    <p className="text-gray-600">Analyzing any conditions attached to your offer and timelines for meeting them</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Deposit & Deadline Guidance</p>
                    <p className="text-gray-600">Navigating payment deadlines and securing your place</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Pre-Departure Support */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">✈️</span>
                Pre-Departure Support
              </h3>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Arrival Preparation Guidance</p>
                    <p className="text-gray-600">What to expect on arrival, orientation processes, and settling in tips</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Accommodation Direction</p>
                    <p className="text-gray-600">Guidance on university accommodation, private rentals, and student living</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-orange-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">Travel Readiness Checklist</p>
                    <p className="text-gray-600">Documents, packing tips, and practical preparations for your journey</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="section-padding bg-red-50">
        <div className="container max-w-3xl">
          <div className="bg-white border-l-8 border-red-600 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
              <span className="text-4xl">⚠️</span>
              Important Disclaimer
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-bold text-gray-900">
                Easy Route Travels does not:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span className="text-gray-700">Issue admission offers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span className="text-gray-700">Issue CAS (Confirmation of Acceptance for Studies) letters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span className="text-gray-700">Handle visa applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span className="text-gray-700">Guarantee admission outcomes</span>
                </li>
              </ul>
              <p className="text-lg text-gray-800 mt-6 italic border-t pt-6">
                All admissions decisions are made independently by universities and colleges. Our role is to guide and support your application journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
