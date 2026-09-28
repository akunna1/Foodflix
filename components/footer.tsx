"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] text-gray-400 text-sm px-6 py-10">
      {/* Icons */}
      <div className="flex justify-center gap-5 mb-6">
        <a
          href="https://www.linkedin.com/in/akunna1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform transition-transform duration-300 hover:scale-110"
        >
          <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
        <a
          href="https://github.com/akunna1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform transition-transform duration-300 hover:scale-110"
        >
          <FaGithub className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/60 max-w-5xl mx-auto mb-6" />

      {/* Copyright + Studio */}
      <div className="text-center space-y-1">
        <p className="text-gray-400">
          © {year} <span className="font-semibold text-white">Foodflix</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 tracking-wide">
          Created by{" "}
          <a
            href="https://akunnatechstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 font-medium inline-block transform transition-transform duration-300 hover:scale-110"
          >
            Akunna Tech Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
