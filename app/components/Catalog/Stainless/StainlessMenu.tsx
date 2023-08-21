import LinkButton from "./LinkButton";

import Link from "next/link";

const linkItems = [
  { label: "Листы", href: "/catalog/stainless/lists" },
  { label: "Проволока", href: "/catalog/stainless/wires" },
  { label: "Сортовой", href: "/catalog/stainless/sorts" },
  { label: "Трубы", href: "/catalog/stainless/pipes" },
];

const StainlessMenu = () => {
  return (
    <div className="max-w-[250px]">
      <Link
        href="/"
        className="font-medium opacity-70 hover:text-orange-bg transition"
      >
        Главная
      </Link>

      <h1 className="text-4xl font-bold text-gray-bg">
        Нержавеющий металлопрокат
      </h1>

      <div className="flex flex-col my-[30px] bg-light-gray rounded-[10px] sticky top-[180px] left-0">
        <LinkButton navLinks={linkItems} />
      </div>
    </div>
  );
};

export default StainlessMenu;
