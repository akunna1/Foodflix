"use client";

import React from "react";
import { FiArrowDown } from "react-icons/fi";
import Link from "next/link";

export default function FoodPreview() {
  return (
    <section className="w-full px-8 py-12 flex flex-col items-center text-center bg-[#141414] text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        🍕 Here's a sneak peek of some delicious food!
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Dive in and explore all the mouthwatering{" "}
        <Link
          href="/recipes"
          className="inline-block text-red-500 font-semibold transition-transform duration-200 hover:scale-110"
        >
          Recipes
        </Link>{" "}
        I have for you 👨‍🍳
      </p>
      <FiArrowDown className="text-red-500 text-3xl animate-bounce mb-5" />
    </section>
  );
}
