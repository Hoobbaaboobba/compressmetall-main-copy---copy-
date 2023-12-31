import { Suspense } from "react";
import MainSection from "../../components/Home/MainSection/MainSection";
import Advantages from "../../components/Home/advantages/Advantages";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Копресс металл | Москва",
  description: "Продажа металлопроката в Москве и Московской области",
  generator: "Компресс металл",
  applicationName: "Компресс металл",
  keywords: [
    "OOO 'КОМПРЕСС МЕТАЛЛ'",
    "Копресс металл | Москва",
    "Металлопрокат в Москве",
    "Московский компрессорный завод",
    "металлопрокат в Москве",
    "металлические изделия в Москве",
    "прокат металла в Москве",
    "металлургия в Москве",
    "сталь в Москве",
    "чугун в Москве",
    "алюминий в Москве",
    "железо в Москве",
    "металлический лист в Москве",
    "профиль металлический в Москве",
    "трубы в Москве",
    "арматура в Москве",
    "металлические конструкции в Москве",
    "металлический склад в Москве",
    "горячекатаный металл в Москве",
    "холоднокатаный металл в Москве",
    "металлический пресс в Москве",
    "металлическая фабрика в Москве",
    "металлообработка в Москве",
    "металлоизделия в Москве",
    "металлоторговля в Москве",
    "металлопродукция в Москве",
    "металлорежущий инструмент в Москве",
    "производство металлопродукции в Москве",
    "металлический рынок в Москве",
    "металлопокупка в Москве",
    "металлоснабжение в Москве",
    "склад металла в Москве",
    "металлические отходы в Москве",
    "металлоконструкции в Москве",
    "металлоремонт в Москве",
    "Москва",
  ],
  creator: "Reptile Design",
  publisher: "Reptile Design",
  openGraph: {
    title: "Копресс металл | Москва",
    description: "Продажа металлопроката в Москве и Московской области",
    url: "https://www.kometal.ru/moscow",
    images: {
      url: "https://www.kometal.ru/moscow/_next/static/media/stainlessBarMetal.f86f7842.png",
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
