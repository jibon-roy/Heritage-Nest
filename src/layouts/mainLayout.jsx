import { useEffect } from "react";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import SmoothScrollbar from "smooth-scrollbar";

export default function MainLayout() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollbar = SmoothScrollbar.init(scrollContainerRef.current, {
        damping: 0.1,
      });

      return () => scrollbar.destroy();
    }
  }, []);
  return (
    <main
      ref={scrollContainerRef}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Outlet />
    </main>
  );
}
