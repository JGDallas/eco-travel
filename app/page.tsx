import VideoBackground from "@/components/video-background"
import ProductShowcase from "@/components/product-showcase"
import FeaturedDestinations from "@/components/featured-destinations"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section with video background */}
      <section className="relative h-screen">
        <VideoBackground />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Discover Sustainable Adventures</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
            Eco-friendly travel gear for your next journey into nature
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <ProductShowcase />

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </main>
  )
}

