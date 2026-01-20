export default function Fees() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Fees & Refund Policy</h1>
          <p className="text-blue-100 mt-4">Transparent pricing and fair refund terms</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Our Fees */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Fees</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our fees cover professional advisory and administrative support only.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Exact fees are communicated before any service begins and confirmed in writing.
              </p>

              <h3 className="text-lg font-semibold mb-4">Fees may apply for:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Application support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Document review</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Consultation services</span>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-800 text-sm">
                  <strong>Note:</strong> Contact us for a detailed fee quote based on your specific needs.
                </p>
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Refund Policy</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">For Completed Services</h3>
                <p className="text-gray-700">
                  Fees for completed services are non-refundable.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">For Uncommenced Services</h3>
                <p className="text-gray-700">
                  Where services have not commenced, refunds may be considered on a case-by-case basis.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Third-Party Charges</h3>
                <p className="text-gray-700">
                  University fees, deposits, and third-party charges are not controlled by Easy Route Travels and are non-refundable by us.
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <p className="text-gray-800 text-sm">
                  <strong>Important:</strong> Full refund terms are provided before engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">What You Should Know</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Payment Terms</h3>
                <p className="text-gray-700">
                  Payment arrangements and deadlines will be clearly communicated in your service agreement.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2 text-blue-600">No Hidden Charges</h3>
                <p className="text-gray-700">
                  All fees are transparent and confirmed in writing before work begins. There are no surprise costs.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-600">Invoice & Documentation</h3>
                <p className="text-gray-700">
                  You will receive clear invoices and documentation for all payments made.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Style */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Can I get a refund if I change my mind?</h3>
                <p className="text-gray-700">
                  Yes, if services have not commenced. Refund eligibility depends on when you request the cancellation. Contact us for your specific situation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Are university application fees refundable?</h3>
                <p className="text-gray-700">
                  No. University application fees are charged by institutions directly and are beyond our control. These are separate from our service fees.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What if I'm not satisfied with the service?</h3>
                <p className="text-gray-700">
                  We have a formal complaints procedure. Please email info@easyroutetravels.com to lodge a complaint, which will be investigated within 5 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
