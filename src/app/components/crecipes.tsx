"use client";

import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";

type Recipe = {
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
};

type Category = {
  title: string;
  recipes: Recipe[];
};

// Data — replace or expand as needed
const categories: Category[] = [
      {
    title: "Desserts",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Fruit Tart",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
    {
    title: "Quick Meals",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Fruit Tart",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
    {
    title: "Stir Fries",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Fruit Tart",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
    {
    title: "Stews/Sauces",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Fruit Tart",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
    {
    title: "Salads",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Fruit Tart",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
{
    title: "Rice Dishes",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Fruit Tart",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
  {
    title: "Soups",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Fruit Tart",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
  {
    title: "Sandwiches",
    recipes: [
      {
        title: "Spaghetti Bolognese",
        image: "/photos/pasta1.jpg",
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
        instructions: "Cook pasta, sauté beef with onion and garlic, add sauce, combine with pasta.",
      },
      {
        title: "Pesto Penne",
        image: "/photos/pasta2.jpg",
        ingredients: ["Penne", "Basil pesto", "Parmesan cheese"],
        instructions: "Cook penne, mix with pesto, top with cheese, serve.",
      },
    ],
  },
    {
    title: "Pasta Dishes",
    recipes: [
      {
        title: "Spaghetti Bolognese",
        image: "/photos/pasta1.jpg",
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
        instructions: "Cook pasta, sauté beef with onion and garlic, add sauce, combine with pasta.",
      },
      {
        title: "Pesto Penne",
        image: "/photos/pasta2.jpg",
        ingredients: ["Penne", "Basil pesto", "Parmesan cheese"],
        instructions: "Cook penne, mix with pesto, top with cheese, serve.",
      },
    ],
  },
    {
    title: "Soups",
    recipes: [
      {
        title: "Spaghetti Bolognese",
        image: "/photos/pasta1.jpg",
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
        instructions: "Cook pasta, sauté beef with onion and garlic, add sauce, combine with pasta.",
      },
      {
        title: "Pesto Penne",
        image: "/photos/pasta2.jpg",
        ingredients: ["Penne", "Basil pesto", "Parmesan cheese"],
        instructions: "Cook penne, mix with pesto, top with cheese, serve.",
      },
    ],
  },
    {
    title: "Meat Dishes",
    recipes: [
      {
        title: "Spaghetti Bolognese",
        image: "/photos/pasta1.jpg",
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
        instructions: "Cook pasta, sauté beef with onion and garlic, add sauce, combine with pasta.",
      },
      {
        title: "Pesto Penne",
        image: "/photos/pasta2.jpg",
        ingredients: ["Penne", "Basil pesto", "Parmesan cheese"],
        instructions: "Cook penne, mix with pesto, top with cheese, serve.",
      },
    ],
  },
    {
    title: "Miscellaneous",
    recipes: [
      {
        title: "Chocolate Cake",
        image: "/photos/dessert1.jpg",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
        instructions: "Mix ingredients, bake at 350°F for 30 min, let cool, serve.",
      },
      {
        title: "Something",
        image: "/photos/dessert2.jpg",
        ingredients: ["Pastry", "Custard", "Assorted fruits"],
        instructions: "Fill pastry with custard, top with fruits, chill, serve.",
      },
    ],
  },
];

export default function Crecipes() {
  return (
    <section className="space-y-16 px-6 py-16 bg-[#141414]">
      {categories.map((category, idx) => (
        <CategorySlider key={idx} category={category} />
      ))}
    </section>
  );
}

function CategorySlider({ category }: { category: Category }) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    const container = rowRef.current;
    container.scrollBy({
      left: direction === "left" ? -container.clientWidth : container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">{category.title}</h2>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#141414]/70 rounded-full hover:bg-[#141414]/90 transition"
      >
        <FiChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#141414]/70 rounded-full hover:bg-[#141414]/90 transition"
      >
        <FiChevronRight className="h-6 w-6 text-white" />
      </button>

      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-hidden overflow-y-hidden scrollbar-hide"
      >
        {category.recipes.map((recipe, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-64 md:w-72 rounded-lg overflow-hidden bg-[#1e1e1e] transform transition duration-300 hover:scale-105 hover:brightness-90 cursor-pointer"
          >
            <div className="relative w-full h-40 md:h-48">
              <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-500 mb-2">{recipe.title}</h3>
              <p className="text-gray-300 text-sm mb-1">
                <span className="font-semibold">Ingredients:</span> {recipe.ingredients.join(", ")}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Instructions:</span> {recipe.instructions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
