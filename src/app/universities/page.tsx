export default function Universities() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Universities & Institutions</h1>
          <p className="text-blue-100 mt-4">We support applications to leading universities</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Institutions We Support Applications To</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We support students applying to a wide range of UK and Canadian universities based on eligibility and programme availability.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-600">
            <p className="text-gray-800 font-semibold">
              We do not claim formal partnerships unless officially documented.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6">Institution Selection Criteria</h3>
          <p className="text-gray-700 mb-4">Institution selection is guided by:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-blue-600">Academic Fit</h4>
              <p className="text-gray-600">
                Ensuring the programme aligns with your academic background and career goals.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-blue-600">Entry Requirements</h4>
              <p className="text-gray-600">
                Matching your qualifications with realistic entry criteria.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-blue-600">Budget Considerations</h4>
              <p className="text-gray-600">
                Recommending institutions and programmes aligned with your financial capacity.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-blue-600">Career Goals</h4>
              <p className="text-gray-600">
                Identifying programmes that support your professional aspirations.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Coverage</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-blue-600">🇬🇧</div>
                <div>
                  <h4 className="font-bold mb-2">United Kingdom</h4>
                  <p className="text-gray-700">
                    Support for applications to Russell Group, red-brick, and other accredited UK universities across all regions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-blue-600">🇨🇦</div>
                <div>
                  <h4 className="font-bold mb-2">Canada</h4>
                  <p className="text-gray-700">
                    Guidance for applications to research-intensive and comprehensive universities across Canadian provinces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <p className="text-gray-800">
              <strong>Disclaimer:</strong> We do not guarantee admission to any institution. Our role is to help you present the strongest possible application and make informed decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
