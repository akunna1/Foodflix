"use client";

import Image from "next/image";
import React from "react";

const drinks = [
  {
    name: "Watermelon Splash",
    ingredients: ["Just watermelon chunks with no seeds added"],
    image: "/photos/drink1.jpg",
  },
  {
    name: "Pina Colada",
    ingredients: ["Pineapples 🍍", "Canned coconut milk 🥛"],
    image: "/photos/drink2.jpg",
  },
  {
    name: "Nutty Banana Bliss",
    ingredients: [
      "Cinnamon sticks",
      "Peanut butter",
      "Bananas 🍌",
      "Coconut milk 🥛",
      "Ice 🧊",
      "Protein powder",
      "Honey 🍯",
    ],
    image: "/photos/drink3.jpg",
  },
  {
    name: "Oats Protein Smoothie",
    ingredients: [
      "Oats",
      "Protein powder",
      "Chia seeds (little)",
      "Honey 🍯",
      "Bananas 🍌",
      "Coconut milk 🥛",
      "Ice 🧊",
    ],
    image: "/photos/drink4.jpg",
  },
  {
    name: "Banana Avocado Smoothie",
    ingredients: [
      "Bananas 🍌",
      "Avocados 🥑",
      "Oats",
      "Ice 🧊",
      "Protein powder",
      "Cinnamon sticks",
      "Honey 🍯",
      "Peanut butter",
      "Coconut milk",
    ],
    image: "/photos/drink5.jpg",
  },
  {
    name: "Fruity Nutri Blend",
    ingredients: [
      "Fruit blend (mangoes, peaches, strawberries, etc.",
      "Cinnamon sticks",
      "Coconut milk 🥛",
      "Peanut butter",
      "Honey 🍯",
    ],
    image: "/photos/drink6.jpg",
  },
    {
    name: "Green Pina Colada",
    ingredients: [
      "Spinach",
      "Pineapples 🍍",
      "Coconut milk 🥛",
    ],
    image: "/photos/drink7.jpg",
  },
];

export default function Cdrinks() {
  return (
    <section className="bg-[#141414] text-gray-200 px-6 py-16 space-y-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Drink Recipes
      </h1>

      {drinks.map((drink, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center max-w-3xl mx-auto space-y-4"
        >
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
              {drink.name}
            </h2>
            <p className="text-gray-300">
              {drink.ingredients.join(", ")}
            </p>
          </div>

          <div className="w-full relative rounded-md overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:brightness-90">
            <Image
              src={drink.image}
              alt={drink.name}
              width={800}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      ))}
    </section>
  );
}
