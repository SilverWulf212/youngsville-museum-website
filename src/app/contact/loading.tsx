export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-museum-cream">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-museum-red/20 border-t-museum-red rounded-full animate-spin mx-auto mb-4" />
        <p className="text-museum-charcoal-light text-sm uppercase tracking-wider">Loading...</p>
      </div>
    </div>
  )
}
