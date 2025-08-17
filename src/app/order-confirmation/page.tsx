import Link from 'next/link';

export default function OrderConfirmationPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-gray-400 mb-6">
                Your order has been successfully placed. We will contact you soon for delivery.
            </p>
            <Link
            href="/"
            className="text-pink-600 font-semibold hover:underline"
            >
            Continue Shopping
            </Link>
        </div>
    );
}