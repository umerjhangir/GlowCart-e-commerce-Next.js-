import { products } from "./data/products";
import ProductGrid from "./components/ProductGrid";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[550px] mb-8">
        <Image
          src="/images/hero.jpg.png" 
          alt="Hero Banner"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Products Section */}
<div className="p-6">
  <h1 className="text-3xl font-bold mb-6 text-center uppercase text-pink-600">
    Best Seller
  </h1>
  <ProductGrid products={products} />
</div>
    </main>
  );
}