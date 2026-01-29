import { Metadata } from 'next'
import EventsPageClient from '@/components/EventsPageClient'

export const metadata: Metadata = {
  title: 'Youngsville History Museum | (337) 251-3216 | Events | Upcoming Museum Programs',
  description: 'Discover upcoming events, educational programs, and community celebrations at the Youngsville History Museum. Subscribe to our newsletter to stay updated on museum activities.',
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com/events',
  },
}

export default function EventsPage() {
  return <EventsPageClient />
}
