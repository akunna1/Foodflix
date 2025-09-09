"use client";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#141414]/90 fixed w-full z-50">
      <h1 className="text-3xl font-bold text-red-600 uppercase">Foodflix</h1>
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#" className="text-white hover:text-red-500 transition">Home</a>
        <a href="#" className="text-white hover:text-red-500 transition">Recipes</a>
        <a href="#" className="text-white hover:text-red-500 transition">Drinks</a>
        <a href="#" className="text-white hover:text-red-500 transition">Desserts</a>
      </div>
    </nav>
  );
}
