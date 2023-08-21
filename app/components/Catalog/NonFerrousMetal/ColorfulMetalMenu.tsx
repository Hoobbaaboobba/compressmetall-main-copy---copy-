import LinkButton from "./LinkButton";

import Link from "next/link";

const linkItems = [
  { label: "Алюминий", href: "/catalog/colorful_metal/aluminum" },
  { label: "Медь", href: "/catalog/colorful_metal/copper" },
  { label: "Бронза", href: "/catalog/colorful_metal/bronze" },
  { label: "Латунь", href: "/catalog/colorful_metal/brass" },
  { label: "Свинец", href: "/catalog/colorful_metal/lead" },
];

const ColorfulMetalMenu = () => {
  return (
    <div className="max-w-[250px]">
      <Link
        href="/"
        className="font-medium opacity-70 hover:text-orange-bg transition"
      >
        Главная
      </Link>

      <h1 className="text-4xl font-bold text-gray-bg">Цветной металлопрокат</h1>

      <div className="flex flex-col my-[30px] bg-light-gray rounded-[10px] sticky top-[180px] left-0">
        <LinkButton navLinks={linkItems} />
      </div>
    </div>
  );
};

export default ColorfulMetalMenu;
