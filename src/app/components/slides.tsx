"use client";

import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";

const categories = [
  { title: "Quick Meals", images: ["/food1.jpg", "/food2.jpg", "/food3.jpg", "/food4.jpg", "/food5.jpg"] },
  { title: "Rice Dishes", images: ["/rice1.jpg", "/rice2.jpg", "/rice3.jpg", "/rice4.jpg", "/rice5.jpg"] },
  { title: "Stews & Sauces", images: ["/stew1.jpg", "/stew2.jpg", "/stew3.jpg", "/stew4.jpg", "/stew5.jpg"] },
  { title: "Desserts", images: ["/dessert1.jpg", "/dessert2.jpg", "/dessert3.jpg", "/dessert4.jpg", "/dessert5.jpg"] },
];

export default function Slides() {
  return (
    <section className="space-y-12 px-6 pb-20 bg-[#141414] overflow-hidden">
      {categories.map((cat, idx) => (
        <FoodRow key={idx} title={cat.title} images={cat.images} />
      ))}
    </section>
  );
}

function FoodRow({ title, images }: { title: string; images: string[] }) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    const container = rowRef.current;
    const scrollAmount = container.clientWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{title}</h3>

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
        {images.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-60 md:w-64 h-40 md:h-56 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:brightness-90 cursor-pointer"
          >
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
