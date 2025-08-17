"use client";
import { useCart } from "@/lib/useCart";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="w-16 border p-1"
                  />
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <p className="text-lg font-semibold">
              Total: $
              {items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
