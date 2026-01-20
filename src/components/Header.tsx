'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Logo />
            <span className="font-bold text-xl text-blue-600">Easy Route Travels</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/universities" className="text-gray-700 hover:text-blue-600 transition">
                Universities
              </Link>
            </li>
            <li>
              <Link href="/fees" className="text-gray-700 hover:text-blue-600 transition">
                Fees
              </Link>
            </li>
            <li>
              <Link href="/policies" className="text-gray-700 hover:text-blue-600 transition">
                Policies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>

          <Link href="/apply" className="btn-primary">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <ul className="flex flex-col gap-4 pt-4">
              <li>
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/universities" className="text-gray-700 hover:text-blue-600">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-gray-700 hover:text-blue-600">
                  Fees
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-gray-700 hover:text-blue-600">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
