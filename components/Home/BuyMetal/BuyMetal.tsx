"use client";

import Image from "next/image";
import OrangeButton from "@/components/OrangeButton";
import useRequestModal from "@/hooks/useRequestModal";

const BuyMetal = () => {
  const { onOpen } = useRequestModal();

  const showRequest = () => {
    onOpen(), (document.body.style.overflowY = "hidden");
  };
  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-[1000px] w-full text-center flex flex-col justify-center items-center sm:text-start px-4">
        <div>
          <h1 className="text-xl text-gray-bg font-bold mb-8">
            Порядок покупки металлопроката
          </h1>
          <Image
            src="/buyProcess1.jpg"
            alt="buy-process"
            className="hidden sm:block"
            width={1000}
            height={60}
          />
          <Image
            src="/buyProcess2.png"
            alt="buy-process"
            className="block sm:hidden"
            width={500}
            height={600}
          />
        </div>
        <div
          onClick={showRequest}
          className="w-full flex justify-center items-center text-white"
        >
          <OrangeButton label={"Оставить заявку"} />
        </div>
      </div>
    </section>
  );
};

export default BuyMetal;
