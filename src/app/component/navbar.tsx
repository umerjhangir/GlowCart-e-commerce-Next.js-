"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/lib/useCart";

export default function Navbar() {
  const cartItems = useCart((state) => state.items);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between relative">
      {/* Left Side - Logo */}
      <Link href="/" className="text-2xl font-bold text-pink-600">
        GlowCart
      </Link>

      {/* Center - Links */}
      <div className="hidden md:flex gap-8 text-gray-700">
        <Link href="/" className="hover:text-pink-600">Home</Link>
        <Link href="/about" className="hover:text-pink-600">About</Link>
        <Link href="/contact" className="hover:text-pink-600">Contact</Link>
      </div>

      {/* Right Side - Search + Cart */}
      <div className="flex items-center gap-4">
        {/* Search Button */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="hover:text-pink-600 transition-colors cursor-pointer"
        >
          {showSearch ? <X size={24} /> : <Search size={24} />}
        </button>

        {/* Cart Icon */}
        <Link
          href="/cart"
          className="relative flex items-center hover:text-pink-600 transition-colors"
        >
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2 py-0.5">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      {/* Search Input Overlay */}
      {showSearch && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-pink-600"
          />
        </div>
      )}
    </nav>
  );
}