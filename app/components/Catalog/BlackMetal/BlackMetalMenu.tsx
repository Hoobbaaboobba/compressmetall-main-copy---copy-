import LinkButton from "./LinkButton";

import Link from "next/link";

const linkItems = [
  { label: "Листы", href: "/catalog/black_metal/lists" },
  { label: "Сортовой", href: "/catalog/black_metal/sorts" },
  { label: "Трубы круглые", href: "/catalog/black_metal/pipes" },
  { label: "Электротехническая сталь", href: "/catalog/black_metal/e-steel",},
];

const NonFerrousMetalMenu = () => {
  return (
    <div className="max-w-[250px]">
      <Link
        href="/"
        className="font-medium opacity-70 hover:text-orange-bg transition"
      >
        Главная
      </Link>

      <h1 className="text-4xl font-bold text-gray-bg">Чёрный металлопрокат</h1>

      <div className="flex flex-col my-[30px] bg-light-gray rounded-[10px] sticky top-[180px] left-0">
        <LinkButton navLinks={linkItems} />
      </div>
    </div>
  );
};

export default NonFerrousMetalMenu;
