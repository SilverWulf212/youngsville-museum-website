import { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Youngsville History Museum | (337) 251-3216 | Contact Us | Get in Touch',
  description: 'Contact the Youngsville History Museum. Call (337) 251-3216 or email us with questions about visits, donations, artifact donations, volunteering, or group tours.',
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
