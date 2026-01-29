'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Clock } from 'lucide-react'

const footerLinks = {
  explore: [
    { name: 'About the Museum', href: '/about' },
    { name: 'Youngsville History', href: '/history' },
    { name: 'Timeline', href: '/history/timeline' },
    { name: 'Photo Gallery', href: '/gallery' },
  ],
  visit: [
    { name: 'Plan Your Visit', href: '/visit' },
    { name: 'Hours & Admission', href: '/visit#hours' },
    { name: 'Directions', href: '/visit#directions' },
    { name: 'Accessibility', href: '/visit#accessibility' },
  ],
  support: [
    { name: 'Donate', href: '/support' },
    { name: 'Become a Member', href: '/support#membership' },
    { name: 'Sponsorship', href: '/support#sponsorship' },
    { name: 'Volunteer', href: '/support#volunteer' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-museum-charcoal text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl tracking-tight">
                <span className="text-museum-red">Y</span>oungsville
              </span>
              <span className="block text-xs uppercase tracking-[0.3em] text-white/60">
                History Museum
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Preserving our past. Inspiring our future. The Youngsville History Museum
              is dedicated to safeguarding the rich heritage of Youngsville, Louisiana
              and the Acadian people for generations to come.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/youngsvillehistorymuseum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-museum-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-museum-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-museum-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Visit
            </h3>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-museum-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-museum-red flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Youngsville, Louisiana
                  <br />
                  Lafayette Parish
                </span>
              </li>
              <li>
                <a
                  href="tel:+13372513216"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-museum-red transition-colors"
                >
                  <Phone className="w-5 h-5 text-museum-red flex-shrink-0" />
                  (337) 251-3216
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@youngsvillehistorymuseum.com"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-museum-red transition-colors"
                >
                  <Mail className="w-5 h-5 text-museum-red flex-shrink-0" />
                  info@youngsvillehistorymuseum.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-museum-red flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Opening Soon
                  <br />
                  <span className="text-museum-red">Check back for hours</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} Youngsville Historical Preservation Society. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
