import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Копресс металл | Саратов",
  description: "Продажа металлопроката в Саратове и Саратовской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Саратов",
    "Металлопрокат в Саратове",
    "Московский компрессорный завод",
    "металлопрокат в Саратове",
    "металлические изделия в Саратове",
    "прокат металла в Саратове",
    "металлургия в Саратове",
    "сталь в Саратове",
    "чугун в Саратове",
    "алюминий в Саратове",
    "железо в Саратове",
    "металлический лист в Саратове",
    "профиль металлический в Саратове",
    "трубы в Саратове",
    "арматура в Саратове",
    "металлические конструкции в Саратове",
    "металлический склад в Саратове",
    "горячекатаный металл в Саратове",
    "холоднокатаный металл в Саратове",
    "металлический пресс в Саратове",
    "металлическая фабрика в Саратове",
    "металлообработка в Саратове",
    "металлоизделия в Саратове",
    "металлоторговля в Саратове",
    "металлопродукция в Саратове",
    "металлорежущий инструмент в Саратове",
    "производство металлопродукции в Саратове",
    "металлический рынок в Саратове",
    "металлопокупка в Саратове",
    "металлоснабжение в Саратове",
    "склад металла в Саратове",
    "металлические отходы в Саратове",
    "металлоконструкции в Саратове",
    "металлоремонт в Саратове",
    "Саратов",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title: "Копресс металл | Саратов",
    description: "Продажа металлопроката в Саратове и Саратовской области",
    url: "https://www.kometal.ru/saratov",
    images: {
      url: "https://www.kometal.ru/saratov/_next/static/media/stainlessBarMetal.f86f7842.png",
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
