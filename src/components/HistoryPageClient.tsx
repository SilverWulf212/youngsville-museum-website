'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Users, Landmark } from 'lucide-react'

const timelineData = [
  {
    era: 'Early Settlement',
    years: '1755-1859',
    events: [
      {
        year: '1755',
        title: 'The Grand Dérangement',
        description: 'On August 11, British forces begin expelling Acadians from Nova Scotia. Of 14,100 Acadians, approximately 11,500 are deported—families separated, homes burned, property confiscated. Over the following decades, survivors make their way to Louisiana, drawn by the French-speaking culture and welcoming bayou lands.',
        type: 'milestone',
      },
      {
        year: '~1800',
        title: 'Founding of Royville',
        description: 'George Roy and his son Desire lay out the settlement that would become Youngsville, naming it "Royville" after their family. French Acadian farmers establish homesteads, cultivating the rich agricultural land.',
        type: 'founding',
      },
      {
        year: '1859',
        title: 'St. Etienne Catholic Church Founded',
        description: 'On July 29, the community establishes St. Etienne (St. Stephen) Church on Church Street—one of the oldest Catholic parishes in Lafayette. Renamed St. Anne in 1869, the church becomes the spiritual and social center of the growing community.',
        type: 'milestone',
      },
    ],
  },
  {
    era: 'Growth & Agriculture',
    years: '1860-1950',
    events: [
      {
        year: '1908',
        title: 'Youngsville Named',
        description: 'When the U.S. Post Office requires a unique name change, citizens choose "Youngsville"—meaning "young village"—capturing the community\'s youthful spirit and ambition for growth.',
        type: 'milestone',
      },
      {
        year: '~1910-1940',
        title: 'Sugar Industry Boom',
        description: 'The Youngsville Sugar Company becomes a major employer, with horse-drawn carts bringing sugarcane from surrounding farms to the mill. Agriculture defines life in Youngsville, with rice and sugarcane dominating the landscape.',
        type: 'economic',
      },
      {
        year: '1894',
        title: 'Dudley J. LeBlanc Born',
        description: '"Couzin Dud" LeBlanc is born August 16 in Capitan Community near Youngsville. He would serve multiple terms as Louisiana State Senator, champion the old age pension that inspired Social Security, and create Hadacol—a patent medicine whose celebrity-studded caravan featured Hank Williams and Mickey Rooney.',
        type: 'notable',
      },
    ],
  },
  {
    era: 'Modern Development',
    years: '1950-2000',
    events: [
      {
        year: '1983',
        title: 'Town Status',
        description: 'Governor David Treen officially declares Youngsville a town, establishing formal municipal governance with a Mayor and five Aldermen structure that continues to this day.',
        type: 'government',
      },
      {
        year: '1990-2005',
        title: 'Fastest Growing Town',
        description: 'Youngsville becomes statistically Louisiana\'s fastest-growing town, with population increasing by over 300%. New families discover the community\'s charm while longtime residents maintain its character.',
        type: 'milestone',
      },
    ],
  },
  {
    era: 'City of Youngsville',
    years: '2000-Present',
    events: [
      {
        year: '2006',
        title: 'City Status Achieved',
        description: 'Governor Kathleen Blanco elevates Youngsville to city status following its dramatic growth. The population has transformed from a small village to a thriving community of over 15,000 residents.',
        type: 'government',
      },
      {
        year: '2010',
        title: 'Continued Growth',
        description: 'Census records show 103% population growth in just one decade (2000-2010), confirming Youngsville\'s position as one of Louisiana\'s most dynamic communities.',
        type: 'milestone',
      },
      {
        year: '2025',
        title: 'History Museum Established',
        description: 'The Youngsville Historical Preservation Society opens the Youngsville History Museum, dedicated to preserving the stories, artifacts, and heritage of this remarkable community.',
        type: 'founding',
      },
    ],
  },
]

