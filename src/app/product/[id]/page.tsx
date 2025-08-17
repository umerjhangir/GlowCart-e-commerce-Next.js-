"use client";

import { useCart } from "@/lib/useCart";
import { use } from "react";
import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  params: Promise<{ id: string }>;
}

// Dummy review data
const reviews = [
  {
    id: 1,
    user: "Ali Khan",
    rating: 5,
    comment: "Bohat acha product hai, quality zabardast!",
  },
  {
    id: 2,
    user: "Sara Ahmed",
    rating: 4,
    comment: "Product acha hai lekin delivery thodi late hui.",
  },
];

export default function ProductDetailpage({ params }: Props) {
  const { id } = use(params);
  const addItem = useCart((state) => state.addItem);

  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg w-full h-[400px] object-cover"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-pink-600 font-bold text-xl mb-6">
              Rs. {product.price}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value)))
              }
              className="w-20"
              min={1}
            />
            <Button
              onClick={() => addItem(product, quantity)}
              className="bg-pink-600 text-white hover:bg-pink-700 transition-colors cursor-pointer"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <p className="font-semibold">{review.user}</p>
                <p className="text-yellow-500">
                  {"⭐".repeat(review.rating)}
                </p>
                <p className="text-gray-600 mt-1">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Add Review Form */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Write a Review</h3>
        <Input placeholder="Your name" className="mb-2" />
        <Input placeholder="Rating (1-5)" type="number" className="mb-2" />
        <textarea
          placeholder="Your comment"
          className="w-full border rounded-md p-2 mb-2"
          rows={4}
        ></textarea>
        <Button className="bg-pink-600 text-white hover:bg-pink-700">
          Submit Review
        </Button>
      </div>
    </div>
  );
}