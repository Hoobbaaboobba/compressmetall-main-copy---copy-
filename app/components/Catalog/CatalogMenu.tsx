import LinkButton from "./LinkButton";

import Link from "next/link";

const linkItems = [
  { label: "Каталог товаров", href: "/catalog" },
  { label: "Производство", href: "/catalog/proisvodstvo" },
];

const CatalogMenu = () => {
  return (
    <div className="max-w-[250px] w-full">
      <Link
        href="/"
        className="font-medium opacity-70 hover:text-orange-bg transition"
      >
        Главная
      </Link>

      <h1 className="text-4xl font-bold text-gray-bg">Каталог</h1>

      <div className="flex flex-col my-[30px] bg-light-gray rounded-[10px] sticky top-[180px] left-0">
        <LinkButton navLinks={linkItems} />
      </div>
    </div>
  );
};

export default CatalogMenu;
