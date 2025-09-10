import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: "url('/assets/hero.webp')",
        backgroundSize: "127%",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/gta-text-masked.webp')",
          backgroundSize: "127%",
          backgroundPosition: "center",
        }}
      >
        <button className="bg-gray-900/70 rounded-full hover:bg-opacity-75 transition backdrop-blur-[2px]">
          <Image
            src="/assets/play.svg"
            alt="Play Button"
            width={100}
            height={100}
            className="filter invert w-24 h-24 md:w-32 md:h-32"
          />
        </button>
        <div className="absolute bottom-10">
          <Image
            src="/assets/logo-outline.svg"
            alt="Scroll Down Indicator"
            width={100}
            height={100}
            className="filter invert w-40 h-40"
          />
          <h4 className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-white uppercase text-xl tracking-[4px] -mt-1">
            Watch Trailer 2
          </h4>
        </div>
      </div>
    </div>
  );
};
