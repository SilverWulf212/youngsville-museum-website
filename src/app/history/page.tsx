import { Metadata } from 'next'
import HistoryPageClient from '@/components/HistoryPageClient'

export const metadata: Metadata = {
  title: 'Youngsville History Museum | (337) 251-3216 | Local History | Youngsville Louisiana Timeline',
  description: 'Explore the complete history of Youngsville, Louisiana from the Acadian exile of 1755 to becoming Louisiana\'s fastest-growing city. Discover our timeline, notable figures, and Cajun heritage.',
  alternates: {
    canonical: 'https://www.youngsvillehistorymuseum.com/history',
  },
}

export default function HistoryPage() {
  return <HistoryPageClient />
}
