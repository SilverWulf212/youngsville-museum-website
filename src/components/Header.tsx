'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'History', href: '/history' },
  { name: 'Visit', href: '/visit' },
  { name: 'Events', href: '/events' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <span
                className={`font-display text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-museum-charcoal' : 'text-white'
                }`}
              >
                <span className="text-museum-red">Y</span>oungsville
              </span>
              <span
                className={`block text-[10px] md:text-xs uppercase tracking-[0.3em] transition-colors duration-300 ${
                  isScrolled ? 'text-museum-charcoal-light' : 'text-white/80'
                }`}
              >
                History Museum
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-museum-red transition-all duration-300 group-hover:w-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-museum-red ${
                  isScrolled ? 'text-museum-charcoal' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/support"
              className={`px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-museum-red text-white hover:bg-museum-red-dark'
                  : 'bg-white text-museum-charcoal hover:bg-museum-cream'
              }`}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-museum-charcoal' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-museum-charcoal font-medium hover:text-museum-red transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-center mt-4"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
