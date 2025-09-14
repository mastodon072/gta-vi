"use client";
import { Hero } from "./hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";
import { FirstVideo } from "./first-video";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const HomePage = () => {
  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <FirstVideo />
      {/* <Loader /> */}
      <div className="h-[200vh]">
        Extra space to enable scrolling for demo purposes.
      </div>
    </div>
  );
};