const notableFigures = [
  {
    name: 'George Roy',
    years: 'Early 1800s',
    description: 'Founder of Royville, the settlement that would become Youngsville. A French Acadian farmer who helped establish the community.',
  },
  {
    name: 'Dudley J. LeBlanc',
    years: '1894-1971',
    description: 'Born in Capitan Community near Youngsville, "Couzin Dud" served multiple terms as Louisiana State Senator and created the Hadacol patent medicine empire. A devoted Cajun culture preservationist, he authored The True Story of the Acadians (1927) and The Acadian Miracle (1966).',
  },
]

export default function HistoryPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-museum-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/sugar-mill-historic.jpg"
            alt="Historic Youngsville"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-museum-charcoal via-museum-charcoal/90 to-museum-charcoal" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-wider">
              Our Rich Heritage
            </span>
            <h1 className="heading-display text-white mt-4 mb-6">
              The History of{' '}
              <span className="text-museum-red">Youngsville</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From Acadian exile to Louisiana&apos;s fastest-growing city—discover the remarkable
              journey of a community built on faith, family, and an unwavering spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-article bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="heading-section text-museum-charcoal mb-10">
                A Story of Resilience
              </h2>
              <div className="prose-article text-museum-charcoal-light">
                <p>
                  The story of Youngsville is the story of the Acadian people—French colonists
                  who built lives in Nova Scotia only to be expelled by British forces in 1755.
                  After years of wandering, many found their way to Louisiana, where they could
                  practice their Catholic faith freely and preserve their French language and customs.
                </p>
                <p>
                  In the fertile lands along Louisiana&apos;s bayous, these exiles—who would become
                  known as Cajuns—created a new homeland. Youngsville emerged as one of many
                  settlements where Acadian culture took root and flourished, adapting traditions
                  to the new landscape while preserving the essential character that had sustained
                  them through displacement.
                </p>
                <p>
                  Today, Youngsville stands as a testament to that resilience. From a small
                  farming village named Royville to a thriving city of over 15,000, the community
                  has grown while maintaining the values of faith, family, and community that
                  have defined it for over two centuries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-museum-cream p-8">
                <Calendar className="w-10 h-10 text-museum-red mb-5" />
                <span className="font-display text-4xl text-museum-charcoal">200+</span>
                <p className="text-sm text-museum-charcoal-light mt-2">Years of History</p>
              </div>
              <div className="bg-museum-cream p-8">
                <MapPin className="w-10 h-10 text-museum-red mb-5" />
                <span className="font-display text-4xl text-museum-charcoal">Acadiana</span>
                <p className="text-sm text-museum-charcoal-light mt-2">Heart of Cajun Country</p>
              </div>
              <div className="bg-museum-cream p-8">
                <Users className="w-10 h-10 text-museum-red mb-5" />
                <span className="font-display text-4xl text-museum-charcoal">15,000+</span>
                <p className="text-sm text-museum-charcoal-light mt-2">Residents Today</p>
              </div>
              <div className="bg-museum-cream p-8">
                <Landmark className="w-10 h-10 text-museum-red mb-5" />
                <span className="font-display text-4xl text-museum-charcoal">1859</span>
                <p className="text-sm text-museum-charcoal-light mt-2">St. Anne Founded</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-article bg-museum-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <span className="text-museum-red text-sm font-medium uppercase tracking-[0.2em]">
              Through the Centuries
            </span>
            <h2 className="heading-section text-museum-charcoal mt-6">
              Complete Timeline
            </h2>
          </motion.div>

          <div className="space-y-20">
            {timelineData.map((era, eraIndex) => (
              <motion.div
                key={era.era}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: eraIndex * 0.1 }}
              >
                {/* Era Header */}
                <div className="flex items-center gap-6 mb-12">
                  <div className="flex-shrink-0">
                    <span className="text-museum-red font-display text-3xl">{era.years}</span>
                  </div>
                  <div className="h-px bg-museum-red/30 flex-grow" />
                  <h3 className="text-2xl font-semibold text-museum-charcoal">{era.era}</h3>
                  <div className="h-px bg-museum-red/30 flex-grow" />
                </div>

                {/* Events */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {era.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: eventIndex * 0.12 }}
                      className={`bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-smooth border-l-4 ${
                        event.type === 'milestone'
                          ? 'border-museum-red'
                          : event.type === 'founding'
                          ? 'border-green-500'
                          : event.type === 'notable'
                          ? 'border-blue-500'
                          : 'border-museum-charcoal-light'
                      }`}
                    >
                      <span className="text-museum-red font-display text-2xl">{event.year}</span>
                      <h4 className="text-lg font-semibold text-museum-charcoal mt-3 mb-4">
                        {event.title}
                      </h4>
                      <p className="text-museum-charcoal-light leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Figures Section */}
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
              Remarkable People
            </span>
            <h2 className="heading-section text-museum-charcoal mt-6">
              Notable Figures
            </h2>
            <p className="text-xl text-museum-charcoal-light max-w-2xl mx-auto mt-6 leading-relaxed">
              Throughout its history, Youngsville has been home to remarkable individuals
              who have shaped the community and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {notableFigures.map((figure, index) => (
              <motion.div
                key={figure.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }}
                className="bg-museum-cream p-10"
              >
                <div className="w-20 h-20 bg-museum-red/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-museum-red" />
                </div>
                <h3 className="text-2xl font-semibold text-museum-charcoal">{figure.name}</h3>
                <p className="text-museum-red text-sm mt-1 mb-4">{figure.years}</p>
                <p className="text-museum-charcoal-light leading-relaxed">{figure.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mt-16"
          >
            <Link href="/contact" className="btn-secondary group">
              Share a Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Acadian Culture Section */}
      <section className="section-article bg-museum-charcoal text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="text-museum-red text-sm font-medium uppercase tracking-[0.2em]">
                Living Heritage
              </span>
              <h2 className="heading-section text-white mt-6 mb-10">
                Cajun Culture Today
              </h2>
              <div className="prose-article text-white/80">
                <p>
                  The Acadian heritage that defined early Youngsville remains vibrant today.
                  Vermilion Parish—which borders Lafayette Parish where Youngsville is located—
                  is officially recognized as &quot;The Most Cajun Place on Earth,&quot; with nearly
                  50% of residents claiming Cajun ancestry.
                </p>
                <p>
                  This heritage manifests in countless ways: in the Cajun French still spoken
                  in homes and at community gatherings, in the distinctive cuisine featuring
                  crawfish etouffee and boudin, in the music that fills dance halls, and in
                  the strong family and community bonds that define daily life.
                </p>
                <p>
                  The Youngsville History Museum celebrates this living culture while preserving
                  its roots—ensuring that future generations understand where they came from
                  and can carry these traditions forward.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="bg-white/5 p-10 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">
                Did You Know?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-museum-red text-xl mt-1">*</span>
                  <span className="text-white/85 leading-relaxed">
                    The word &quot;Cajun&quot; evolved from &quot;Acadian,&quot; as French pronunciation
                    shortened &quot;les Acadiens&quot; to &quot;les Cadiens&quot; and eventually &quot;Cajuns&quot;
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-museum-red text-xl mt-1">*</span>
                  <span className="text-white/85 leading-relaxed">
                    Louisiana officially designated 22 parishes as &quot;Acadiana&quot; in 1971,
                    recognizing their strong French Acadian cultural heritage
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-museum-red text-xl mt-1">*</span>
                  <span className="text-white/85 leading-relaxed">
                    St. Anne Church, originally founded as St. Etienne in 1859 and renamed
                    in 1869, remains one of the oldest Catholic parishes in Lafayette Parish
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-museum-red text-xl mt-1">*</span>
                  <span className="text-white/85 leading-relaxed">
                    Youngsville&apos;s 300%+ growth rate between 1990-2005 made it Louisiana&apos;s
                    fastest-growing town
                  </span>
                </li>
              </ul>
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
              Experience History in Person
            </h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-14 leading-relaxed">
              Visit the Youngsville History Museum to see original artifacts, photographs,
              and documents that bring this remarkable story to life.
            </p>
            <Link
              href="/visit"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-museum-red font-semibold hover:bg-museum-cream transition-all duration-500 ease-smooth group"
            >
              Plan Your Visit
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
