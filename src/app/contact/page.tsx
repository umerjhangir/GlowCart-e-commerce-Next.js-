"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions or need help? Fill out the form or reach us directly.
            </p>
          </div>
          <div>
            <p className="font-semibold">📍 Address:</p>
            <p className="text-gray-600">123 Glow Street, Karachi, Pakistan</p>
          </div>
          <div>
            <p className="font-semibold">📧 Email:</p>
            <p className="text-gray-600">support@glowcart.com</p>
          </div>
          <div>
            <p className="font-semibold">📞 Phone:</p>
            <p className="text-gray-600">+92 300 1234567</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:border-pink-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:border-pink-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-pink-600"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}