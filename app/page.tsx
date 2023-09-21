import { Metadata } from "next";
import MainSection from "../components/Home/MainSection/MainSection";
import Advantages from "../components/Home/advantages/Advantages";

export const metadata: Metadata = {
  title: {
    default: "Копресс металл",
    template: "%s | Копресс металл",
  },
  description: "Продажа металлопроката по всей территории России и СНГ",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Москва",
    "Металлопрокат",
    "Московский  компрессорный завод",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title: "Компресс металл",
    description: "Продажа металлопроката по всей территории России и СНГ",
    url: "https://www.kometal.ru",
    images: {
      url: "https://www.kometal.ru/_next/static/media/stainlessBarMetal.f86f7842.png",
      width: 200,
      height: 200,
    },
  },
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
