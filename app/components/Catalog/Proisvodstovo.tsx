"use client";

import Image from "next/image";

type proisvodstvoItem = {
  label: string;
  src: string;
};

type Props = {
  proisvodstvoItems: proisvodstvoItem[];
};

const Proisvodstovo = ({ proisvodstvoItems }: Props) => {
  return (
    <>
      {proisvodstvoItems.map((item) => {
        return (
          <div
            key={item.label}
            className="cursor-pointer relative max-w-[280px] max-h-[280px] flex text-center justify-center"
          >
            <Image
              src={item.src}
              alt={`${item.label}`}
              className="relative grayscale rounded-xl"
              width={250}
              height={250}
            />
            <div className="bg-black/70 absolute top-0 left-0 w-full h-full rounded-xl hover:bg-black/30 transition duration-300"></div>
            <h1 className="text-xl font-bold text-white absolute bottom-4">
              {item.label}
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default Proisvodstovo;
