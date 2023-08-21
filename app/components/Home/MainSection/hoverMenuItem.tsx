"use client";

import CatalogItem from "./CatalogItem";

import { useState } from "react";
import Link from "next/link";
import OrderCall from "../Header/OrderCall";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import OurContacts from "../OurContacts/OurContacts";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export interface ProductsProps {
  topic: string;
  label: string;
  products: any[];
  productImg: string;
  bold: string;
  items: boolean;
}

const HoverMenuItem: React.FC<ProductsProps> = ({
  topic,
  label,
  products,
  productImg,
  bold,
  items,
}) => {
  const [hover, setHover] = useState(false);
  const [call, setCall] = useState(false);
  const [request, setRequest] = useState(false);

  const menuPanel = () => {
    setHover(false);
  };

  const orderCall = () => {
    setCall(true);
    document.body.style.overflowY = "hidden";
  };

  const hideCall = () => {
    setCall(false);
    document.body.style.overflowY = "auto";
  };

  const orderRequest = () => {
    setRequest(true);
    document.body.style.overflowY = "hidden";
  };

  const hideRequest = () => {
    setRequest(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div
        className="flex"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link
          href={`/catalog?q=${encodeURI(label)}`}
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
            <button
              onClick={orderCall}
              className="py-2 px-4 boxshadow bg-orange-bg underline text-white"
            >
              Уточнить размер или цены
            </button>
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
                        onClick={menuPanel}
                        className="opacity-60 first-letter:font-bold hover:opacity-100"
                      >
                        <Link
                          href={`/catalog/${encodeURI(
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
              <div className="z-50">
                <button
                  onClick={orderRequest}
                  className="py-2 px-4 boxshadow bg-orange-bg underline text-white"
                >
                  Оставить заявку
                  <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
                </button>
              </div>
              <OurContacts />
            </div>
          )}
        </div>
      </div>
      <div
        className={` ${
          call ? "flex" : "hidden"
        } justify-center items-center fixed top-0 left-0 z-50 px-6 w-full h-[100vh]`}
      >
        <div
          onClick={hideCall}
          className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
        ></div>
        <div className="relative z-50">
          <OrderCall
            topic={"Запросить прайс"}
            description={"Оставьте ваши контакты и мы отправим Вам прайс"}
            placeHolder1={"Ваш номер телефона"}
            placeHolder2={"Ваше имя / Ваша компания"}
            firstType={"telephone"}
            secondType={"name"}
          />
          <div onClick={hideCall}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        className={` ${
          request ? "flex" : "hidden"
        } justify-center items-center fixed top-0 left-0 z-50 px-6 w-full h-[100vh]`}
      >
        <div
          onClick={hideRequest}
          className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
        ></div>
        <div className="relative z-50">
          <OrderCall
            topic={"Оставить заявку"}
            description={"Оставьте ваши контакты и мы ответим Вам"}
            placeHolder1={"Почта"}
            placeHolder2={"Ваше сообщение / товар / уточнение"}
            firstType={"email"}
            secondType={"meesage"}
          />
          <div onClick={hideRequest}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverMenuItem;
