"use client";

import Image from "next/image";
import React from "react";

const drinks = [
  {
    name: "Nutty Banana Bliss",
    ingredients: [
      "Cinnamon sticks",
      "Peanut butter",
      "Bananas",
      "Coconut milk",
      "Ice",
      "Protein powder",
      "Honey",
    ],
    image: "/photos/drink3.jpg",
  },
  {
    name: "Watermelon Splash",
    ingredients: ["Just watermelon chunks with no seeds added"],
    image: "/photos/drink1.jpg",
  },
  {
    name: "Pina Colada",
    ingredients: ["Pineapples", "Canned coconut milk"],
    image: "/photos/drink2.jpg",
  },
  {
    name: "Oats Protein Smoothie",
    ingredients: [
      "Oats",
      "Protein powder",
      "Chia seeds (little)",
      "Honey",
      "Bananas",
      "Coconut milk",
      "Ice",
    ],
    image: "/photos/drink4.jpg",
  },
  {
    name: "Banana Avocado Smoothie",
    ingredients: [
      "Bananas",
      "Avocados",
      "Oats",
      "Ice",
      "Protein powder",
      "Cinnamon sticks",
      "Honey",
      "Peanut butter",
      "Coconut milk",
    ],
    image: "/photos/drink5.jpg",
  },
  {
    name: "Fruity Nutri Blend",
    ingredients: [
      "Fruit blend (mangoes, peaches, strawberries, etc.)",
      "Cinnamon sticks",
      "Coconut milk",
      "Peanut butter",
      "Honey",
    ],
    image: "/photos/drink6.jpg",
  },
  {
    name: "Black Tea with Milk",
    ingredients: ["Black lipton tea", "2 tbsp powdered milk", "2 tbsp sugar"],
    image: "/photos/drink9.jpg",
  },
    {
    name: "Green Pina Colada",
    ingredients: ["Spinach", "Pineapples", "Coconut milk"],
    image: "/photos/drink7.jpg",
  },
  {
    name: "Coffee with Creamer",
    ingredients: ["Coffee granules", "Chocolate coffee creamer"],
    image: "/photos/drink8.jpg",
  },
];

export default function Cdrinks() {
  return (
    <section className="bg-[#141414] text-gray-200 px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Drink Recipes
      </h1>

      {/* Grid for 2 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {drinks.map((drink, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center space-y-6 bg-[#1f1f1f] rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-3 animate-fade-in">
                {drink.name}
              </h2>
              <p className="text-gray-300 animate-fade-in text-sm md:text-base">
                {drink.ingredients.join(", ")}
              </p>
            </div>

            <div className="w-full relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={drink.image}
                alt={drink.name}
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-72"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
