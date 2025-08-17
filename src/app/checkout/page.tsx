"use client"

import { useCart } from "@/lib/useCart"
import { useRouter } from "next/navigation"

export default function Checkoutpage() {
    const { items, clearCart } = useCart();
    const router = useRouter();

    const totalprice = items.reduce((total, items) => total + items.price * items.quantity,0);

    const handleplaceorder = () => {
        clearCart();
        router.push("/order-confirmation");
    };

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <button onClick={() => router.push("/")}>Continue Shopping</button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="mb-6 space-y-4">
                {items.map((item) =>(
                    <div key={item.id} className="flex justify-between border-b pb-2">
                        <span>{item.name} x {item.quantity} </span>
                        <span>Rs. {item.price * item.quantity} </span>
                    </div>
                ))}
            </div>

            <div className="text-right font-bold text-xl mb-6">
                Total: Rs. {totalprice}
            </div>

            <button
                onClick={handleplaceorder}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg w-full font-semibold"
                >
                Place Order
                </button>

        </div>
    );
}