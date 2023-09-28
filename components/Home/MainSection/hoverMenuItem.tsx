"use client";

import CatalogItem from "./CatalogItem";

import { useState } from "react";
import Link from "next/link";
import OurContacts from "../OurContacts/OurContacts";

import OrangeButton from "@/components/OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";
import useRequestModal from "@/hooks/useRequestModal";
import { usePathname } from "next/navigation";
import Image from "next/image";

export interface ProductsProps {
  label: string;
  buttonImg: string;
  item: {
    name: string;
    img: string;
    items: {
      variant: string;
      img: string;
      items: {
        title: string;
      }[];
    }[];
  }[];
}

const HoverMenuItem: React.FC<ProductsProps> = ({ label, buttonImg, item }) => {
  const [hover, setHover] = useState(false);

  const pathname = usePathname().split("/");

  const { onOpen } = usePriceModal();
  const { onOpen: onOpenRequest } = useRequestModal();

  const showPrice = () => {
    onOpen(), (document.body.style.overflowY = "hidden");
  };

  const showRequest = () => {
    onOpenRequest(), (document.body.style.overflowY = "hidden");
  };

  return (
    <>
      <div
        className="flex"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link
          href={`/${pathname[1]}/catalog?q=${encodeURI(label)}`}
          onClick={() => setHover(false)}
        >
          <CatalogItem src={buttonImg} label={label} bold="" />
        </Link>
        <div
          className={`${
            hover ? "flex" : "hidden"
          } flex-col fixed top-[137px] bg-white ml-[232px] p-4 w-[1100px] border border-light-gray overflow-y-auto h-[81vh]`}
        >
          <div className="flex w-full justify-between items-center">
            <h1 className="text-4xl font-bold uppercase">{label}</h1>
            <OrangeButton label={"Уточнить размер или цены"} />
          </div>
          <hr className="w-full my-4" />
          <div className={`grid grid-cols-4 gap-8 `}>
            {item.map((metal) => (
              <Link
                onClick={() => setHover(false)}
                href={`/${pathname[1] || "moscow"}/catalog?q=${encodeURI(
                  metal.name
                )}`}
                className="hover:shadow-md"
              >
                <Image
                  src={require(`../../../public/${metal.img}.png`)}
                  alt={label}
                  width={240}
                  height={280}
                  placeholder="blur"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverMenuItem;
