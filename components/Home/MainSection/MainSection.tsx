"use client";

import { Slider } from "./Slider";

const MainSection = () => {
  return (
    <section className="flex relative justify-end items-center text-white bg-white">
      <main className="max-w-[1000px] h-[280px] w-full flex items-center">
        <Slider />
      </main>
    </section>
  );
};

export default MainSection;
