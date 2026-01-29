import { Metadata } from 'next'
import VisitPageClient from '@/components/VisitPageClient'

export const metadata: Metadata = {
  title: 'Youngsville History Museum | (337) 251-3216 | Plan Your Visit | Museum Hours & Location',
  description: 'Plan your visit to the Youngsville History Museum. Free admission, wheelchair accessible, located in Youngsville, Louisiana in the heart of Acadiana. Get directions, hours, and visitor information.',
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com/visit',
  },
}

export default function VisitPage() {
  return <VisitPageClient />
}
