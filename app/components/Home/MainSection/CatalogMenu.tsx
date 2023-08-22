import menuCatalog from "../../../assets/menuCatalog.png";
import menuCatalogColor from "../../../assets/menuCatalogColor.png";
import menuCatalogSteel from "../../../assets/menuCatalogSteel.png";
import menuCatalogZincSteel from "../../../assets/menuCatalogZincSteel.png";
import menuCatalogMetiza from "../../../assets/menuCatalogMetiza.png";
import menuCatalogTruba from "../../../assets/menuCatalogTruba.png";
import menuCatalogSplav from "../../../assets/menuCatalogSplav.png";
import menuCatalogStroy from "../../../assets/menuCatalogStroy.png";
import menuCatalogPosotion from "../../../assets/menuCatalogPosotion.png";
import menuCatalogServices from "../../../assets/menuCatalogServices.png";

import Link from "next/link";

import {
  blackMetal,
  colorMetal,
  nershav,
  zincMetal,
  metiza,
  truba,
  precenSplav,
} from "./productsData";
import HoverMenuItem from "./hoverMenuItem";

const CatalogMenu = () => {
  const items = [
    {
      label: "Чёрный металл",
      img: menuCatalog,
      data: blackMetal,
      bold: "",
      items: true,
    },
    {
      label: "Цветной металл",
      img: menuCatalogColor,
      data: colorMetal,
      bold: "",
      items: true,
    },
    {
      label: "Нержавеющая сталь",
      img: menuCatalogSteel,
      data: nershav,
      bold: "",
      items: true,
    },
    {
      label: "Оцинкованная сталь",
      img: menuCatalogZincSteel,
      data: zincMetal,
      bold: "",
      items: true,
    },
    {
      label: "Метиза",
      img: menuCatalogMetiza,
      data: metiza,
      bold: "",
      items: true,
    },
    {
      label: "Трубопроводная арматура",
      img: menuCatalogTruba,
      data: truba,
      bold: "",
      items: true,
    },
    {
      label: "Прецензионные сплавы",
      img: menuCatalogSplav,
      data: precenSplav,
      bold: "",
      items: true,
    },
    {
      label: "Позиции под заказы",
      img: menuCatalogPosotion,
      data: blackMetal,
      bold: "",
      items: false,
    },
    {
      label: "Остатки",
      img: menuCatalogStroy,
      data: blackMetal,
      bold: "",
      items: false,
    },
    {
      label: "Размотка арматура",
      img: menuCatalogPosotion,
      data: blackMetal,
      bold: "",
      items: false,
    },
    {
      label: "Плазменная резка",
      img: menuCatalogServices,
      data: blackMetal,
      bold: "",
      items: false,
    },
  ];

  return (
    <div className="flex-col relative hidden xl:flex z-30">
      <div className="sticky top-[137px] overflow-y-auto h-[81vh] mt-2 bg-">
        <Link href="/catalog?q=Все товары">
          <div className="flex justify-center items-center">
            <div className="w-[80px] h-[80px] bg-light-gray font-bold flex justify-center items-center text-orange-bg text-lg">
              А-Я
            </div>
            <div className="w-[150px] flex justify-center items-center">
              <h1 className="font-bold text-base">Все товары</h1>
            </div>
          </div>
        </Link>
        <hr />
        {items.map((item, index) => (
          <>
            <HoverMenuItem
              key={index}
              products={item.data}
              productImg={item.img.src}
              label={item.label}
              topic={item.label}
              bold={item.bold}
              items={item.items}
            />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default CatalogMenu;
