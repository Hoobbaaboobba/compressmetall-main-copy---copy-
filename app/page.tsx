import { Metadata } from "next";
import MainSection from "./components/Home/MainSection/MainSection";
import Advantages from "./components/Home/advantages/Advantages";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="max-w-[1050px] w-full">
        <MainSection />
        <Advantages />
      </div>
    </main>
  );
}
