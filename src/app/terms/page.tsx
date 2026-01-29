import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | Youngsville History Museum',
  description: 'Terms of use for the Youngsville History Museum website.',
}

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="heading-display text-museum-charcoal mb-8">Terms of Use</h1>

        <div className="prose prose-lg text-museum-charcoal-light">
          <p className="text-xl mb-8">
            Last updated: January 2025
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using the Youngsville History Museum website, you accept and agree to be
            bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Use of Content</h2>
          <p>
            The content on this website, including text, images, and other materials, is owned by or
            licensed to the Youngsville Historical Preservation Society. You may view and download
            content for personal, non-commercial use only.
          </p>
          <p>
            You may not reproduce, distribute, modify, or publicly display any content from this
            website without prior written permission from the Youngsville History Museum.
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Accuracy of Information</h2>
          <p>
            We strive to provide accurate historical information. However, we make no warranties
            about the completeness, reliability, or accuracy of this information. Any action you
            take based on the information on this website is at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">External Links</h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the
            content or privacy practices of these external sites.
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective
            immediately upon posting to this website.
          </p>

          <h2 className="text-2xl font-semibold text-museum-charcoal mt-10 mb-4">Contact Us</h2>
          <p>
            If you have questions about these terms, please contact us at{' '}
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
