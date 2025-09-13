import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% -1500vh",
      initialMaskSize: "3100% 3100%",
      maskSize: "50% 50%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% -1700vh",
      initialMaskSize: "3632.92% 3632.92%",
      maskSize: "30% 30%",
    };
  }

  return {
    initialMaskPos: "50% 17%",
    initialMaskSize: "6000% 6000%",
    maskSize: "17.9% 17.9%",
  };
};
