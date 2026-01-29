import { Metadata } from 'next'
import SupportPageClient from '@/components/SupportPageClient'

export const metadata: Metadata = {
  title: 'Youngsville History Museum | (337) 251-3216 | Support Us | Donate to Preserve History',
  description: 'Support the Youngsville History Museum through donations, memberships, sponsorships, or volunteering. Help preserve Youngsville\'s heritage for future generations.',
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com/support',
  },
}

export default function SupportPage() {
  return <SupportPageClient />
}
