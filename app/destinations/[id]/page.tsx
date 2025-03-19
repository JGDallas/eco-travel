import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const destinations = [
  {
    id: "1",
    name: "Costa Rica Rainforest",
    description: "Explore the biodiversity of Costa Rica's lush rainforests.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "2",
    name: "Norwegian Fjords",
    description: "Experience the majestic beauty of Norway's pristine fjords.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "3",
    name: "New Zealand Trails",
    description: "Hike through New Zealand's breathtaking landscapes.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

// This ensures Next.js pre-renders these pages at build time.
export async function generateStaticParams() {
  return destinations.map((dest) => ({ id: dest.id }))
}

type PageParams = {
  id: string
}

export default function DestinationPage({ params }: { params: PageParams }) {
  const destination = destinations.find((dest) => dest.id === params.id)
  if (!destination) {
    return notFound()
  }

  return (
    <main className="max-w-4xl p-8 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{destination.name}</h1>
      <div className="relative h-64 mb-4">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="mb-8 text-lg">{destination.description}</p>
      <Link
        href="/destinations"
        className="text-emerald-600 hover:text-emerald-800"
      >
        Back to Destinations
      </Link>
    </main>
  )
}