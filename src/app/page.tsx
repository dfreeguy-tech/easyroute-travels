import Link from 'next/link'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import StatCard from '@/components/StatCard'
import HeroIllustration from '@/components/HeroIllustration'
import StudentIllustration from '@/components/StudentIllustration'
import UniversityIllustration from '@/components/UniversityIllustration'
import AvatarOne from '@/components/AvatarOne'
import AvatarTwo from '@/components/AvatarTwo'
import AvatarThree from '@/components/AvatarThree'

export default function Home() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animation-pulse"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block bg-blue-500 bg-opacity-50 px-4 py-2 rounded-full">
                <p className="text-sm font-semibold text-blue-100">🌍 Study Abroad Made Simple</p>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Your Path to Global <span className="text-blue-200">Education</span>
              </h1>
              
              <p className="text-xl md:text-xl mb-8 text-blue-100 leading-relaxed">
                Transparent, ethical guidance for studying in the UK & Canada. No false promises. Just honest support.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/apply" className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Start Free Assessment
                </Link>
                <Link href="/services" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg transition">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-50 to-slate-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <StatCard number="500+" label="Students Guided" icon="👨‍🎓" />
            <StatCard number="50+" label="Partner Universities" icon="🎓" />
            <StatCard number="95%" label="Success Rate" icon="✨" />
          </div>
        </div>
      </section>

      {/* What We Do - Enhanced */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, transparency, and student-first values to guide your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <StudentIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Honest Assessment</h3>
              <p className="text-gray-600 text-center">
                We evaluate your profile realistically and recommend suitable institutions based on your actual qualifications and goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <UniversityIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Complete Support</h3>
              <p className="text-gray-600 text-center">
                From course selection to application submission, we guide every step. Your success is our mission.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-4xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Ethical Practice</h3>
              <p className="text-gray-600 text-center">
                No false promises. No hidden fees. Just transparent, honest guidance aligned with your best interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our 4-Step Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and student-centered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white relative z-10">
                <div className="text-5xl font-bold mb-4 opacity-20">1</div>
                <h3 className="text-xl font-bold mb-3">Eligibility</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Submit your profile and we assess your fit for UK/Canada universities
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-6"></div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white relative z-10">
                <div className="text-5xl font-bold mb-4 opacity-20">2</div>
                <h3 className="text-xl font-bold mb-3">Programme Guidance</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Get personalized recommendations for courses that match your goals
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-6"></div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white relative z-10">
                <div className="text-5xl font-bold mb-4 opacity-20">3</div>
                <h3 className="text-xl font-bold mb-3">Application Support</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We guide you through forms, documents, and statements step-by-step
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-6"></div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white relative z-10">
                <div className="text-5xl font-bold mb-4 opacity-20">4</div>
                <h3 className="text-xl font-bold mb-3">Next Steps</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Navigate offers, deposits, and prepare for your new adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Trust Easy Route Travels</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to your success through transparency, ethics, and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-gray-700">Transparent pricing confirmed in writing before we begin</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600 hover:shadow-lg transition">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Student First</h3>
              <p className="text-gray-700">Your interests matter more than any commission or incentive</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600 hover:shadow-lg transition">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR Protected</h3>
              <p className="text-gray-700">Your data is secure and handled with complete confidentiality</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600 hover:shadow-lg transition">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Honest Results</h3>
              <p className="text-gray-700">We tell you the truth about your chances, even if it's challenging</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-600 hover:shadow-lg transition">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fair Complaints Process</h3>
              <p className="text-gray-700">Clear, structured procedure if you have concerns</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border-l-4 border-cyan-600 hover:shadow-lg transition">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Experience</h3>
              <p className="text-gray-700">Deep knowledge of UK & Canadian higher education systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">We Support All Student Types</h2>
            <p className="text-xl text-gray-600">Whatever your academic background, we can help</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Undergraduates</h3>
              <p className="text-sm text-gray-700">Fresh or experienced A-level students ready for university</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Postgraduates</h3>
              <p className="text-sm text-gray-700">MSc, MA, MBA seekers advancing their careers</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="font-bold text-gray-900 mb-2">Researchers</h3>
              <p className="text-sm text-gray-700">MRes and PhD pathway students</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Career Changers</h3>
              <p className="text-sm text-gray-700">Mature students seeking new directions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Study Abroad Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the first step with our free eligibility assessment. Get personalized guidance in 2-3 days.
            </p>
            <Link href="/apply" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 font-bold rounded-lg text-lg inline-block transition">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories from Our Students</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from students who successfully navigated their study abroad journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-center py-6">
                <div className="w-20 h-20">
                  <AvatarOne />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic text-center mb-4 leading-relaxed">
                  "Easy Route Travels made my application journey so smooth. They were honest about my chances and helped me target the right universities. I'm now at Oxford!"
                </p>
                <p className="font-bold text-gray-900 text-center">Amara Okafor</p>
                <p className="text-sm text-gray-600 text-center">MSc Computer Science, Oxford</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-center py-6">
                <div className="w-20 h-20">
                  <AvatarTwo />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic text-center mb-4 leading-relaxed">
                  "The transparency and guidance I received was incredible. No hidden fees, no pressure. They genuinely cared about finding the right fit for me in Canada."
                </p>
                <p className="font-bold text-gray-900 text-center">Chisom Adeyemi</p>
                <p className="text-sm text-gray-600 text-center">BBA, University of Toronto</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-center py-6">
                <div className="w-20 h-20">
                  <AvatarThree />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic text-center mb-4 leading-relaxed">
                  "As a career-changer, I was nervous about applying. They believed in me and helped craft a compelling narrative. Now I'm thriving at Cambridge!"
                </p>
                <p className="font-bold text-gray-900 text-center">David Chukwu</p>
                <p className="text-sm text-gray-600 text-center">MBA, Cambridge University</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
