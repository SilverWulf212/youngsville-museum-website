import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.youngsvillehistorymuseum.com'),
  title: {
    default: 'Youngsville History Museum | (337) 251-3216 | Louisiana Heritage | Acadian History Exhibits',
    template: '%s',
  },
  description: 'Discover the rich Acadian heritage and history of Youngsville, Louisiana at the Youngsville History Museum. Explore exhibits, artifacts, and stories from over 200 years of Louisiana culture. Plan your visit today.',
  keywords: [
    'Youngsville History Museum',
    'Louisiana museum',
    'Acadian heritage',
    'Cajun history',
    'Lafayette Parish museum',
    'Louisiana history',
    'Youngsville Louisiana',
    'cultural preservation',
    'local history museum',
    'family attractions Louisiana',
    'Lafayette Parish history',
    'French Acadian culture',
  ],
  authors: [{ name: 'Youngsville Historical Preservation Society' }],
  creator: 'Youngsville Historical Preservation Society',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.youngsvillehistorymuseum.com',
    siteName: 'Youngsville History Museum',
    title: 'Youngsville History Museum | Preserving Louisiana Heritage',
    description: 'Discover the rich Acadian heritage and history of Youngsville, Louisiana. Explore exhibits, artifacts, and stories from over 200 years of Louisiana culture.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Youngsville History Museum - Preserving our past. Inspiring our future.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youngsville History Museum | Louisiana Heritage',
    description: 'Discover the rich Acadian heritage and history of Youngsville, Louisiana at the Youngsville History Museum.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E82C2E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Museum',
              '@id': 'https://www.youngsvillehistorymuseum.com/#museum',
              name: 'Youngsville History Museum',
              alternateName: 'Youngsville Historical Preservation Society',
              description: 'A museum dedicated to preserving the stories, artifacts, and heritage of Youngsville, Louisiana and the Acadian people.',
              url: 'https://www.youngsvillehistorymuseum.com',
              telephone: '+1-337-251-3216',
              foundingDate: '2025',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Youngsville',
                addressRegion: 'LA',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 30.0996,
                longitude: -92.0137,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                description: 'Opening soon - check website for updates',
              },
              priceRange: 'Free',
              isAccessibleForFree: true,
              publicAccess: true,
              sameAs: [
                'https://www.facebook.com/youngsvillehistorymuseum',
              ],
              image: 'https://www.youngsvillehistorymuseum.com/images/museum-building.jpg',
              logo: 'https://www.youngsvillehistorymuseum.com/images/logo.png',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.youngsvillehistorymuseum.com/#organization',
              name: 'Youngsville Historical Preservation Society',
              url: 'https://www.youngsvillehistorymuseum.com',
              logo: 'https://www.youngsvillehistorymuseum.com/images/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-337-251-3216',
                contactType: 'customer service',
                availableLanguage: ['English', 'French'],
              },
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 30.0996,
                  longitude: -92.0137,
                },
                geoRadius: '50000',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
