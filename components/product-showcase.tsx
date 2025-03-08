import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getProducts } from "@/app/actions"

export default async function ProductShowcase() {
  const products = await getProducts()

  return (
    <section className="py-16 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sustainable Travel Gear</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image src={product.image_url || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-emerald-600">${product.price.toFixed(2)}</span>
                  <button className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

