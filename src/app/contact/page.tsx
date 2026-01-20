export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-100 mt-4">Get in touch with Easy Route Travels</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Easy Route Travels</h2>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">📧 Email</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:info@easyroutetravels.com"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      info@easyroutetravels.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    For general inquiries and service requests
                  </p>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">📞 Phone / WhatsApp</h3>
                  <p className="text-gray-700">
                    <a
                      href="tel:+2348135142834"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      +234 813 514 2834
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Available on WhatsApp for quick communication
                  </p>
                </div>

                {/* Operating Hours */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">🕐 Operating Hours</h3>
                  <p className="text-gray-700 font-semibold">Monday – Friday</p>
                  <p className="text-gray-700">9:00am – 6:00pm GMT</p>
                  <p className="text-sm text-gray-600 mt-2">
                    * We may respond to messages outside these hours. Urgent matters will be prioritized.
                  </p>
                </div>

                {/* Response Time */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">⏱️ Response Time</h3>
                  <p className="text-gray-700">
                    We aim to respond to all inquiries within <strong>24-48 hours</strong> during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Quick Message</h2>
                <form method="POST" action="https://formspree.io/f/xyzgvqpd" className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Your message here..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full py-2 font-semibold rounded-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">Chat Support</h3>
              <p className="text-gray-600 text-sm">
                Message us on WhatsApp for quick responses during business hours.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Complaints</h3>
              <p className="text-gray-600 text-sm">
                Report concerns via email. Responses within 5 working days.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Privacy</h3>
              <p className="text-gray-600 text-sm">
                Your data is secure and protected under UK GDPR regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
