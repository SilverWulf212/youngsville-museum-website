import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'

export const metadata: Metadata = {
  title: 'Youngsville History Museum | (337) 251-3216 | Louisiana Heritage | Acadian History Exhibits',
  description: 'Discover the rich Acadian heritage and history of Youngsville, Louisiana at the Youngsville History Museum. Explore exhibits, artifacts, and stories from over 200 years of Louisiana culture. Plan your visit today.',
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
