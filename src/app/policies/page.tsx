export default function Policies() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Policies & Procedures</h1>
          <p className="text-blue-100 mt-4">Our commitment to transparency and compliance</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          {/* Privacy Policy */}
          <div className="mb-12" id="privacy">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Privacy Policy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Easy Route Travels processes personal data in line with UK GDPR principles, including:
            </p>

            <div className="bg-white border rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700"><strong>Lawful and transparent data use</strong> - We only process data with your consent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700"><strong>Purpose limitation</strong> - Data is used only for stated purposes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700"><strong>Secure storage</strong> - Your information is protected with appropriate security measures</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700"><strong>No unauthorised data sharing</strong> - Your data is not shared without consent</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 italic">
              Data is used solely for admissions support and communication.
            </p>

            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Your Rights Under GDPR</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Right to access your personal data</li>
                <li>• Right to correct inaccurate data</li>
                <li>• Right to request deletion of data</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          {/* Complaints Procedure */}
          <div className="mb-12" id="complaints">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Complaints Procedure</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We value your feedback and take complaints seriously. If you are unhappy with our service, please follow this process:
            </p>

            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-blue-600">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Submit Your Complaint</h3>
                    <p className="text-gray-700">
                      Email your complaint to: <strong>info@easyroutetravels.com</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-blue-600">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Acknowledgement</h3>
                    <p className="text-gray-700">
                      We will acknowledge your complaint within 5 working days
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Investigation</h3>
                    <p className="text-gray-700">
                      We will investigate your complaint fairly and thoroughly
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-blue-600">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Resolution</h3>
                    <p className="text-gray-700">
                      We will provide a response with our findings and proposed resolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equality & Ethics Statement */}
          <div className="mb-12" id="ethics">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Equality & Ethics Statement</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Easy Route Travels is committed to ethical practices and equal treatment of all individuals:
            </p>

            <div className="bg-white border rounded-lg p-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-gray-900">Equal Treatment</strong>
                    <p className="text-gray-600 text-sm">We provide services without discrimination based on nationality, gender, religion, disability, or any other protected characteristic</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-gray-900">Ethical Recruitment</strong>
                    <p className="text-gray-600 text-sm">We operate with integrity and transparency, never using misleading claims or false promises</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-gray-900">Zero Tolerance Policy</strong>
                    <p className="text-gray-600 text-sm">We have zero tolerance for bribery, misrepresentation, document falsification, or any unethical conduct</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-red-700 mb-3">Commitment to Compliance</h3>
              <p className="text-gray-800">
                We comply with all relevant UK and Canadian laws and regulations, including the Education (Overseas Student) Regulations and professional standards set by education bodies.
              </p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div id="terms">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Terms & Conditions</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              By engaging with Easy Route Travels, you agree to the following:
            </p>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-bold text-gray-900 mb-2">Service Scope</h3>
                <p className="text-gray-700">
                  Our services are advisory and supportive in nature. We do not guarantee admission outcomes.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-bold text-gray-900 mb-2">Student Responsibility</h3>
                <p className="text-gray-700">
                  You are responsible for ensuring the accuracy of all information provided and for complying with university and visa requirements.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-bold text-gray-900 mb-2">Communication</h3>
                <p className="text-gray-700">
                  We will communicate via email or phone. Please keep your contact information updated.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Liability</h3>
                <p className="text-gray-700">
                  Easy Route Travels is not liable for decisions made by universities, visa authorities, or outcomes beyond our control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
