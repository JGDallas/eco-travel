import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Costa Rica Rainforest",
    description: "Explore the biodiversity of Costa Rica's lush rainforests.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    name: "Norwegian Fjords",
    description: "Experience the majestic beauty of Norway's pristine fjords.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    name: "New Zealand Trails",
    description: "Hike through New Zealand's breathtaking landscapes.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-16 px-4 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Destinations</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Discover eco-friendly destinations where our products are designed to enhance your experience while minimizing
          environmental impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="text-emerald-600 hover:text-emerald-800 font-medium">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

