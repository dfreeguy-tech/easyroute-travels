'use client'

import { useState } from 'react'

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    citizenship: '',
    qualification: '',
    levelOfStudy: '',
    country: '',
    budget: '',
    intake: '',
    englishTest: '',
    consent: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const formElement = e.currentTarget
      const formDataToSend = new FormData(formElement)
      
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xyzgvqpd', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      })
      
      if (response.ok) {
        setSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            citizenship: '',
            qualification: '',
            levelOfStudy: '',
            country: '',
            budget: '',
            intake: '',
            englishTest: '',
            consent: false,
          })
          setSubmitted(false)
        }, 3000)
      } else {
        alert('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Eligibility Assessment Form</h1>
          <p className="text-blue-100 mt-4">Start your journey to study abroad</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-2xl">
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Complete this form to begin your eligibility assessment. We'll review your information and provide personalized guidance on your study abroad options.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h2>
              <p className="text-gray-700">
                Your eligibility assessment form has been submitted successfully. We will review your information and contact you within 2-3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Phone / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="+country-code-phone-number"
                  />
                </div>

                {/* Country of Citizenship */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Country of Citizenship <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="e.g., Nigeria"
                  />
                </div>

                {/* Highest Qualification */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Highest Qualification <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select your qualification</option>
                    <option value="secondary">Secondary School / A-Levels / IB</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Intended Level of Study */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Intended Level of Study <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="levelOfStudy"
                    value={formData.levelOfStudy}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select level of study</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate Taught (MSc, MA)</option>
                    <option value="research">Research-based (MRes, PhD)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Preferred Country */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Preferred Country <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select country</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="both">Both UK & Canada</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Budget Range (Annual) <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="below-10k">Below £10,000</option>
                    <option value="10k-20k">£10,000 - £20,000</option>
                    <option value="20k-30k">£20,000 - £30,000</option>
                    <option value="above-30k">Above £30,000</option>
                  </select>
                </div>

                {/* Intended Intake */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Intended Intake <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="intake"
                    value={formData.intake}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select intake</option>
                    <option value="sep-2025">September 2025</option>
                    <option value="jan-2026">January 2026</option>
                    <option value="sep-2026">September 2026</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* English Language Test */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    English Language Test (if any)
                  </label>
                  <input
                    type="text"
                    name="englishTest"
                    value={formData.englishTest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="e.g., IELTS 6.5, TOEFL 90, or None"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <label className="flex gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-gray-700">
                      I consent to Easy Route Travels processing my information for admissions support purposes in accordance with the{' '}
                      <a href="/policies#privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-3 font-semibold rounded-lg"
                >
                  Submit Assessment Form
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">What happens next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ We review your assessment within 2-3 business days</li>
              <li>✓ You'll receive personalized guidance via email</li>
              <li>✓ We'll schedule a consultation call if needed</li>
              <li>✓ We'll provide recommendations tailored to your profile</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
