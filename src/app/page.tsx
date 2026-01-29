'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, ArrowDown, Play } from 'lucide-react'

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }, [isInView, end])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

function Marquee() {
  const items = [
    'Preserving History',
    '•',
    'Acadian Heritage',
    '•',
    'Louisiana Culture',
    '•',
    'Est. 2025',
    '•',
    'Youngsville, LA',
    '•',
  ]

  return (
    <div className="bg-museum-red text-white py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium uppercase tracking-[0.2em]">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <>
      {/* Hero Section - Split Screen */}
      <section ref={heroRef} className="relative min-h-screen flex">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32 bg-museum-cream relative z-10">
          <motion.div
            style={{ y: textY }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="label-text text-museum-red mb-6 block"
            >
              Youngsville History Museum
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-display text-museum-charcoal mb-8"
            >
              Preserving
              <br />
              <span className="text-museum-red">Our Past</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-museum-charcoal-light leading-relaxed mb-10 max-w-md"
            >
              Discover over 200 years of Acadian heritage, from the first French
              settlers to the thriving community of today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/history" className="btn-primary group">
                Explore History
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/support" className="btn-secondary group">
                Support Us
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden lg:flex items-center gap-4 mt-20 text-museum-charcoal-light"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
              <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-0 w-px h-32 bg-museum-red/30 hidden lg:block" />
          <div className="absolute bottom-20 left-20 w-32 h-px bg-museum-red/30 hidden lg:block" />
        </div>

        {/* Right Side - Image */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="hidden lg:block w-1/2 relative overflow-hidden"
        >
          <Image
            src="/images/museum-building.jpg"
            alt="Youngsville History Museum"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-museum-charcoal/20" />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 left-12 bg-white p-6 shadow-2xl max-w-xs"
          >
            <span className="label-text text-museum-red block mb-2">Opening Soon</span>
            <p className="text-museum-charcoal font-display text-2xl">
              Free Admission
            </p>
          </motion.div>
        </motion.div>

        {/* Mobile hero image */}
        <div className="absolute inset-0 lg:hidden -z-10">
          <Image
            src="/images/museum-building.jpg"
            alt="Youngsville History Museum"
            fill
            className="object-cover opacity-20"
          />
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Stats Section - Giant Numbers */}
      <section className="section-padding bg-museum-charcoal text-white relative overflow-hidden texture-grain">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { number: 200, suffix: '+', label: 'Years of History' },
              { number: 1859, suffix: '', label: 'Church Founded' },
              { number: 15929, suffix: '', label: 'Residents (2020)' },
              { number: 300, suffix: '%', label: 'Growth 1990-2005' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center lg:text-left p-4"
              >
                <div className="stat-giant text-white/10 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="label-text text-museum-red">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric */}
      <section className="section-padding bg-white relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/sugar-mill-historic.jpg"
                  alt="Historic Youngsville Sugar Company"
                  fill
                  className="object-cover img-sepia"
                />
              </div>
              {/* Offset accent */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-32 bg-museum-red -z-10" />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 lg:pl-8"
            >
              <span className="label-text text-museum-red mb-4 block">Our Story</span>
              <h2 className="heading-section text-museum-charcoal mb-8 line-accent">
                A Living Chronicle
              </h2>

              <div className="space-y-6 text-lg text-museum-charcoal-light leading-relaxed mb-10">
                <p>
                  In the early 1800s, French Acadian farmers—exiles who had journeyed
                  through hardship after being expelled from Nova Scotia in 1755—found
                  a new home along the bayous of Louisiana.
                </p>
                <p>
                  George Roy and his son Desire laid out what would become known as
                  &quot;Royville.&quot; By 1859, the community had grown substantial enough to
                  establish St. Anne Catholic Church—one of the oldest in Lafayette Parish.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-museum-red pl-6 my-10">
                <p className="text-xl font-display text-museum-charcoal italic">
                  &quot;Every artifact tells a story. Every photograph captures a moment.
                  Every visit creates a memory.&quot;
                </p>
              </blockquote>

              <Link href="/about" className="btn-secondary group">
                Learn Our Full Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Horizontal Scroll */}
      <section className="section-padding bg-museum-cream relative texture-paper">
        <div className="container-custom mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <span className="label-text text-museum-red mb-4 block">Through the Years</span>
              <h2 className="heading-section text-museum-charcoal">Journey Through Time</h2>
            </div>
            <Link href="/history/timeline" className="btn-secondary group self-start md:self-auto">
              Full Timeline
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal timeline */}
        <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {[
              { year: '1755', title: 'Grand Dérangement', desc: 'British expel Acadians from Nova Scotia, beginning their journey to Louisiana.' },
              { year: '1800s', title: 'Royville Founded', desc: 'George Roy and his son Desire establish the settlement.' },
              { year: '1859', title: 'St. Anne Church', desc: 'One of Lafayette Parish\'s oldest Catholic churches is founded.' },
              { year: '1908', title: 'Youngsville Named', desc: 'Post Office requests name change; "young village" is chosen.' },
              { year: '1983', title: 'Town Status', desc: 'Governor Treen officially declares Youngsville a town.' },
              { year: '2006', title: 'City Status', desc: 'Elevated to city after 300%+ population growth.' },
              { year: '2025', title: 'Museum Opens', desc: 'Youngsville History Museum established.' },
            ].map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-80 flex-shrink-0"
              >
                <div className="bg-white p-8 h-full hover-lift border-t-4 border-museum-red">
                  <span className="font-display text-5xl text-museum-red/20">{event.year}</span>
                  <h3 className="text-xl font-semibold text-museum-charcoal mt-4 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-museum-charcoal-light">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/sugar-mill-historic.jpg"
          alt="Historic Youngsville"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-museum-charcoal/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white px-6"
          >
            <p className="label-text text-museum-red mb-4">Historic Youngsville</p>
            <h2 className="heading-section text-white max-w-3xl">
              Where the past meets the present
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Visit CTA - Split */}
      <section className="grid lg:grid-cols-2">
        {/* Left - Dark */}
        <div className="bg-museum-charcoal text-white section-padding px-6 md:px-12 lg:px-20 relative texture-grain">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <span className="label-text text-museum-red mb-4 block">Plan Your Visit</span>
            <h2 className="heading-subsection text-white mb-6">
              Experience History Firsthand
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Walk through exhibits featuring original photographs, documents, and artifacts
              that bring our community&apos;s story to life.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { label: 'Admission', value: 'Free' },
                { label: 'Location', value: 'Youngsville, LA' },
                { label: 'Status', value: 'Opening Soon' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/50">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <Link href="/visit" className="btn-primary group">
              Plan Your Visit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right - Red */}
        <div className="bg-museum-red text-white section-padding px-6 md:px-12 lg:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <span className="label-text text-white/60 mb-4 block">Support Our Mission</span>
            <h2 className="heading-subsection text-white mb-6">
              Help Preserve Our Heritage
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Your donation helps us preserve artifacts, create engaging exhibits, and ensure
              future generations connect with their heritage.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {['$25', '$50', '$100', '$250'].map((amount) => (
                <button
                  key={amount}
                  className="py-4 border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-museum-red transition-all"
                >
                  {amount}
                </button>
              ))}
            </div>

            <Link
              href="/support"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-museum-red font-semibold uppercase tracking-wider text-sm hover:bg-museum-cream transition-all group"
            >
              Make a Donation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter - Minimal */}
      <section className="section-padding-sm bg-museum-cream-light">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-subsection text-museum-charcoal mb-4">
                Stay Connected
              </h2>
              <p className="text-museum-charcoal-light mb-8">
                Get updates on museum events and historical discoveries.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white border-2 border-transparent focus:border-museum-red outline-none transition-colors"
                  required
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
