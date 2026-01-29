import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-museum-cream-light">
      <div className="text-center p-8">
        <h1 className="text-6xl font-display text-museum-red mb-4">404</h1>
        <h2 className="text-2xl text-museum-charcoal mb-6">Page Not Found</h2>
        <p className="text-museum-charcoal-light mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
