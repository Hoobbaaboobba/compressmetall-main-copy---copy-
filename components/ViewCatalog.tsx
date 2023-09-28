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
import OrangeButton from "./OrangeButton";
import usePriceModal from "@/hooks/usePriceModal";
import Link from "next/link";
import useRequestModal from "@/hooks/useRequestModal";
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
    onCloseMenu();
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div
        className={`fixed ${
          isOpenCatalog ? "translate-y-0" : "translate-y-[-120%]"
        } left-0 top-
        0 h-[100dvh] w-full bg-white z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-auto p-5 pb-[160px] sm:px-8 transition duration-200 xl:hidden gap-1`}
      >
        {metalArray.map((card, index) => (
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
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ViewCatalog;
