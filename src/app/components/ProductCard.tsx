import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
  <Link href={`/product/${product.id}`}>
    
    <div className="rounded-2xl border shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-4 w-full h-full">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-xl w-full h-64 object-cover"
      />
      <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
      <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
      <p className="text-pink-600 font-bold mt-2">Rs. {product.price}</p>
    </div>
  </Link>
  );
}