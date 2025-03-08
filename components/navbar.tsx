"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-black/30 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            EcoTravel
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Products
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Destinations
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-emerald-300 transition-colors">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#"
              className="block hover:text-emerald-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block hover:text-emerald-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#"
              className="block hover:text-emerald-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="#"
              className="block hover:text-emerald-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block hover:text-emerald-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

