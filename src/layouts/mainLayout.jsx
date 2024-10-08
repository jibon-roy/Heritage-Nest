// import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
// import SmoothScrollbar from "smooth-scrollbar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   let scrollbar;

  //   if (scrollContainerRef.current) {
  //     scrollbar = SmoothScrollbar.init(scrollContainerRef.current, {
  //       damping: 0.08,
  //     });
  //   }

  //   return () => {
  //     if (scrollbar) {
  //       scrollbar.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div
    // ref={scrollContainerRef}
    // style={{ height: "100vh", overflow: "hidden" }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
