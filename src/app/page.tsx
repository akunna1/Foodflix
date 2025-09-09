"use client";

import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";

export default function Home() {
  const categories = [
    { title: "Quick Meals", images: ["/food1.jpg", "/food2.jpg", "/food3.jpg", "/food4.jpg", "/food5.jpg"] },
    { title: "Rice Dishes", images: ["/rice1.jpg", "/rice2.jpg", "/rice3.jpg", "/rice4.jpg", "/rice5.jpg"] },
    { title: "Stews & Sauces", images: ["/stew1.jpg", "/stew2.jpg", "/stew3.jpg", "/stew4.jpg", "/stew5.jpg"] },
    { title: "Desserts", images: ["/dessert1.jpg", "/dessert2.jpg", "/dessert3.jpg", "/dessert4.jpg", "/dessert5.jpg"] },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-black/70 fixed w-full z-50">
        <h1 className="text-3xl font-bold text-red-600">Foodflix</h1>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-red-500 transition">Home</a>
          <a href="#" className="hover:text-red-500 transition">Recipes</a>
          <a href="#" className="hover:text-red-500 transition">Drinks</a>
          <a href="#" className="hover:text-red-500 transition">Desserts</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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

      {/* Categories */}
      <section className="space-y-12 px-6 pb-20 mt-8">
        {categories.map((cat, idx) => (
          <FoodRow key={idx} title={cat.title} images={cat.images} />
        ))}
      </section>
    </main>
  );
}

function FoodRow({ title, images }: { title: string; images: string[] }) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    const container = rowRef.current;
    const scrollAmount = container.clientWidth; // full container width

    const currentTransform = getComputedStyle(container).transform;
    const matrix = new WebKitCSSMatrix(currentTransform === "none" ? "matrix(1,0,0,1,0,0)" : currentTransform);
    let newX = matrix.m41 + (direction === "left" ? scrollAmount : -scrollAmount);

    // Clamp
    const maxX = 0;
    const minX = -container.scrollWidth + container.clientWidth;
    newX = Math.max(Math.min(newX, maxX), minX);

    container.style.transform = `translateX(${newX}px)`;
  };

  return (
    <div className="relative overflow-hidden">
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>

      {/* Left/Right Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
      >
        <FiChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
      >
        <FiChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Hidden Scrollable Row */}
      <div
        ref={rowRef}
        className="flex gap-4 whitespace-nowrap transition-transform duration-500"
        style={{ transform: "translateX(0px)" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative inline-block w-60 md:w-64 h-40 md:h-56 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:brightness-90 cursor-pointer"
          >
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
