import Image from "next/image";
import React from "react";

export const ComingSoon = () => {
  return (
    <div id="coming-soon" className="absolute inset-0  bg-black text-white">
      <div
        id="coming-soon-inner"
        className="p-20 flex flex-col justify-center items-center z-[0] scale-125 opacity-0"
        style={{
          maskImage:
            "radial-gradient(circle at 50% 20vh, rgb(0, 0, 0) 120vh, rgba(0, 0, 0, 0) 120vh)",
        }}
      >
        <div className="relative mt-18 my-16">
          <Image
            id="gta-vi-logo"
            src="/assets/images/vi.png"
            alt="GTA VI Coming Soon Logo"
            width={250}
            height={250}
            className="opacity-0"
          />
          <Image
            id="fake-vi-text"
            src="/assets/images/big-hero-text.svg"
            alt="GTA VI Coming Soon Logo"
            width={280}
            height={280}
            className="absolute inset-0 rounded-lg z-20 opacity-0"
          />
        </div>
        <h2
          id="coming-soon-text"
          className="flex flex-col font-bold text-center space-y-4 bg-clip-text text-transparent uppercase leading-[0.8em]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 150vh, rgb(255, 210, 123) 0vh, rgb(223, 58, 147) 50vh, rgb(92, 22, 99) 90vh, rgba(32, 31, 66, 0) 100vh)",
            fontSize: "clamp(11vh,8vw,16vh)",
          }}
        >
          <span>Coming</span>
          <span>May 26</span>
          <span>2026</span>
        </h2>
        <div
          id="coming-soon-footer"
          className="flex items-center justify-center gap-12 mt-20 opacity-0"
        >
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
    </div>
  );
};
