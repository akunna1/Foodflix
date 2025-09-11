"use client";

import Navbar from "@/app/components/navbar";
import Welcome from "@/app/components/welcome";
import Foodpreview from "@/app/components/foodpreview";
import Slides from "@/app/components/slides";
import Footer from "@/app/components/footer";

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
