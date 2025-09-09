"use client";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

export default function Welcome() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#141414]">
      <Image
        src="/hero-food.jpg"
        alt="Hero Food"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="relative z-10 max-w-2xl text-center px-4">
        <p className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Dine with <span className="text-red-600">Akunna</span>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          Discover my personal meal plans and recipes 🍴 blending{" "}
          <span className="text-red-400">American</span>,{" "}
          <span className="text-red-400">Jamaican</span>,{" "}
          <span className="text-red-400">Greek</span>,{" "}
          <span className="text-red-400">Nigerian</span>, and more global flavors 🌍
        </p>
        <Link href="/recipes" className="inline-block">
          <button className="px-6 py-3 mt-6 bg-red-600 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex items-center justify-center mx-auto text-black">
            Explore Recipes 
            <FiChevronRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>
  );
}
