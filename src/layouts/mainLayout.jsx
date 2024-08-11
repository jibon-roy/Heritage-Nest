import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import SmoothScrollbar from "smooth-scrollbar";
import Navbar from "../components/common/Navbar";

export default function MainLayout() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let scrollbar;

    if (scrollContainerRef.current) {
      scrollbar = SmoothScrollbar.init(scrollContainerRef.current, {
        damping: 0.1,
      });
    }

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return (
    <main
      ref={scrollContainerRef}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Navbar />
      <Outlet />
    </main>
  );
}
