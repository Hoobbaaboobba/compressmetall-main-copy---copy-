"use client";

import CatalogItem from "./CatalogItem";

import { useState } from "react";
import Link from "next/link";
import OurContacts from "../OurContacts/OurContacts";

import OrangeButton from "@/components/OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";
import useRequestModal from "@/hooks/useRequestModal";

export interface ProductsProps {
  topic: string;
  label: string;
  products: any[];
  productImg: string;
  bold: string;
  items: boolean;
  link: string;
}

const HoverMenuItem: React.FC<ProductsProps> = ({
  topic,
  label,
  products,
  productImg,
  bold,
  items,
  link,
}) => {
  const [hover, setHover] = useState(false);

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
          href={`/${link}/catalog?q=${encodeURI(label)}`}
          onClick={() => setHover(false)}
        >
          <CatalogItem src={productImg} label={label} bold={bold} />
        </Link>
        <div
          className={`bg-white ${
            hover ? "xl:block" : "xl:hidden"
          } left-0 ml-0 xl:left-auto xl:ml-[231px] xl:translate-y-0 fixed z-40 top-[84px] xl:top-[137px] p-4 pb-20 lg:pb-12 xl:pb-4 border w-full xl:w-[1100px] h-[81vh] overflow-x-hidden overflow-y-auto transition duration-200`}
        >
          <div className="flex justify-between items-center border-b border-b-black pb-4">
            <h1 className="font-bold text-3xl uppercase text-black">{topic}</h1>
            <div onClick={showPrice}>
              <OrangeButton label={"Уточнить размер или цены"} mark />
            </div>
          </div>
          {items ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 lg:p-4">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col">
                  <h2 className="font-bold text-xl">{product.label}</h2>
                  <ul className="">
                    {product.items.map((item: any, index: number) => (
                      <li
                        key={index}
                        onClick={() => setHover(false)}
                        className="opacity-60 first-letter:font-bold hover:opacity-100"
                      >
                        <Link
                          href={`/${link}/catalog/${encodeURI(
                            product.label
                          )}/${encodeURI(item[0])}?i=${encodeURI(
                            item[1]
                          )}&q=${encodeURI(item[2])}&amount=${encodeURI(
                            item[3]
                          )}`}
                        >
                          {item[0]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full p-6 z-50">
              <div className="max-w-[600px] my-4">
                <h1>
                  ООО &ldquo;КОМПРЕССМЕТАЛ&rdquo; предлагает к реализации
                  невостребованные остатки металла от производства по оптовым
                  ценам. Чтобы купить металл по сниженным ценам, ознакомьтесь с
                  Прайсом на:
                </h1>
                <ul className="flex flex-col my-3">
                  <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
                    обрез металла
                  </li>
                  <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
                    невостребованный металлопрокат
                  </li>
                  <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
                    неликвиды металла
                  </li>
                </ul>
                <h2>
                  Возможен самовывоз или доставка.Цены ниже рыночных.По каждой
                  позиции можно получить консультацию менеджера и оформить заказ
                  в любой удобной вам форме:
                </h2>
              </div>
              <div onClick={showRequest} className="z-50">
                <OrangeButton label={"Оставить заявку"} />
              </div>
              <OurContacts />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HoverMenuItem;
