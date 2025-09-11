"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cabout = () => {
  return (
    <main className="bg-[#141414] text-gray-200 min-h-screen flex flex-col items-center px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
        About Foodflix
      </h1>

      <div className="max-w-4xl space-y-6 text-center">
        <p className="text-lg md:text-xl">
          Figuring out what to eat or cook can sometimes be a real struggle for me. 
          That’s why I created <span className="text-red-600 font-semibold">Foodflix</span> — a place to inspire myself 
          and keep track of meal ideas.
        </p>

        <p className="text-lg md:text-xl">
          On this app, you’ll find pictures of meals I’ve made and enjoyed in addition to a few drinks, recipes I’ve experimented with, 
          and my creative twists in the kitchen. It’s all about exploring flavors, trying new combinations, and 
          making cooking fun.
        </p>

        <p className="text-lg md:text-xl">
          I try my best to include meals that are healthy, meaning they’re full of nutrients from each food group, 
          packed with vitamins, and balanced for your body. Foodflix isn’t just about eating, it’s about eating well 
          and feeling good while being creative in the kitchen.
        </p>
      </div>

      {/* Images side by side on large screens, stacked on small screens */}
      <div className="mt-12 w-full max-w-5xl flex flex-col md:flex-row gap-6">
        <div className="flex-1 rounded-md overflow-hidden shadow-lg">
          <Image
            src="/photos/dinner.jpg"
            alt="Dinner"
            width={800}
            height={400}
            className="object-cover w-full h-[580px] rounded-md"
            priority
          />
        </div>
        <div className="flex-1 rounded-md overflow-hidden shadow-lg">
          <Image
            src="/photos/me.jpg"
            alt="Me"
            width={800}
            height={400}
            className="object-cover w-full h-[580px] rounded-md"
            priority
          />
        </div>
      </div>

      <div className="mt-12">
        <Link href="/recipes">
          <button className="px-6 py-3 mt-3 bg-red-600 rounded-lg font-bold hover:bg-red-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex items-center justify-center mx-auto text-white">
            Explore Recipes
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Cabout;
