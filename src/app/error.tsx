'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-museum-cream-light">
      <div className="text-center p-8">
        <h2 className="text-2xl font-display text-museum-charcoal mb-4">Something went wrong</h2>
        <button
          onClick={() => reset()}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
