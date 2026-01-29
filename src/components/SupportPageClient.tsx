'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Heart,
  Star,
  Award,
  Users,
  Building,
  Calendar,
  Gift,
  ArrowRight,
  Check,
} from 'lucide-react'

const donationTiers = [
  {
    name: 'Friend',
    amount: '$25',
    description: 'Support museum operations and preservation efforts',
    benefits: [
      'Recognition on donor wall',
      'Museum newsletter subscription',
      'Invitation to member events',
    ],
    featured: false,
  },
  {
    name: 'Patron',
    amount: '$100',
    description: 'Help us expand exhibits and educational programs',
    benefits: [
      'All Friend benefits',
      'Exclusive behind-the-scenes tour',
      'Recognition in annual report',
      '10% gift shop discount',
    ],
    featured: true,
  },
  {
    name: 'Benefactor',
    amount: '$500',
    description: 'Make a significant impact on preservation efforts',
    benefits: [
      'All Patron benefits',
      'Private curator tour',
      'Complimentary event tickets',
      'Named recognition opportunity',
    ],
    featured: false,
  },
  {
    name: 'Preservationist',
    amount: '$1,000+',
    description: 'Join our leadership circle of supporters',
    benefits: [
      'All Benefactor benefits',
      'Board meeting invitation',
      'Exhibit sponsorship opportunity',
      'Lifetime membership',
    ],
    featured: false,
  },
]

const sponsorshipLevels = [
  {
    icon: Star,
    name: 'Exhibit Sponsor',
    range: '$2,500 - $10,000',
    description: 'Sponsor a permanent or rotating exhibit with naming recognition',
  },
  {
    icon: Calendar,
    name: 'Event Sponsor',
    range: '$500 - $5,000',
    description: 'Support community events, lectures, and educational programs',
  },
  {
    icon: Building,
    name: 'Capital Sponsor',
    range: '$10,000+',
    description: 'Support facility improvements and expansion projects',
  },
]

const volunteerRoles = [
  {
    title: 'Museum Docent',
    commitment: '4-8 hours/week',
    description: 'Lead tours and engage visitors with Youngsville history',
  },
  {
    title: 'Collections Assistant',
    commitment: 'Flexible',
    description: 'Help catalog, preserve, and organize artifacts and documents',
  },
  {
    title: 'Event Support',
    commitment: 'As needed',
    description: 'Assist with special events, programs, and community gatherings',
  },
  {
    title: 'Research Volunteer',
    commitment: 'Flexible',
    description: 'Help research local history, verify facts, and document stories',
  },
]

export default function SupportPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-museum-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Support Our Mission
            </span>
            <h1 className="heading-display text-white mt-4 mb-6">
              Help Preserve{' '}
              <span className="text-museum-red">Our Heritage</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Your generous support ensures that the stories, artifacts, and heritage
              of Youngsville will be preserved for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding bg-white" id="donate">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Make a Donation
            </span>
            <h2 className="heading-section text-museum-charcoal mt-4 mb-4">
              Giving Levels
            </h2>
            <p className="text-museum-charcoal-light max-w-2xl mx-auto">
              Every gift, regardless of size, makes a difference. Choose a giving level
              that&apos;s right for you and help us preserve Youngsville&apos;s heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 ${
                  tier.featured
                    ? 'bg-museum-red text-white shadow-2xl scale-105'
                    : 'bg-museum-cream-light'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-museum-charcoal text-white text-xs uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-semibold mb-2 ${
                  tier.featured ? 'text-white' : 'text-museum-charcoal'
                }`}>
                  {tier.name}
                </h3>
                <div className={`font-display text-4xl mb-4 ${
                  tier.featured ? 'text-white' : 'text-museum-red'
                }`}>
                  {tier.amount}
                </div>
                <p className={`text-sm mb-6 ${
                  tier.featured ? 'text-white/80' : 'text-museum-charcoal-light'
                }`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        tier.featured ? 'text-white' : 'text-museum-red'
                      }`} />
                      <span className={`text-sm ${
                        tier.featured ? 'text-white/80' : 'text-museum-charcoal-light'
                      }`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-semibold transition-colors ${
                    tier.featured
                      ? 'bg-white text-museum-red hover:bg-museum-cream'
                      : 'bg-museum-red text-white hover:bg-museum-red-dark'
                  }`}
                >
                  Donate Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-museum-charcoal-light mt-8"
          >
            The Youngsville Historical Preservation Society is a 501(c)(3) nonprofit organization.
            Your donation may be tax-deductible.
          </motion.p>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="section-padding bg-museum-cream" id="sponsorship">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Corporate Giving
            </span>
            <h2 className="heading-section text-museum-charcoal mt-4 mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-museum-charcoal-light max-w-2xl mx-auto">
              Partner with the museum to make a lasting impact while showcasing your
              organization&apos;s commitment to community and cultural preservation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-museum-red/10 rounded-full flex items-center justify-center mb-6">
                  <level.icon className="w-7 h-7 text-museum-red" />
                </div>
                <h3 className="text-xl font-semibold text-museum-charcoal mb-2">
                  {level.name}
                </h3>
                <p className="text-museum-red font-medium mb-4">{level.range}</p>
                <p className="text-museum-charcoal-light">{level.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/contact" className="btn-secondary group">
              Discuss Sponsorship
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="section-padding bg-museum-charcoal text-white" id="membership">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
                Join Our Community
              </span>
              <h2 className="heading-section text-white mt-4 mb-6">
                Become a Member
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Museum members enjoy exclusive benefits while supporting our mission
                to preserve Youngsville&apos;s heritage. Membership includes:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Free unlimited museum admission',
                  'Members-only events and previews',
                  'Quarterly newsletter with historical insights',
                  'Discounts on museum programs and gift shop',
                  'Reciprocal admission at partner museums',
                  'Satisfaction of supporting local history',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-museum-red" />
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Individual: $50/year
                </button>
                <button className="btn-outline-white">
                  Family: $75/year
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8"
            >
              <Award className="w-12 h-12 text-museum-red mb-6" />
              <h3 className="text-2xl font-display text-white mb-4">
                Charter Member Benefits
              </h3>
              <p className="text-white/80 mb-6">
                As we prepare to open, charter members who join now will receive special
                recognition and benefits:
              </p>
              <ul className="space-y-3">
                {[
                  'Permanent recognition as a founding member',
                  'Exclusive invitation to grand opening ceremony',
                  'First access to exhibit previews',
                  'Special charter member pin and certificate',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-museum-red flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-padding bg-white" id="volunteer">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Give Your Time
            </span>
            <h2 className="heading-section text-museum-charcoal mt-4 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-museum-charcoal-light max-w-2xl mx-auto">
              Share your passion for history and help bring Youngsville&apos;s story to life.
              Volunteers are the heart of our museum.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-museum-cream-light p-6"
              >
                <Users className="w-8 h-8 text-museum-red mb-4" />
                <h3 className="text-lg font-semibold text-museum-charcoal mb-1">
                  {role.title}
                </h3>
                <p className="text-museum-red text-sm mb-3">{role.commitment}</p>
                <p className="text-museum-charcoal-light text-sm">{role.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/contact" className="btn-primary group">
              Apply to Volunteer
              <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="section-padding bg-museum-red text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section text-white mb-6">
              Your Support Makes a Difference
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Every donation, sponsorship, and volunteer hour helps us preserve the
              stories and artifacts that define Youngsville&apos;s unique heritage.
              Thank you for being part of our mission.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-museum-red font-semibold hover:bg-museum-cream transition-colors"
            >
              Contact Us to Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
