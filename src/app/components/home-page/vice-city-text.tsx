import React from "react";

export const ViceCityText = () => {
  return (
    <div
      id="vice-city"
      className="absolute inset-0  flex items-center justify-center overflow-hidden z-[11] opacity-0 backdrop-blur-xs"
      style={{
        background: "rgba(0,0,0,1)",
      }}
    >
      <div
        id="vice-city-text"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 100vh, rgb(255, 210, 123) 0%, rgb(223, 58, 147) 15%, rgb(92, 22, 99) 30%, rgba(32, 31, 66, 0) 50%)",
          maskImage:
            "radial-gradient(at 50% 0vh, rgb(0, 0, 0) 120vh, rgba(0, 0, 0, 0) 200vh)",
        }}
        className="flex flex-col justify-center space-y-6 p-8 z-10 bg-clip-text text-transparent px-[13vw]"
      >
        <h3
          className="font-bold"
          style={{ fontSize: "calc(clamp(3lvh,2.6vw,5lvh) * 2)" }}
        >
          Vice City, USA.
        </h3>
        <p
          className="font-medium"
          style={{ fontSize: "clamp(3lvh,2.6vw,5lvh)", lineHeight: "1.2" }}
        >
          Jason and Lucia have always known the deck is stacked against them.
          But when an easy score goes wrong, they find themselves on the darkest
          side of the sunniest place in America, in the middle of a criminal
          conspiracy stretching across the state of Leonida — forced to rely on
          each other more than ever if they want to make it out alive.
        </p>
      </div>
    </div>
  );
};
