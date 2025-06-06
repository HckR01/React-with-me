import React from 'react';
import Hero from './hero.jsx';

export default function Home() {
  return (
    <section className="relative bg-gray-100 py-20 flex flex-col items-center text-center px-4 overflow-hidden">
      {/* Background image with fade */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/cow home.jpg')" }}
      ></div>

      {/* Content above bg */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">Fresh and Pure Milk Delivered to Your Doorstep</h1>
        <p className="max-w-xl mb-6 text-gray-700">
          Experience the best quality milk straight from the farm. Healthy, fresh, and natural.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Order Now
        </button>
      <Hero />
      </div>

    </section>
  );
}
