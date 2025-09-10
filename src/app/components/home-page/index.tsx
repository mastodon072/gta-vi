"use client";
import { ComingSoon } from "./coming";
import { Hero } from "./hero";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <ComingSoon />
      {/* <Loader /> */}
    </div>
  );
};
