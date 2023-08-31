import { Metadata } from "next";
import MainSection from "./components/Home/MainSection/MainSection";
import Advantages from "./components/Home/advantages/Advantages";
import { Suspense } from "react";
import Image from "next/image";
import LoadingAGif from "./assets/loading.gif";

export const metadata: Metadata = {
  title: "Главная",
};

const Loading = () => {
  return <Image src={LoadingAGif} alt="loading" width={100} height={100} />;
};

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="max-w-[1050px] w-full">
        <Suspense fallback={<Loading />}>
          <MainSection />
          <Advantages />
        </Suspense>
      </div>
    </main>
  );
}
