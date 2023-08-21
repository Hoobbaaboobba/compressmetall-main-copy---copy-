import LinkButton from "./LinkButton";

import Link from "next/link";

const linkItems = [
  { label: "Доставка", href: "/clients/delivery" },
  { label: "ГОСТ и ТУ", href: "/clients/gost" },
  { label: "Сортамент и применение", href: "/clients/sortament" },
  { label: "Ценообразование", href: "/clients/price" },
  {
    label: "Производство металлоизделий и проката",
    href: "/clients/proisvodstvo",
  },
  { label: "Дополнительные материалы", href: "/clients/additional" },
];

const ClientsMenu = () => {
  return (
    <div className="max-w-[250px] w-full">
      <Link
        href="/"
        className="font-medium opacity-70 hover:text-orange-bg transition"
      >
        Главная
      </Link>

      <h1 className="text-4xl font-bold text-gray-bg">Клиентам</h1>

      <div className="flex flex-col my-[30px] bg-light-gray rounded-[10px]">
        <LinkButton navLinks={linkItems} />
      </div>
    </div>
  );
};

export default ClientsMenu;
