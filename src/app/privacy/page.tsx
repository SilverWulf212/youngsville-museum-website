import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Youngsville History Museum',
  description: 'Privacy policy for the Youngsville History Museum website.',
}

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="heading-display text-museum-charcoal mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-museum-charcoal-light">
          <p className="text-xl mb-8">
            Last updated: January 2025
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Information We Collect</h2>
          <p>
            The Youngsville History Museum collects information you voluntarily provide when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our website</li>
            <li>Make a donation</li>
            <li>Register for events or programs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Send you museum news and updates (if subscribed)</li>
            <li>Respond to your inquiries</li>
            <li>Process donations and provide tax receipts</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties.
            We may share information with trusted service providers who assist us in operating our
            website and conducting our mission, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="mailto:info@youngsvillehistorymuseum.com" className="text-museum-red hover:underline">
              info@youngsvillehistorymuseum.com
            </a>{' '}
            or call <a href="tel:+13372513216" className="text-museum-red hover:underline">(337) 251-3216</a>.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-museum-cream">
          <Link href="/" className="text-museum-red hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
