"use client"

import { useCart } from "@/lib/useCart";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeFromCart } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <button
          onClick={() => router.push("/")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="mb-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between border-b pb-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>Rs. {item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="text-right font-bold text-xl mb-6">
        Total: Rs.{" "}
        {items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )}
      </div>
      <button
        onClick={() => router.push("/checkout")}
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg w-full font-semibold"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}