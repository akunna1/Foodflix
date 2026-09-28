"use client";

import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import Foodpreview from "@/components/foodpreview";
import Slides from "@/components/slides";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      < Navbar />
      < Welcome />
      < Foodpreview />
      < Slides />
      < Footer />
    </>
  );
}
