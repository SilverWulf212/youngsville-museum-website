'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, ArrowRight, Bell } from 'lucide-react'

const upcomingEvents = [
  {
    title: 'Grand Opening Celebration',
    date: 'Coming Soon',
    time: 'TBA',
    location: 'Youngsville History Museum',
    description: 'Join us for the official grand opening of the Youngsville History Museum. Refreshments, live music, and special exhibits.',
    category: 'Special Event',
    featured: true,
  },
]

const eventCategories = [
  {
    name: 'Educational Programs',
    description: 'School field trips, lectures, and workshops exploring Youngsville and Acadian history.',
    icon: Users,
  },
  {
    name: 'Community Events',
    description: 'Seasonal celebrations, heritage festivals, and family-friendly activities.',
    icon: Calendar,
  },
  {
    name: 'Member Events',
    description: 'Exclusive previews, behind-the-scenes tours, and special gatherings for museum members.',
    icon: Bell,
  },
]

export default function EventsPageClient() {
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
              What&apos;s Happening
            </span>
            <h1 className="heading-display text-white mt-4 mb-6">
              Events &{' '}
              <span className="text-museum-red">Programs</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Discover upcoming events, educational programs, and community celebrations
              at the Youngsville History Museum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-museum-red/5 border-2 border-museum-red/20 p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <Calendar className="w-16 h-16 text-museum-red mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display text-museum-charcoal mb-4">
              Events Calendar Coming Soon
            </h2>
            <p className="text-lg text-museum-charcoal-light mb-6">
              As we prepare for our grand opening, we&apos;re planning an exciting calendar
              of events, programs, and community celebrations. Subscribe to our newsletter
              to be the first to know about upcoming activities.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Notified
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.filter(e => e.featured).map((event) => (
        <section key={event.title} className="section-padding bg-museum-cream">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl p-8 md:p-12"
            >
              <span className="inline-block px-4 py-2 bg-museum-red text-white text-sm font-medium uppercase tracking-wider mb-6">
                {event.category}
              </span>
              <h2 className="heading-section text-museum-charcoal mb-6">
                {event.title}
              </h2>
              <p className="text-lg text-museum-charcoal-light mb-8 max-w-2xl">
                {event.description}
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-museum-red" />
                  <div>
                    <p className="text-sm text-museum-charcoal-light">Date</p>
                    <p className="font-semibold text-museum-charcoal">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-museum-red" />
                  <div>
                    <p className="text-sm text-museum-charcoal-light">Time</p>
                    <p className="font-semibold text-museum-charcoal">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-museum-red" />
                  <div>
                    <p className="text-sm text-museum-charcoal-light">Location</p>
                    <p className="font-semibold text-museum-charcoal">{event.location}</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="btn-secondary group">
                Get Updates
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Event Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Program Types
            </span>
            <h2 className="heading-section text-museum-charcoal mt-4">
              What to Expect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-museum-cream-light"
              >
                <div className="w-16 h-16 bg-museum-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-museum-red" />
                </div>
                <h3 className="text-xl font-semibold text-museum-charcoal mb-3">
                  {category.name}
                </h3>
                <p className="text-museum-charcoal-light">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-museum-charcoal text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section text-white mb-6">
              Host Your Event With Us
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              The Youngsville History Museum offers a unique venue for private events,
              corporate gatherings, and community celebrations. Contact us to learn more.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-museum-red text-white font-semibold hover:bg-museum-red-dark transition-colors"
            >
              Inquire About Events
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
