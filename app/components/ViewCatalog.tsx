"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import CatalogItem from "./Home/MainSection/CatalogItem";
import {
  blackMetal,
  colorMetal,
  metiza,
  nershav,
  precenSplav,
  zincMetal,
} from "./Home/MainSection/productsData";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import menuCatalog from "../assets/menuCatalog.png";
import menuCatalogColor from "../assets/menuCatalogColor.png";
import menuCatalogSteel from "../assets/menuCatalogSteel.png";
import menuCatalogZincSteel from "../assets/menuCatalogZincSteel.png";
import menuCatalogMetiza from "../assets/menuCatalogMetiza.png";
import menuCatalogTruba from "../assets/menuCatalogTruba.png";
import menuCatalogSplav from "../assets/menuCatalogSplav.png";
import menuCatalogStroy from "../assets/menuCatalogStroy.png";
import menuCatalogPosotion from "../assets/menuCatalogPosotion.png";
import menuCatalogServices from "../assets/menuCatalogServices.png";

import { useState } from "react";
import Link from "next/link";
import OrderCall from "./Home/Header/OrderCall";
import OurContacts from "./Home/OurContacts/OurContacts";

const items = [
  {
    data: blackMetal,
    label: "Чёрный метал",
    img: menuCatalog,
    links: true,
  },
  {
    data: colorMetal,
    label: "Цветной метал",
    img: menuCatalogColor,
    links: true,
  },
  {
    data: nershav,
    label: "Нержавеющая сталь",
    img: menuCatalogSteel,
    links: true,
  },
  {
    data: zincMetal,
    label: "Оцинкованная сталь",
    img: menuCatalogZincSteel,
    links: true,
  },
  {
    data: metiza,
    label: "Метиза",
    img: menuCatalogMetiza,
    links: true,
  },
  {
    data: precenSplav,
    label: "Прецензионные сплавы",
    img: menuCatalogTruba,
    links: true,
  },
  {
    data: colorMetal,
    label: "Строительные материалы",
    img: menuCatalogSplav,
    links: true,
  },
  {
    data: colorMetal,
    label: "Позиции под заказы",
    img: menuCatalogStroy,
    links: false,
  },
  {
    data: colorMetal,
    label: "Остатки",
    img: menuCatalogServices,
    links: false,
  },
  {
    data: colorMetal,
    label: "Размотка арматура",
    img: menuCatalogStroy,
    links: false,
  },
  {
    data: colorMetal,
    label: "Плазменная резка",
    img: menuCatalogPosotion,
    links: false,
  },
];

const ViewCatalog = () => {
  const [catalog, setCatalog] = useState(false);
  const [call, setCall] = useState(false);
  const [menu, setMenu] = useState<{ type: string }>({ type: "" });

  const orderCall = () => {
    setCall(true);
    document.body.style.overflowY = "hidden";
  };

  const hideCall = () => {
    setCall(false);
    document.body.style.overflowY = "auto";
  };

  const showCatalog = () => {
    if (menu.type === "") {
      setCatalog((event) => !event);
    }
    if (menu) {
      setMenu({ type: "" });
    }
  };

  const onClickLink = () => {
    setMenu({ type: "" });
    setCatalog(false);
  };

  return (
    <>
      <button
        onClick={showCatalog}
        className="w-full boxshadow z-[11] text-white py-4 bg-orange-bg fixed bottom-[0vh] left-0 xl:hidden underline"
      >
        {catalog && menu.type ? "Назад" : ""}
        {catalog && menu.type === "" ? "Закрыть каталог" : ""}
        {catalog === false && menu.type === "" ? "Посмотреть каталог" : ""}
        {catalog ? (
          <CancelOutlinedIcon fontSize="small" className="ml-2" />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
        )}
      </button>
      <div
        className={`fixed ${
          catalog ? "translate-y-0" : "translate-y-[-120%]"
        } left-0 top-
        0 h-[100dvh] w-full bg-white z-10 flex flex-wrap justify-center overflow-y-auto items-start p-5 pb-[160px] sm:px-8 transition duration-200 xl:hidden gap-1`}
      >
        {items.map((card, index) => (
          <>
            <div key={index} onClick={() => setMenu({ type: card.label })}>
              <CatalogItem src={card.img.src} label={card.label} bold="" />
            </div>
            <div
              className={`bg-white left-0 top-0 ml-0 ${
                menu.type === card.label
                  ? "translate-y-0"
                  : "translate-y-[-120%]"
              } fixed z-50 p-4 pb-[150px] lg:pb-12 border w-full h-full overflow-x-hidden overflow-y-auto transition duration-200`}
            >
              <div className="flex flex-col sm:flex-row gap-y-2 justify-center items-center sm:justify-between border-b border-b-black pb-4">
                <h1 className="font-bold text-3xl uppercase">{card.label}</h1>
                <button
                  onClick={orderCall}
                  className="py-2 px-4 boxshadow bg-orange-bg underline text-white"
                >
                  Уточнить размер или цены
                </button>
              </div>
              {card.links ? (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-2 lg:p-4">
                  {card.data.map((product) => (
                    <div key={product.id} className="flex flex-col">
                      <h2 className="font-bold text-xl">{product.label}</h2>
                      <ul className="">
                        {product.items.map((item: any, index: number) => (
                          <Link
                            key={index}
                            href={`/catalog/${product.label}/${item[0]}?i=${item[1]}&q=${item[2]}&amount=${item[3]}`}
                          >
                            <li
                              onClick={onClickLink}
                              className="opacity-60 first-letter:font-bold hover:opacity-100"
                            >
                              <h1>{item[0]}</h1>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="max-w-[600px] my-4">
                    <h1>
                      ООО &ldquo;КОМПРЕССМЕТАЛ&rdquo; предлагает к реализации
                      невостребованные остатки металла от производства по
                      оптовым ценам. Чтобы купить металл по сниженным ценам,
                      ознакомьтесь с Прайсом на:
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
                      Возможен самовывоз или доставка.Цены ниже рыночных.По
                      каждой позиции можно получить консультацию менеджера и
                      оформить заказ в любой удобной вам форме:
                    </h2>
                  </div>
                  <button
                    onClick={orderCall}
                    className="py-2 px-4 boxshadow bg-orange-bg underline text-white"
                  >
                    Оставить заявку
                  </button>
                  <OurContacts />
                </div>
              )}
            </div>
          </>
        ))}
      </div>
      <div
        className={` ${
          call ? "flex" : "hidden"
        } justify-center items-center fixed top-0 left-0 z-30 px-6 w-full h-[100vh]`}
      >
        <div
          onClick={hideCall}
          className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
        ></div>
        <div className="relative z-50">
          <OrderCall
            topic={"Запросить прайс"}
            description={"Оставьте ваши контакты и мы отправим Вам прайс"}
            placeHolder1={"Номер телефона"}
            placeHolder2={"Ваше сообщение / товар / уточнение"}
            firstType={"telophone"}
            secondType={"Ваше сообщение / товар / уточнение"}
          />
          <div onClick={hideCall}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCatalog;
