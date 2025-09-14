import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FirstVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(videoRef.current, { opacity: 0, zIndex: 0 });
    if (videoRef.current) {
      const video = videoRef.current;

      // Prepare video for scrubbing
      const prepareVideo = () => {
        console.log("Preparing video for scrubbing, duration:", video.duration);
        if (video.duration && !isNaN(video.duration)) {
          video.pause();
          video.currentTime = 0;
          console.log("Video prepared for scrubbing");
        }
      };

      // Check if video is already loaded
      if (video.readyState >= 1) {
        prepareVideo();
      } else {
        // Wait for video metadata to load
        video.addEventListener("loadeddata", prepareVideo);
      }
    }

    // Add video scrubbing directly to the scroll timeline
    if (videoRef.current) {
      const video = videoRef.current;

      // Set up video scrubbing with ScrollTrigger
      ScrollTrigger.create({
        trigger: ".video-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: true,
        pin: video,
        onEnter: () => {
          // if (initialRender.current) {
          //   return;
          // }
          console.log("Entering video section");
          gsap.set(video, { opacity: 1, zIndex: 10 });
        },
        onLeave: () => {
          gsap.set(video, { opacity: 0, zIndex: 0 });
        },
        onEnterBack: () => {
          console.log("Re-entering video section");
          gsap.set(video, { opacity: 1, zIndex: 10 });
        },
        onLeaveBack: () => {
          gsap.set(video, { opacity: 0, zIndex: 0 });
        },
        onUpdate: (self) => {
          const scrollProgress = self.progress;
          console.log(
            "Scroll progress:",
            scrollProgress,
            video,
            video.duration,
            video?.readyState
          );

          if (video && video.duration && video.readyState >= 2) {
            // Calculate video time based on scroll progress (start scrubbing at 60% scroll - near the end)
            const threshold = 0.1; // start scrubbing at 60%
            const offset = 0.1; // visible before starting to scrub
            if (scrollProgress >= threshold - offset) {
              if (scrollProgress >= threshold) {
                const videoProgress = (scrollProgress - threshold) / 0.1; // Map 60%-70% scroll to 0%-100% video
                const clampedProgress = Math.min(Math.max(videoProgress, 0), 1);
                const targetTime = Math.min(
                  clampedProgress * video.duration,
                  video.duration - 0.1
                );
                video.currentTime = targetTime;

                console.log(
                  "Video scrubbing - Scroll:",
                  scrollProgress.toFixed(3),
                  "Video Progress:",
                  clampedProgress.toFixed(3),
                  "Time:",
                  targetTime.toFixed(2)
                );
              }
            }
          }
        },
      });

      setTimeout(() => {
        // prevent flash of video container during initial load
        // There might be a better way to handle this with a loading state
        // TODO: improve this
        gsap.set(".video-container", { opacity: 1 });
      }, 1000);
    }
  });

  return (
    <div className="video-container relative z-10 h-screen pointer-events-none opacity-0">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        loop={false}
        autoPlay={false}
        controls={false}
        src="/assets/videos/jason.mp4"
        className="size-full object-cover md:[object-position:50%_center] [object-position:75%_center] absolute inset-0 z-0 opacity-0 -top-[100vh]"
        onLoadedData={() => {
          console.log(
            "Video data loaded, duration:",
            videoRef.current?.duration
          );
          console.log("Video ready state:", videoRef.current?.readyState);
        }}
        onCanPlayThrough={() => {
          console.log("Video can play through without buffering");
        }}
      />
    </div>
  );
};
