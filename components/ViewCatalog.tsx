"use client";

import CatalogItem from "./Home/MainSection/CatalogItem";
import {
  blackMetal,
  colorMetal,
  metiza,
  nershav,
  precenSplav,
  zincMetal,
} from "./Home/MainSection/productsData";

import OurContacts from "./Home/OurContacts/OurContacts";
import useCatalogModal from "@/hooks/useCatalogModal";
<<<<<<< HEAD
import useLocationModal from "@/hooks/useLocationModal";
=======
>>>>>>> 7b47037 (commt)
import OrangeButton from "./OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";
import Link from "next/link";
import useRequestModal from "@/hooks/useRequestModal";
<<<<<<< HEAD

const items = [
  {
    data: blackMetal,
    label: "Чёрный метал",
    img: "menuCatalog",
    links: true,
  },
  {
    data: colorMetal,
    label: "Цветной метал",
    img: "menuCatalogColor",
    links: true,
  },
  {
    data: nershav,
    label: "Нержавеющая сталь",
    img: "menuCatalogSteel",
    links: true,
  },
  {
    data: zincMetal,
    label: "Оцинкованная сталь",
    img: "menuCatalogZincSteel",
    links: true,
  },
  {
    data: metiza,
    label: "Метизы",
    img: "menuCatalogMetiza",
    links: true,
  },
  {
    data: precenSplav,
    label: "Прецензионные сплавы",
    img: "menuCatalogTruba",
    links: true,
  },
  {
    data: colorMetal,
    label: "Позиции под заказы",
    img: "menuCatalogStroy",
    links: false,
  },
  {
    data: colorMetal,
    label: "Остатки",
    img: "menuCatalogServices",
    links: false,
  },
  {
    data: colorMetal,
    label: "Размотка арматура",
    img: "menuCatalogStroy",
    links: false,
  },
  {
    data: colorMetal,
    label: "Плазменная резка",
    img: "menuCatalogPosotion",
    links: false,
  },
];

const ViewCatalog = () => {
  const { isOpenCatalog, onCloseCatalog, typeOfMenu, changeTypeOfMenu } =
    useCatalogModal();

  const { link } = useLocationModal();
=======
import { usePathname } from "next/navigation";
import { metalArray } from "./Home/MainSection/data";

import Image from "next/image";

const ViewCatalog = () => {
  const {
    isOpenCatalog,
    onCloseCatalog,
    typeOfMenu,
    changeTypeOfMenu,
    onCloseMenu,
  } = useCatalogModal();

  const pathname = usePathname().split("/");
>>>>>>> 7b47037 (commt)
  const { onOpen } = usePriceModal();
  const { onOpen: onOpenRequest } = useRequestModal();

  const showPrice = () => {
    onOpen();
    document.body.style.overflowY = "hidden";
  };

  const showRequest = () => {
    onOpenRequest();
    document.body.style.overflowY = "hidden";
  };

  const onClickLink = () => {
    changeTypeOfMenu("");
    onCloseCatalog();
<<<<<<< HEAD
=======
    onCloseMenu();
>>>>>>> 7b47037 (commt)
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div
        className={`fixed ${
          isOpenCatalog ? "translate-y-0" : "translate-y-[-120%]"
        } left-0 top-
<<<<<<< HEAD
        0 h-[100dvh] w-full bg-white z-10 flex flex-wrap justify-center overflow-y-auto items-start p-5 pb-[160px] sm:px-8 transition duration-200 xl:hidden gap-1`}
      >
        {items.map((card, index) => (
=======
        0 h-[100dvh] w-full bg-white z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-auto p-5 pb-[160px] sm:px-8 transition duration-200 xl:hidden gap-1`}
      >
        {metalArray.map((card, index) => (
>>>>>>> 7b47037 (commt)
          <>
            <div key={index} onClick={() => changeTypeOfMenu(card.label)}>
              <CatalogItem src={card.img} label={card.label} bold="" />
            </div>
            <div
              className={`bg-white left-0 top-0 ml-0 ${
                typeOfMenu === card.label
                  ? "translate-y-0"
                  : "translate-y-[-120%]"
              } fixed z-50 p-4 pb-[150px] lg:pb-12 border w-full h-full overflow-x-hidden overflow-y-auto transition duration-200`}
            >
<<<<<<< HEAD
              <div className="flex flex-col sm:flex-row gap-y-2 justify-center items-center sm:justify-between border-b border-b-black pb-4">
                <h1 className="font-bold text-3xl uppercase">{card.label}</h1>
                <div onClick={showPrice}>
                  <OrangeButton label={"Уточнить размер или цены"} mark />
                </div>
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
                            href={`/${link}/catalog/${product.label}/${item[0]}?i=${item[1]}&q=${item[2]}&amount=${item[3]}`}
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
                  <div onClick={showRequest}>
                    <OrangeButton label={"Оставить заявку"} />
                  </div>
                  <OurContacts />
                </div>
              )}
=======
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h1 className="text-3xl font-bold uppercase">{card.label}</h1>
                <div onClick={showPrice}>
                  <OrangeButton label={"Уточнить размер или цены"} />
                </div>
              </div>
              <hr className="w-full my-4" />
              <div
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 `}
              >
                {card.items.map((metal) => (
                  <Link
                    onClick={onClickLink}
                    href={`/${pathname[1] || "moscow"}/catalog?q=${encodeURI(
                      metal.name
                    )}`}
                    className="hover:shadow-md"
                  >
                    <Image
                      src={require(`../public/${metal.img}.png`)}
                      alt={card.label}
                      width={240}
                      height={280}
                      placeholder="blur"
                    />
                  </Link>
                ))}
              </div>
>>>>>>> 7b47037 (commt)
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ViewCatalog;
