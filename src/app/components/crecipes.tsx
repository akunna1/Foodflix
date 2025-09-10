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
        title: "Yoghurt with Fruits",
        image: "/photos/dessert1.jpg",
        ingredients: ["Strawberries", "Coconut flakes", "Chia seeds", "Blueberries", "Kiwis", "Medjool dates", "Vanilla greek yoghurt"],
        instructions: "Add yoghurt first then the toppings",
      },
      {
        title: "Cocoa Banana Oat Cake",
        image: "/photos/dessert6.jpg",
        ingredients: ["2 eggs", "2 bananas", "12 tbsp oat flour", "3 tbsp plain 2% fat yoghurt", "2 tbsp peanut butter", "1.5 tbsp honey", "6 tbsp sugar", "4 tbsp cocoa powder", "1/4 cup almond milk (unsweetened)", "Pinch of salt", "4 tbsp granola"],
        instructions: "Make sure it is not too watery",
      },
    {
        title: "Overnight Oats",
        image: "/photos/dessert2.jpg",
        ingredients: ["Oats", "Bananas", "Strawberries (or other berries)", "Honey", "Protein powder", "Chai seeds", "Milk (goat, cow or almond)", "Fruit powder (optional)", "Granola/Almonds (optional)"],
        instructions: "Leave in fridge overnight",
      },
    {
        title: "Acai Bowl",
        image: "/photos/dessert3.jpg",
        ingredients: ["Medjool dates", "Almond butter", "Spinach", "Unsweetened coconut flakes", "Bananas", "Strawberries", "Blueberries", "Vanilla greek yoghurt", "Chai sees", "Kiwi slices"],
        instructions: "The dates and kiwis do not have to be frozen",
      },  
    {
        title: "Berry Bowl",
        image: "/photos/dessert7.jpg",
        ingredients: ["Raspberries", "Raisins", "Blueberries", "Strawberries", "Vanilla greek yoghurt",],
        instructions: "Wash fruits before eating",
      },
    {
        title: "Apple Slices with Yoghurt",
        image: "/photos/dessert4.jpg",
        ingredients: ["Vanilla Greek Yoghurt", "Green Apple Slices",],
        instructions: "Wash fruits before eating",
      },
    {
        title: "Loaded Fiber Bowl",
        image: "/photos/dessert5.jpg",
        ingredients: ["Chopped almonds", "Chai seeds", "Granola", "Coconut flakes", "Vanilla greek yoghurt", "Raisins/cranberries", "Honey"],
        instructions: "Do not overdo it on the crunchy stuff",
      },
              
    ],
  },
    {
    title: "Quick Meals",
    recipes: [
      {
        title: "Noodles with eggs",
        image: "/photos/quick1.jpg",
        ingredients: ["Shin Noodles", "2 boiled eggs"],
        instructions: "Follow the instructions on noodle packet. You can use any other noodles too.",
      },
      {
        title: "Soft Cereal",
        image: "/photos/quick2.jpg",
        ingredients: ["Powdered Milk", "Golden morn", "Bananas"],
        instructions: "Use hot water to make the milk",
      },
    {
        title: "Ughh I Don't Feel Like Cooking",
        image: "/photos/quick3.jpg",
        ingredients: ["Medjool dates", "Avocado", "A sandwich (optional)", "Tea"],
        instructions: "Scroll down to get some sandwich ideas",
      },
      {
        title: "Agege Bread with Tea",
        image: "/photos/quick4.jpg",
        ingredients: ["Agege bread", "Blue band butter (optional)", "Hot tea",],
        instructions: "Sit down and chop, the storm go pass...",
      },
    ],
  },
    {
    title: "Stir Fries",
    recipes: [
      {
        title: "Green Beans with Shrimp",
        image: "/photos/stir1.jpg",
        ingredients: ["Butter", "Seasoning", "Green Beans", "Shrimp"],
        instructions: "Cook the beans and shrimp in butter",
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
        title: "Akunna sauce with egg sauce",
        image: "/photos/stew1.jpg",
        ingredients: ["Tomatoes", "Bell peppers", "Red onions", "Scotch bonnet", "Boiled plantain (optional)", "Olive oil", "San Marcos chipotle sauce", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Seasoning"],
        instructions: "Chop the bell pepper and onions into long slices, chop the tomatoes and scotch bonnet into small chunks, fry the onions and tomatoes first for the sauce and eggs, fry the eggs without the San Marcos items",
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
        title: "Mediterranean Chickpea & Bean Salad",
        image: "/photos/salad5.jpg",
        ingredients: ["Chickpeas", "Feta cheese", "Spring mix", "Pinto beans", "Balsamic vinaigrette", "Cherry tomatoes"],
        instructions: "Don't overdo it on the dressing",
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
        title: "Everything Rice",
        image: "/photos/rice6.jpg",
        ingredients: ["Long grain white rice", "Chickpeas", "Black beans", "Pinto beans", "Green beans", "Shrimps", "Soy sauce", "Butter", "Seasoning", "Creamy sriracha", "Spinach", "Spring Mix", "Salmon", "Hot sauce", "Jalapenos", "Cucumbers"],
        instructions: "Mix chopped raw salmon with the creamy sriracha, heat up the pinto and black beans separately in a sauce pan, fry the grean beans and shrimps in a pan with butter, seasoning and a little soy sauce, sprinkle hot sauce on everything at the end",
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
    title: "Sides",
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
        title: "Waffle looking Pancakes",
        image: "/photos/mis1.jpg",
        ingredients: ["Powdered milk", "Flour", "Eggs", "Sugar"],
        instructions: "You can use the above ingredients or pancake mix. Make sure the mix is not too watery and cook it in a waffle oven.",
      },
      {
        title: "Burger with Fries",
        image: "/photos/mis2.jpg",
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
            <div className="relative w-full h-48 md:h-56">
              <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-500 mb-2">{recipe.title}</h3>
              <p className="text-white text-sm mb-2">
                <span className="font-bold">Ingredients:</span> {recipe.ingredients.join(", ")}
              </p>
              <p className="text-white text-sm">
                <span className="font-bold">Instructions:</span> {recipe.instructions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
