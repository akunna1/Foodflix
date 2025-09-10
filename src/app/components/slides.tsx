"use client";

import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";

const categories = [
  { title: "Desserts", images: ["/photos/dessert1.jpg", "/photos/dessert2.jpg", "/photos/dessert3.jpg", "/photos/dessert4.jpg", "/photos/dessert5.jpg"] },
  { title: "Pasta Dishes", images: ["/photos/pasta1.jpg", "/photos/pasta2.jpg", "/photos/pasta3.jpg", "/photos/pasta4.jpg", "/photos/pasta5.jpg"] },
  { title: "Rice Dishes", images: ["/photos/rice1.jpg", "/photos/rice2.jpg", "/photos/rice3.jpg", "/photos/rice4.jpg", "/photos/rice5.jpg"] },
  { title: "Salads", images: ["/photos/salad1.jpg", "/photos/salad2.jpg", "/photos/salad5.jpg", "/photos/salad4.jpg", "/photos/salad3.jpg"] },
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
        className="flex gap-3 overflow-x-hidden overflow-y-hidden scrollbar-hide"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-60 md:w-64 h-40 md:h-56 rounded-md overflow-hidden transform transition duration-300 hover:scale-105 hover:brightness-90 cursor-pointer"
          >
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
