"use client";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci"; //show only on sm. Hide on md, lg, xl, xxl screens
import { IoIosClose } from "react-icons/io"; //show only on sm. Hide on md, lg, xl, xxl screens
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#141414]/90 fixed w-full z-50 shadow-lg">
      <p className="text-4xl font-bold text-red-600 uppercase hover:scale-105">
        <Link href="/">
        Foodflix
        </Link>
      </p>
      <div className="hidden md:flex gap-6 text-base font-medium">
        <Link href="/about" className="text-white hover:text-red-500 transition">
          About
        </Link>
        <Link
          href="/recipes"
          className="text-white hover:text-red-500 transition"
        >
          Recipes
        </Link>
        <Link
          href="/drinks"
          className="text-white hover:text-red-500 transition"
        >
          Drinks
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-red-500 transition"
        >
          Contact
        </Link>
      </div>

{/* show on sm screen only */}
<div className="flex md:hidden relative">
  {/* Toggle button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-white text-3xl focus:outline-none"
  >
    {isOpen ? <IoIosClose /> : <CiMenuKebab />}
  </button>

  {/* Dropdown menu */}
  {isOpen && (
<div className="absolute top-5 left-[-50] bg-[#141414]/95 rounded-lg shadow-lg shadow-black p-8 flex flex-col gap-4 w-40 text-base font-medium">
      <Link
        href="/about"
        className="text-white hover:text-red-500 focus:text-red-500 active:text-red-500 transition-colors cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link
        href="/recipes"
        className="text-white hover:text-red-500 focus:text-red-500 active:text-red-500 transition-colors cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        Recipes
      </Link>
      <Link
        href="/drinks"
        className="text-white hover:text-red-500 focus:text-red-500 active:text-red-500 transition-colors cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        Drinks
      </Link>
      <Link
        href="/contact"
        className="text-white hover:text-red-500 focus:text-red-500 active:text-red-500 transition-colors cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>
    </div>
  )}
</div>

    </nav>
  );
}
