export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">
        About GlowCart
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          alt="GlowCart"
          className="rounded-2xl shadow-lg"
        />

        {/* Text Section */}
        <div>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <span className="font-semibold">GlowCart</span> — your go-to online store for premium beauty and skincare products.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We believe that everyone deserves to feel confident and beautiful. That’s why we bring you the highest quality beauty products at affordable prices.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is simple: provide you with products you can trust, service you can rely on, and an experience you’ll love.
          </p>
        </div>
      </div>
    </div>
  );
}