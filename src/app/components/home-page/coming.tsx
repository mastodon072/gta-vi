import Image from "next/image";
import React from "react";

export const ComingSoon = () => {
  return (
    <div className="min-h-screen h-screen p-20">
      <Image
        src="/assets/vi.png"
        alt="Coming Soon"
        width={250}
        height={250}
        className="mx-auto mt-20 rounded-lg"
      />
      <h2
        className="flex flex-col font-bold text-center mt-20 space-y-4 bg-clip-text text-transparent uppercase leading-[0.8em]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 59.1787vh, rgb(255, 212, 129) 0vh, rgb(238, 70, 107) 50vh, rgb(125, 35, 103) 90vh, rgba(32, 31, 66, 0) 125.228vh)",
          fontSize: "clamp(11vh,8vw,16vh)",
        }}
      >
        <span>Coming</span>
        <span>May 26</span>
        <span>2026</span>
      </h2>
      <div className="flex items-center justify-center gap-12 mt-10">
        <Image
          src="/assets/images/ps5.svg"
          alt="Play Station 5 Logo"
          width={138}
          height={30}
          className="filter invert"
        />
        <Image
          src="/assets/images/xbox-series-x.svg"
          alt="Xbox Series X Logo"
          width={235}
          height={30}
          className="filter invert"
        />
      </div>
    </div>
  );
};
