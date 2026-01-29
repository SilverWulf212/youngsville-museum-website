import { Metadata } from 'next'
import AboutPageClient from '@/components/AboutPageClient'

export const metadata: Metadata = {
  title: 'Youngsville History Museum | (337) 251-3216 | Our Story | Preserving Cajun Culture',
  description: 'Learn about the Youngsville History Museum and our mission to preserve the stories, artifacts, and heritage of Youngsville, Louisiana and the Acadian people for future generations.',
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
