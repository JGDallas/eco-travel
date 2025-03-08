export default function Newsletter() {
  return (
    <section className="py-16 px-4 bg-emerald-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Eco-Travel Community</h2>
        <p className="mb-8 text-emerald-100">
          Subscribe to our newsletter for sustainable travel tips, new product releases, and exclusive offers.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-full text-gray-800 w-full md:w-auto md:flex-1 max-w-md"
            required
          />
          <button
            type="submit"
            className="bg-white text-emerald-800 hover:bg-emerald-100 font-bold py-3 px-8 rounded-full transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

