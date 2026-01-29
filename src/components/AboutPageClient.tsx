'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Users, BookOpen, Award } from 'lucide-react'

export default function AboutPageClient() {
  const values = [
    {
      icon: Heart,
      title: 'Preservation',
      description: 'Safeguarding artifacts, photographs, and documents that tell the story of our community for future generations.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Bringing together residents, families, and visitors to celebrate our shared heritage and diverse cultural roots.',
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Providing engaging programs for students and lifelong learners to connect with local and Louisiana history.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards of historical accuracy, curation, and visitor experience.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-museum-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/sugar-mill-historic.jpg"
            alt="Historic Youngsville"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-museum-charcoal via-museum-charcoal/95 to-museum-charcoal" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              About the Museum
            </span>
            <h1 className="heading-display text-white mt-4 mb-6">
              Preserving the Heart of{' '}
              <span className="text-museum-red">Youngsville</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              The Youngsville History Museum is more than a collection of artifacts—it&apos;s
              a living testament to the resilience, faith, and spirit of a community that
              has thrived for over two centuries in the heart of Louisiana&apos;s Cajun Country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-article bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="heading-section text-museum-charcoal mb-10">Our Story</h2>
              <div className="prose-article text-museum-charcoal-light">
                <p>
                  In the early 1800s, French Acadian farmers—exiles from Nova Scotia who had
                  journeyed through hardship and displacement—found a new home along the bayous
                  of southern Louisiana. Among them was George Roy and his son Desire, who laid
                  out what would become known as &quot;Royville.&quot;
                </p>
                <p>
                  By 1859, the settlement had grown substantial enough to establish St. Etienne
                  Catholic Church on July 29—renamed St. Anne in 1869 and one of the oldest
                  parishes in Lafayette. The church still stands on Church Street, the community&apos;s
                  oldest thoroughfare, a reminder of the faith that has anchored this community
                  through generations.
                </p>
                <p>
                  When the U.S. Post Office required a name change in 1908, residents chose
                  &quot;Youngsville&quot;—a name meaning &quot;young village&quot; that captured the
                  community&apos;s spirit of growth and possibility. That spirit proved prophetic:
                  between 1990 and 2005, Youngsville became Louisiana&apos;s fastest-growing town,
                  with population increases exceeding 300%.
                </p>
                <p>
                  Today, the Youngsville History Museum—established in 2025 by the Youngsville
                  Historical Preservation Society—stands as a guardian of these stories. Our
                  mission is to ensure that the sacrifices, triumphs, and everyday moments that
                  shaped our community are never forgotten.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/museum-building.jpg"
                  alt="Youngsville History Museum exterior"
                  fill
                  className="object-cover transition-transform duration-1000 ease-smooth hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-museum-cream p-8">
                  <span className="font-display text-5xl text-museum-red">2025</span>
                  <p className="text-sm text-museum-charcoal-light mt-3">Museum Established</p>
                </div>
                <div className="bg-museum-cream p-8">
                  <span className="font-display text-5xl text-museum-red">200+</span>
                  <p className="text-sm text-museum-charcoal-light mt-3">Years of History</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-article bg-museum-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-[0.2em]">
              Our Mission
            </span>
            <h2 className="heading-section text-museum-charcoal mt-6 mb-12">
              Preserving our past.<br className="hidden md:block" /> Inspiring our future.
            </h2>
            <p className="text-xl md:text-2xl text-museum-charcoal-light leading-[1.8] mb-12">
              The Youngsville History Museum is dedicated to collecting, preserving, and
              interpreting the history and cultural heritage of Youngsville and the surrounding
              Acadiana region. Through engaging exhibits, educational programs, and community
              partnerships, we strive to connect people of all ages with the stories that have
              shaped our unique Louisiana community.
            </p>
            <div className="w-32 h-[3px] bg-museum-red mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-article bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-[0.2em]">
              What We Stand For
            </span>
            <h2 className="heading-section text-museum-charcoal mt-6">Our Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }}
                className="text-center p-10 bg-museum-cream-light hover:bg-museum-cream transition-all duration-500 ease-smooth"
              >
                <div className="w-20 h-20 bg-museum-red/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <value.icon className="w-10 h-10 text-museum-red" />
                </div>
                <h3 className="text-xl font-semibold text-museum-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-museum-charcoal-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Acadian Heritage Section */}
      <section className="section-article bg-museum-charcoal text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="order-2 lg:order-1"
            >
              <span className="text-museum-red text-sm font-medium uppercase tracking-[0.2em]">
                Our Heritage
              </span>
              <h2 className="heading-section text-white mt-6 mb-10">
                The Acadian Legacy
              </h2>
              <div className="prose-article text-white/80">
                <p>
                  Youngsville&apos;s story is inseparable from the broader narrative of the Acadian
                  people. Beginning August 11, 1755, British forces expelled approximately 11,500
                  Acadians from their homes in Nova Scotia—an event known as the Grand Dérangement.
                  Families were separated, homes burned, and property confiscated. These displaced
                  families wandered for years before finding refuge in the welcoming wetlands of Louisiana.
                </p>
                <p>
                  Here, in what would become Acadiana, they rebuilt their lives. They adapted
                  their traditions to the new landscape, their French language evolving into
                  Cajun French, their cuisine embracing local ingredients like crawfish and
                  andouille. Faith remained central—the Catholic Church serving as both
                  spiritual anchor and community gathering place.
                </p>
                <p>
                  Today, Youngsville sits at the heart of Acadiana—the official 22-parish region
                  designated by Louisiana legislature in 1971. Neighboring Vermilion Parish claims
                  nearly 50% Cajun ancestry, earning the title &quot;The Most Cajun Place on Earth.&quot;
                  The Youngsville History Museum proudly celebrates this heritage while honoring
                  all who have called our Lafayette Parish community home.
                </p>
              </div>
              <Link href="/history" className="btn-primary mt-12 group">
                Explore Our History
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/sugar-mill-historic.jpg"
                  alt="Historic Youngsville Sugar Company"
                  fill
                  className="object-cover transition-transform duration-1000 ease-smooth hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-museum-charcoal/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-base text-white/90 leading-relaxed">
                  <span className="text-museum-red font-semibold">Youngsville Sugar Co.</span> —
                  For generations, sugarcane farming defined life in Youngsville, with horse-drawn
                  carts bringing cane to mills that employed hundreds of local workers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-article bg-museum-red text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="heading-section text-white mb-8">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-14 leading-relaxed">
              Whether through a donation, volunteering your time, or simply visiting to learn
              more, you can help us preserve Youngsville&apos;s heritage for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/support"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-museum-red font-semibold hover:bg-museum-cream transition-all duration-500 ease-smooth group"
              >
                Support the Museum
                <Heart className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-500 ease-smooth"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
