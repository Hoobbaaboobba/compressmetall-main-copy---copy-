import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Копресс металл | Воронеж",
  description: "Продажа металлопроката в Воронеже и в Воронежской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Воронеж",
    "Металлопрокат в Воронеже",
    "Московский компрессорный завод",
    "металлопрокат в Воронеже",
    "металлические изделия в Воронеже",
    "прокат металла в Воронеже",
    "металлургия в Воронеже",
    "сталь в Воронеже",
    "чугун в Воронеже",
    "алюминий в Воронеже",
    "железо в Воронеже",
    "металлический лист в Воронеже",
    "профиль металлический в Воронеже",
    "трубы в Воронеже",
    "арматура в Воронеже",
    "металлические конструкции в Воронеже",
    "металлический склад в Воронеже",
    "горячекатаный металл в Воронеже",
    "холоднокатаный металл в Воронеже",
    "металлический пресс в Воронеже",
    "металлическая фабрика в Воронеже",
    "металлообработка в Воронеже",
    "металлоизделия в Воронеже",
    "металлоторговля в Воронеже",
    "металлопродукция в Воронеже",
    "металлорежущий инструмент в Воронеже",
    "производство металлопродукции в Воронеже",
    "металлический рынок в Воронеже",
    "металлопокупка в Воронеже",
    "металлоснабжение в Воронеже",
    "склад металла в Воронеже",
    "металлические отходы в Воронеже",
    "металлоконструкции в Воронеже",
    "металлоремонт в Воронеже",
    "Казань",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title: "Копресс металл | Воронеж",
    description: "Продажа металлопроката в Воронеже и в Воронежской области",
    url: "https://www.kometal.ru/voronezh",
    images: {
      url: "https://www.kometal.ru/voronezh/_next/static/media/stainlessBarMetal.f86f7842.png",
      width: 200,
      height: 200,
    },
  },
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="max-w-[1050px] w-full">
        <Suspense fallback={<Loading />}>
          <MainSection />
        </Suspense>
        <Advantages />
      </div>
    </main>
  );
}
