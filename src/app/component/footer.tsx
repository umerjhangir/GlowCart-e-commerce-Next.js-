"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">GlowCart</h2>
          <p className="mt-2 text-sm">
            Your beauty, your style — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <Link href="/products" className="hover:text-pink-600 transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-pink-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-pink-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:text-pink-600 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-600 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-600 transition-colors">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4 text-center text-sm">
        © {new Date().getFullYear()} GlowCart. All rights reserved.
      </div>
    </footer>
  );
}
