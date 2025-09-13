"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useMaskSettings } from "@/app/hooks/useMaskSettings";
import { ComingSoon } from "./coming";
import { ViceCityText } from "./vice-city-text";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings(); // prettier-ignore

  const startHeroAnimations = () => {
    // Create a timeline for synchronized scroll animations
    const scrollTl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-container",
        start: "top top",
        end: "+=400%",
        scrub: 2.5,
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
    });

    // Add both animations to the timeline at the same time (position 0)
    const tl = gsap.timeline({ paused: true });
    tl.to(
      "#coming-soon-inner",
      { opacity: 1, scale: 0.7, immediateRender: false },
      "<"
    )
      .to(
        "#coming-soon-text",
        {
          backgroundImage:
            "radial-gradient(circle at 50% -30vh, rgb(255, 214, 135) 0px, rgb(252, 82, 67) 50vh, rgb(157, 47, 106) 90vh, rgba(32, 31, 66, 0) 150vh)",
        },
        "<"
      )

      .to("#gta-vi-logo", { opacity: 1, duration: 0.1 }, "<0.1")
      .to(
        "#gta-vi-logo-overlay-gradient",
        {
          backgroundImage:
            "radial-gradient(circle at 50% -150%, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%)",
          immediateRender: false,
        },
        "<"
      )
      .to("#coming-soon-footer", { opacity: 1, duration: 0.1 }, "<0.1")
      .to(
        "#coming-soon-inner",
        {
          opacity: 1,
          duration: 0.5,
          maskImage:
            "radial-gradient(circle at 50% -60vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)",
        },
        "<0.05"
      )
      .to("#vice-city-text", {
        opacity: 1,
        duration: 1.5,
        backgroundImage:
          "radial-gradient(circle at 40.73% 15vh, rgb(255, 181, 134) 0%, rgb(250, 80, 73) 65%, rgb(152, 45, 105) 95%, rgba(32, 31, 66, 0) 143%)",
      })
      .to("#vice-city-text", {
        maskImage:
          "radial-gradient(at 20% -120vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 50vh)",
      });

    scrollTl
      .fromTo("#hero", { scale: 1.25 }, { scale: 1 })
      .to("#gta-text-masked", { opacity: 0 }, "<")
      .to("#play-button", { opacity: 0 }, "<0.1")
      .to("#watch-trailer-wrapper", { opacity: 0 }, "<0.1")
      .to(".mask-wrapper", { maskSize }, "<")
      .to("#overlay", { opacity: 1 }, "<0.2")
      .add(tl.play(), "<0.2")
      .to(".mask-wrapper", { opacity: 0, duration: 0 }, "<0.1")
      .to("#fake-vi-text", { opacity: 1, duration: 0 }, "<");
  };

  useGSAP(() => {
    // Use onComplete callback to set up ScrollTrigger after intro animation
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    // Initial animation for the hero section
    gsap.fromTo(
      "#hero",
      {
        opacity: 0,
        scale: 1.5,
        ease: "power4.inOut",
      },
      {
        opacity: 1,
        scale: 1.25,
        duration: 0.5,
        onComplete: startHeroAnimations,
      }
    );
  }, []);

  return (
    <section
      id="hero-container"
      className="relative w-full h-screen overflow-hidden"
    >
      <div
        id="hero"
        className="w-full h-screen opacity-0 bg-cover bg-center mask-wrapper relative z-10"
        style={{
          backgroundImage: "url('/assets/hero.webp')",
        }}
      >
        <div
          id="gta-text-masked"
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/gta-text-masked.webp')",
          }}
        ></div>
        <div className="relative w-full h-full flex flex-col items-center justify-center space-y-10">
          <button
            id="play-button"
            className="bg-gray-900/70 rounded-full hover:bg-opacity-75 transition backdrop-blur-[2px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
          >
            <Image
              src="/assets/play.svg"
              alt="Play Button"
              width={100}
              height={100}
              className="filter invert w-24 h-24"
            />
          </button>
        </div>
        <div
          id="overlay"
          className="absolute inset-0 pointer-events-none bg-white opacity-0 z-20"
        />
      </div>
      <div
        id="watch-trailer-wrapper"
        className="absolute bottom-4 left-[50%] transform -translate-x-[50%] flex flex-col items-center space-y-4 z-20"
      >
        <Image
          src="/assets/logo-outline.svg"
          alt="Scroll Down Indicator"
          width={100}
          height={100}
          className="filter invert w-40 h-40 mt-3"
        />
        <h4
          id="watch-trailer-2"
          className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-white uppercase text-xl tracking-[4px] -mt-1"
        >
          Watch Trailer 2
        </h4>
      </div>

      <ComingSoon />
      <Image
        id="scroll-down-indicator"
        src="/assets/images/scroll-down.svg"
        alt="Scroll Down Indicator"
        width={24}
        height={24}
        className="absolute bottom-4 left-[50%] transform -translate-x-[50%] w-8 h-8 z-20 filter invert animate-bounce text-pink-800"
      />
      <ViceCityText />
    </section>
  );
};
