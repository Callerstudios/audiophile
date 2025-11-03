import { useEffect, useState } from "react";

type ScreenType = "mobile" | "tablet" | "desktop";

export function useScreenSize(): ScreenType {
  const [screen, setScreen] = useState<ScreenType>(() => {
    if (typeof window === "undefined") return "desktop"; // SSR safety
    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) setScreen("mobile");
      else if (width < 1024) setScreen("tablet");
      else setScreen("desktop");
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
}
