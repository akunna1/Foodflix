"use client";

import Image from "next/image";
import { useRef } from "react";

const categories = [
  { title: "Desserts", images: ["/photos/dessert1.jpg", "/photos/dessert2.jpg", "/photos/dessert3.jpg", "/photos/dessert7.jpg", "/photos/dessert4.jpg", "/photos/dessert5.jpg"] },
  { title: "Pasta Dishes", images: ["/photos/pasta1.jpg", "/photos/pasta2.jpg", "/photos/pasta3.jpg", "/photos/pasta4.jpg", "/photos/pasta5.jpg", "/photos/quick1.jpg"] },
  { title: "Rice Dishes", images: ["/photos/rice1.jpg", "/photos/rice6.jpg", "/photos/rice2.jpg", "/photos/rice3.jpg", "/photos/rice4.jpg", "/photos/rice5.jpg"] },
  { title: "Salads", images: ["/photos/salad1.jpg", "/photos/salad2.jpg", "/photos/salad5.jpg", "/photos/salad7.jpg", "/photos/salad4.jpg", "/photos/salad3.jpg"] },
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

  // Horizontal drag
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
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{title}</h3>

      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-scroll scrollbar-hide cursor-grab"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-40 md:w-60 h-40 md:h-56 rounded-md shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:brightness-90 cursor-pointer opacity-80"
          >
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
