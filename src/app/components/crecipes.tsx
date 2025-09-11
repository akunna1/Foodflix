"use client";

import Image from "next/image";
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

// Data (unchanged)
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
        ingredients: ["Vanilla greek yoghurt", "Green apple slices",],
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
        ingredients: ["Shin noodles", "2 boiled eggs"],
        instructions: "Follow the instructions on noodle packet. You can use any other noodles too.",
      },
      {
        title: "Raw Fruits",
        image: "/photos/quick5.jpg",
        ingredients: ["Avocados", "Mangoes", "Grapes", "Bananas", "Oranges", "Apples", "Grapefruit"],
        instructions: "Eat whatever is available",
      },
      {
        title: "Soft Cereal",
        image: "/photos/quick2.jpg",
        ingredients: ["Powdered milk", "Golden morn", "Bananas"],
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
        ingredients: ["Butter", "Seasoning", "Green beans", "Shrimp"],
        instructions: "Cook the beans and shrimp in butter",
      },
      {
        title: "Buttered Broccoli and Fried Bell Peppers",
        image: "/photos/stir2.jpg",
        ingredients: ["Onions", "Red bell peppers", "Green bell peppers", "Seasoning", "Butter", "Broccoli", "Olive oil"],
        instructions: "Steam the broccoli first then cook them in butter, fries the bell peppers in oil with the onions and season them. You could add cauliflower to the broccoli ",
      },
    ],
  },
    {
    title: "Stews/Sauces",
    recipes: [
      {
        title: "Akunna sauce with egg sauce",
        image: "/photos/stew1.jpg",
        ingredients: ["Tomatoes", "Bell peppers", "Onions", "Scotch bonnet", "Boiled plantain (optional)", "Olive oil", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Seasoning"],
        instructions: "Chop the bell pepper and onions into long slices, chop the tomatoes and scotch bonnet into small chunks, fry the onions and tomatoes first for the sauce and eggs, fry the eggs without the San Marcos stuff",
      },
      {
        title: "Nigerian Fish Stew",
        image: "/photos/rice5.jpg",
        ingredients: ["Onions", "Bell peppers", "Tomatoes", "Seasoning", "San Marcos chipotle sauce/salsa", "Chopped fish", "San Marcos chipotle peppers in adobe sauce", "Scotch bonnet", "Olive oil"],
        instructions: "Blend the bell peppers, tomatoes, scotch bonnet and the chipotle peppers in adobe sauce. Add the fish last",
      },
      {
        title: "Nigerian Carrot Stew",
        image: "/photos/stew2.jpg",
        ingredients: ["Onions", "Bell peppers", "Carrots", "Tomatoes", "Seasoning", "San Marcos chipotle sauce/salsa", "Cow/goat meat", "San Marcos chipotle peppers in adobe sauce", "Scotch bonnet", "Olive oil"],
        instructions: "Blend the bell peppers, carrots, tomatoes, scotch bonnet and the chipotle peppers in adobe sauce. Boil and seaon the meat and add it to the stew last",
      },
      {
        title: "Palm Oil Sauce",
        image: "/photos/stew3.jpg",
        ingredients: ["Palm oil", "Chopped onions", "Crayfish", "Tomatoes", "Seasoning", "Pumpkin leaves/Spinach", "Cow/goat meat", "Scotch bonnet", "Olive oil"],
        instructions: "Blend the tomatoes to cook them. Eat the sauce with boiled yam or plantain",
      },
      {
        title: "Nigerian Stew with Eggs",
        image: "/photos/stew4.jpg",
        ingredients: ["Onions", "Eggs", "Bell peppers", "Tomatoes", "Seasoning", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Scotch bonnet", "Olive oil"],
        instructions: "Break eggs inside the stew. Eat the sauce with boiled yam, potatoes, or plantain",
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
        title: "Colorful Crunch Salad",
        image: "/photos/salad1.jpg",
        ingredients: ["Raisins", "Cherry tomatoes", "Spinach", "Bell peppers", "Sunflower seeds", "Olives", "Balsamic vinaigrette"],
        instructions: "Chop the bell peppers into small bits",
      },
      {
        title: "Farmer’s Bean Mix",
        image: "/photos/salad2.jpg",
        ingredients: ["Cucumbers", "Cherry tomatoes", "Spinach", "Baby carrots", "Kidney beans", "Black beans", "Celeries", "Apple thyme vinaigrette", "Feta Cheese"],
        instructions: "Chop the baby carrots into smaller bits",
      },
      {
        title: "Triple Bean Salad",
        image: "/photos/salad4.jpg",
        ingredients: ["Chickpeas", "Cherry tomatoes", "Spinach", "Olives", "Kidney beans", "Black beans", "Celeries", "Balsamic vinaigrette", "Feta Cheese"],
        instructions: "Mix all the ingredients in a large bowl",
      },
      {
        title: "Balsamic Berry Bean Salad",
        image: "/photos/salad6.jpg",
        ingredients: ["Blueberries", "Raisins", "Spinach", "Chopped almonds", "Black beans", "Celeries", "Balsamic vinaigrette", "Feta Cheese"],
        instructions: "Defrost the blueberries if needed",
      },
      {
        title: "Raisin Bean Mix",
        image: "/photos/salad3.jpg",
        ingredients: ["Cucumbers", "Raisins", "Cherry tomatoes", "Spinach", "Kidney beans", "Celeries", "Apple thyme vinaigrette", "Feta Cheese"],
        instructions: "Mix all the ingredients in a large bowl",
      },
    ],
  },
{
    title: "Rice Dishes",
    recipes: [
      {
        title: "Everything Rice",
        image: "/photos/rice6.jpg",
        ingredients: ["Long grain white rice", "Chickpeas", "Black beans", "Pinto beans", "Green beans", "Shrimps", "Soy sauce", "Butter", "Seasoning", "Creamy sriracha", "Spinach", "Spring Mix", "Salmon", "Hot sauce", "Jalapenos", "Cucumbers",],
        instructions: "Mix chopped raw salmon with the creamy sriracha, heat up the pinto and black beans separately in a sauce pan, fry the grean beans and shrimps in a pan with butter, seasoning and a little soy sauce, sprinkle hot sauce on everything at the end",
      },
      {
        title: "White Rice and Nigerian Stew with Chicken",
        image: "/photos/rice1.jpg",
        ingredients: ["Long grain white rice", "Onions", "Bell peppers", "Tomatoes", "Seasoning", "San Marcos chipotle sauce/salsa", "Chicken thighs/wings", "San Marcos chipotle peppers in adobe sauce", "Olive oil", "Scotch bonnet",],
        instructions: "Blend the bell peppers, tomatoes, scotch bonnet and the chipotle peppers in adobe sauce. Boil the chicken with seasoning, deep fry it, then put it in the stew",
      },
      {
        title: "Jamaican Rice and Peas",
        image: "/photos/rice2.jpg",
        ingredients: ["Canned kidney beans", "Canned coconut milk", "Long grain white rice"],
        instructions: "Cook the kidney beans first, add coconut milk, then added the washed rice and cook low heat. Add more coconut milk if the rice is still hard after the milk has soaked up",
      },
      {
        title: "Nigerian Jollof Rice",
        image: "/photos/rice3.jpg",
        ingredients: ["Onions", "Bell peppers", "Long grain white rice", "Tomatoes", "Seasoning", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Scotch bonnet"],
        instructions: "Cook the stew first, Add water, then added the washed rice and cook low heat. Add more water if the rice is still hard after the water has soaked up",
      },
      {
        title: "Chipotle Mexican Grill Bowl",
        image: "/photos/rice4.jpg",
        ingredients: ["Black beans", "Queso", "Pinto beans", "Long grain white rice", "Guacamole", "Seasoning", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Mozzarella shredded cheese", "Sweet corn", "Pico de gallo", "Chicken breast", "Onions", "Lettuce", "Olive oil"],
        instructions: "Fry the chopped chicken breast in the chipotle sauce with olive oil, chipotle peppers in adobe sauce, seasoning, and sliced onions",
      },
    ],
  },
  {
    title: "Soups",
    recipes: [
      {
        title: "Corn Chowder",
        image: "/photos/soup1.jpg",
        ingredients: ["Sweet corn", "Boiled potatoes", "Lettuce basil", "Onion", "Butter", "Shredded chicken", "Seasoning", "Milk"],
        instructions: "Melt butter in a pot and sauté the onion until soft. Blend some of the boiled potatoes for creaminess, then add them back with the sautéed onion, the rest of the potatoes, sweet corn, shredded chicken, seasoning, and milk. Simmer gently and finish with fresh lettuce basil",
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
        title: "Sardine Egg Sandwich with Mayo",
        image: "/photos/sand1.jpg",
        ingredients: ["Sliced bread", "Boiled eggs", "Sardine", "Mayo",],
        instructions: "Toasting the bread is optional, mixed mayo in the crushes boiled eggs and the sardine",
      },
      {
        title: "Shawarma",
        image: "/photos/sand8.jpg",
        ingredients: ["Shredded carrots", "Sliced onions", "Shredded cabbage", "Creamy sriracha", "Sausage"],
        instructions: "Use microwaved eggs or boiled eggs",
      },
      {
        title: "Pesto and Turkey Delight",
        image: "/photos/sand4.jpg",
        ingredients: ["Bagel", "Sliced turkey", "Basil pesto", "Tomatoes", "Cream cheese", "Avocado"],
        instructions: "Toasting the bagel is optional and you can substitute the bread type",
      },
      {
        title: "Caprese Verde",
        image: "/photos/sand2.jpg",
        ingredients: ["Bread", "Basil pesto", "Sliced Mozzarella", "Tomatoes", "Spinach/Argula"],
        instructions: "Toast the bread if possible",
      }, 
      {
        title: "Mayo and Oven Eggs Sandwich",
        image: "/photos/sand3.jpg",
        ingredients: ["Sliced bread", "Microwaved eggs", "Mayo",],
        instructions: "Use microwaved eggs or boiled eggs",
      },
      {
        title: "Avocado Egg Toast",
        image: "/photos/sand5.jpg",
        ingredients: ["Bread", "Oven Eggs", "Avocado", "Bacon (optional)"],
        instructions: "Toasting the bread is optional",
      },
     {
        title: "Peanut Butter and Jelly Sandwich",
        image: "/photos/sand6.jpg",
        ingredients: ["Strawberry jame", "Sliced bread", "Peanut butter",],
        instructions: "Eat with tea. If there's no peanut better, use butter",
      },
      {
        title: "Zesty Onion Dog",
        image: "/photos/sand7.jpg",
        ingredients: ["Sausage", "Hot dog bun", "Onions", "Ketchup", "Mayo", "Olive oil"],
        instructions: "Caramalize the onions and mix the ketchup and mayo together to make a sauce to rub on the insides of the bun",
      },   
    ],
  },
    {
    title: "Pasta Dishes",
    recipes: [
      {
        title: "Pesto Pasta Salad",
        image: "/photos/pasta1.jpg",
        ingredients: ["Cherry tomatoes", "Basil pesto", "Elbow macaroni pasta", "Arugula/baby spinach", "Sliced olives", "Feta cheese"],
        instructions: "Eat within four days",
      },
      {
        title: "Tomato Alfredo Pasta",
        image: "/photos/pasta2.jpg",
        ingredients: ["Penne pasta", "Prego tomato sauce", "Alfredo sauce", "Seasoning", "Onions", "Sausages"],
        instructions: "Cook the tomato sauce first, then add the alfredo sauce",
      },
      {
        title: "Jollof Spaghetti with Chicken",
        image: "/photos/pasta3.jpg",
        ingredients: ["Tomatoes", "Chicken wings/thighs", "Spaghetti", "Bell peppers", "Onions", "Olive oil", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Seasoning"],
        instructions: "Chop the bell pepper and onions into long slices, chop the tomatoes into small chunks, fry the onions and tomatoes first for the sauce, add the other stew ingredients after, then the fried chicken",
      },
      {
        title: "Spaghetti with Meatball Sauce",
        image: "/photos/pasta4.jpg",
        ingredients: ["Meatballs", "Onions", "Bell peppers", "Tomatoes", "Seasoning", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Olive oil", "Scotch bonnet", "Spaghetti", "Parmesan cheese",],
        instructions: "Blend the bell peppers, tomatoes, scotch bonnet and the chipotle peppers in adobe sauce",
      },
      {
        title: "Jollof Spaghetti with Chicken and Greens",
        image: "/photos/pasta5.jpg",
        ingredients: ["Tomatoes", "Peas", "Broccoli", "Chicken wings/thighs", "Spaghetti", "Bell peppers", "Onions", "Olive oil", "San Marcos chipotle sauce/salsa", "San Marcos chipotle peppers in adobe sauce", "Seasoning"],
        instructions: "Steam the broccolis first before adding it to the cooked jollof spaghetti",
      },
    ],
  },
    {
    title: "Sides",
    recipes: [
      {
        title: "Fried Plantain",
        image: "/photos/side1.jpg",
        ingredients: ["Plantain", "Olive oil",],
        instructions: "Eat with egg sauce or stew",
      },
    ],
  },
    {
    title: "Meat Dishes",
    recipes: [
      {
        title: "Barbeque Wings",
        image: "/photos/meat1.jpg",
        ingredients: ["Barbeque sauce", "Chicken wings/thighs", "Olive oil", "Seasoning",],
        instructions: "Boil the chicken with seasoning, deep fry it, dip it in the seasoned BBQ sauce, then put it in the oven",
      },
      {
        title: "Buttered Salmon",
        image: "/photos/meat2.jpg",
        ingredients: ["Butter", "Salom",],
        instructions: "Eat with rice",
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
        instructions: "You can use the above ingredients or pancake mix. Make sure the mix is not too watery and cook it in a waffle oven",
      },
      {
        title: "Burger with Fries",
        image: "/photos/mis2.jpg",
        ingredients: ["Fries", "Burger buns", "Beef patty", "Lettuce", "Onions", "Tomatoes", "A1 sauce", "Mayo"],
        instructions: "Cook the patty in ovem, brush the A1 sauce on it while cooking and after, and grill the onions/ You can replace the A1 sauce with BBQ sauce",
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

  // Drag-to-scroll variables
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown = true;
    startX = e.pageX - (rowRef.current?.offsetLeft || 0);
    scrollLeft = rowRef.current?.scrollLeft || 0;
  };

  const onMouseLeave = () => { isDown = false; };
  const onMouseUp = () => { isDown = false; };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !rowRef.current) return;
    e.preventDefault();
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    rowRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative">
      <p className="text-xl md:text-2xl font-bold mb-4 text-white">{category.title}</p>

      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
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
              <p className="text-gray-300 text-sm mb-2">
                <span className="font-bold">Ingredients:</span> {recipe.ingredients.join(", ")}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-bold">Instructions:</span> {recipe.instructions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
