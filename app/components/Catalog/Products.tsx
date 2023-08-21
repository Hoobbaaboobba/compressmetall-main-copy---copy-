"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductLink {
  image: string;
  label: string;
  src: string;
  firstItemLabel: string;
  firstItemSrc: string;
  SecondItemLabel: string;
  SecondItemSrc: string;
  ThirdItemLabel: string;
  ThirdItemSrc: string;
}

type Props = {
  productsLinks: ProductLink[];
};

const Products = ({ productsLinks }: Props) => {
  return (
    <>
      {productsLinks.map((link) => {
        return (
          <div
            key={link.label}
            className="max-w-[280px] h-[420px] relative w-full flex text-center flex-col justify-between items-center border border-light-gray rounded-3xl p-[16px] gap-2 cursor-pointer xl:hover:shadow-xl transition duration-300 z-0"
          >
            <Image src={link.image} alt="card_image" width={246} height={164} />
            <h1 className="text-xl font-bold">{link.label}</h1>
            <hr className="w-full bg-orange-bg border-orange-bg border-2" />
            <div className="flex flex-col gap-2">
              <Link href={`${link.firstItemSrc}`} className="z-[10]">
                <button className="w-full text-sm bg-light-gray hover:bg-orange-bg hover:text-white transition rounded-md font-medium py-2 px-4">
                  {link.firstItemLabel}
                </button>
              </Link>
              <Link href={`${link.SecondItemSrc}`} className="z-[10]">
                <button className="w-full text-sm bg-light-gray hover:bg-orange-bg hover:text-white transition rounded-md font-medium py-2 px-4">
                  {link.SecondItemLabel}
                </button>
              </Link>
              <Link href={`${link.ThirdItemSrc}`} className="z-[10]">
                <button className="w-full text-sm bg-light-gray hover:bg-orange-bg hover:text-white transition rounded-md font-medium py-2 px-4">
                  {link.ThirdItemLabel}
                </button>
              </Link>
            </div>
            <Link
              href={`${link.src}`}
              className="absolute left-0 top-0 bg-transparent w-full h-full z-0"
            ></Link>
          </div>
        );
      })}
    </>
  );
};

export default Products;
