import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="text-white">
                <Logo />
              </div>
              <h3 className="font-bold text-lg">Easy Route Travels</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Independent Study Abroad Admissions Support
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/universities" className="text-gray-300 hover:text-white transition">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/policies#privacy" className="text-gray-300 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-gray-300 hover:text-white transition">
                  Fees & Refunds
                </Link>
              </li>
              <li>
                <Link href="/policies#complaints" className="text-gray-300 hover:text-white transition">
                  Complaints
                </Link>
              </li>
              <li>
                <Link href="/policies#ethics" className="text-gray-300 hover:text-white transition">
                  Ethics Statement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              📧 info@easyroutetravels.com
            </p>
            <p className="text-gray-300 text-sm mb-2">
              📞 +2348135142834
            </p>
            <p className="text-gray-300 text-sm">
              Mon-Fri: 9:00am - 6:00pm GMT
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Easy Route Travels. Independent Study Abroad Admissions Support.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
