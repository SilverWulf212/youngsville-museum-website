'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Clock,
  MapPin,
  Car,
  Accessibility,
  Camera,
  Users,
  Phone,
  CalendarDays,
  Info,
  Heart,
} from 'lucide-react'

export default function VisitPageClient() {
  const visitInfo = [
    {
      icon: Clock,
      title: 'Hours',
      content: 'Opening Soon',
      detail: 'Check back for updated hours of operation',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Youngsville, Louisiana',
      detail: 'Lafayette Parish, Acadiana Region',
    },
    {
      icon: Heart,
      title: 'Admission',
      content: 'Free Admission',
      detail: 'Donations gratefully accepted',
    },
    {
      icon: Phone,
      title: 'Contact',
      content: '(337) 251-3216',
      detail: 'info@youngsvillehistorymuseum.com',
    },
  ]

  const guidelines = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Photography for personal use is welcome throughout most of the museum. Flash photography and tripods are not permitted.',
    },
    {
      icon: Users,
      title: 'Group Visits',
      description: 'We welcome school groups, tour groups, and organizations. Please contact us in advance to arrange your visit.',
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      description: 'The museum is wheelchair accessible with ramps and wide doorways. Service animals are welcome.',
    },
    {
      icon: CalendarDays,
      title: 'Special Events',
      description: 'Check our events page for special programs, lectures, and community celebrations throughout the year.',
    },
  ]

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
              Plan Your Visit
            </span>
            <h1 className="heading-display text-white mt-4 mb-6">
              Visit the{' '}
              <span className="text-museum-red">Museum</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Step inside the Youngsville History Museum and walk through two centuries
              of Acadian resilience, from the bayou settlements to Louisiana&apos;s fastest-growing city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-20 -mt-10">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visitInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-xl p-6"
              >
                <info.icon className="w-8 h-8 text-museum-red mb-4" />
                <h3 className="text-sm text-museum-charcoal-light uppercase tracking-wider mb-1">
                  {info.title}
                </h3>
                <p className="text-xl font-semibold text-museum-charcoal mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-museum-charcoal-light">{info.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Soon Notice */}
      <section className="section-padding bg-white" id="hours">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-museum-red/5 border-2 border-museum-red/20 p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-museum-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Info className="w-8 h-8 text-museum-red" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display text-museum-charcoal mb-4">
              Opening Soon
            </h2>
            <p className="text-lg text-museum-charcoal-light mb-6">
              The Youngsville History Museum is currently preparing for our grand opening.
              Subscribe to our newsletter or follow us on social media to be the first to
              know when we open our doors to the public.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Notified
              </Link>
              <Link href="/support" className="btn-secondary">
                Support Our Opening
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="section-padding bg-museum-cream" id="directions">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
                Location
              </span>
              <h2 className="heading-section text-museum-charcoal mt-4 mb-6">
                Getting Here
              </h2>
              <div className="prose prose-lg text-museum-charcoal-light mb-8">
                <p>
                  The Youngsville History Museum is located in the heart of Youngsville,
                  Louisiana—part of the Lafayette metropolitan area in the Acadiana region.
                  We are easily accessible from Interstate 10 and Highway 90.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-museum-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-museum-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-museum-charcoal mb-1">By Car</h4>
                    <p className="text-museum-charcoal-light text-sm">
                      From Lafayette: Take Johnston Street south, which becomes LA-92.
                      Continue into Youngsville. Free parking is available on-site.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-museum-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-museum-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-museum-charcoal mb-1">Nearby Attractions</h4>
                    <p className="text-museum-charcoal-light text-sm">
                      While in the area, visit Vermilionville, the Acadian Cultural Center,
                      or explore downtown Lafayette&apos;s restaurants and shops.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-museum-charcoal-light/10 aspect-video flex items-center justify-center"
            >
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-museum-red mx-auto mb-4" />
                <p className="text-museum-charcoal">
                  Interactive map coming soon
                </p>
                <p className="text-sm text-museum-charcoal-light mt-2">
                  Youngsville, Louisiana 70592
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visitor Guidelines */}
      <section className="section-padding bg-white" id="accessibility">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Before You Visit
            </span>
            <h2 className="heading-section text-museum-charcoal mt-4">
              Visitor Information
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {guidelines.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 bg-museum-cream-light"
              >
                <div className="w-14 h-14 bg-museum-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-museum-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-museum-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-museum-charcoal-light">{item.description}</p>
                </div>
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
              Questions?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Have questions about visiting the museum? We&apos;re here to help.
              Contact us for more information about group visits, accessibility,
              or any other inquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-museum-red text-white font-semibold hover:bg-museum-red-dark transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
