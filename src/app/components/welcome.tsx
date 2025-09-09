"use client";

import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

export default function Welcome() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#141414]">
      <Image src="/hero-food.jpg" alt="Hero Food" fill className="object-cover opacity-60" priority />
      <div className="relative z-10 max-w-2xl text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Welcome to <span className="text-red-600">Foodflix</span>
        </h2>
        <p className="mt-4 text-md md:text-lg text-gray-300">
          Discover my personal meal plans and recipes 🍴 blending{" "}
          <span className="text-red-400">American</span>,{" "}
          <span className="text-red-400">Jamaican</span>,{" "}
          <span className="text-red-400">Greek</span>,{" "}
          <span className="text-red-400">Nigerian</span>, and more global flavors 🌍.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition flex items-center mx-auto">
          Explore Recipes <FiChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
