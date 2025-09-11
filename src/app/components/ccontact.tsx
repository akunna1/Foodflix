"use client";

import Image from "next/image";
import React from "react";

const Ccontact = () => {
  return (
    <main className="bg-[#141414] text-gray-200 min-h-screen flex flex-col items-center px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
        Contact Me
      </h1>

      <div className="max-w-3xl space-y-6 text-center text-lg md:text-xl mb-12">
        <p>
          I’m always open to learning new things in the kitchen! Teach me how to cook dishes from your culture, 
          share your favorite recipes, or simply invite me out—we can grab a meal together at your favorite 
          restaurant if you’re in North Carolina.
        </p>

        <p>
          Whether it’s swapping kitchen tips, sharing cooking adventures, or exploring new flavors together, 
          I’d love to connect.
        </p>

        <p>
          Feel free to reach me at{" "}
          <a
            href="mailto:info@akunnatechstudio.com"
            className="text-red-500 font-semibold hover:scale-105 transition-transform duration-300"
          >
            info@akunnatechstudio.com
          </a>{" "}
          for any questions, collaborations, or just to say hi!
        </p>
      </div>

      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/photos/dinner2.jpeg"
          alt="Dinner Invitation"
          width={800}
          height={400}
          className="object-cover w-full h-auto rounded-lg"
          priority
        />
      </div>
    </main>
  );
};

export default Ccontact;
