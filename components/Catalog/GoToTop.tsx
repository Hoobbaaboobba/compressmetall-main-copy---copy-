"use client";

import NorthIcon from "@mui/icons-material/North";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={goToTop}
      className={`${
        showButton ? "opacity-100" : "opacity-0"
      } transition duration-200 fixed bottom-[15vh] right-5 xl:bottom-[5vh] xl:right-12 rounded-full bg-orange-bg w-16 h-16 border border-orange-bg xl:hover:bg-transparent text-white xl:hover:text-orange-bg z-30`}
    >
      <NorthIcon fontSize="large" />
    </button>
  );
};

export default GoToTop;
