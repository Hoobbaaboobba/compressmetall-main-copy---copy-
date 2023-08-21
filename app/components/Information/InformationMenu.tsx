import LinkButton from "./LinkButton";

import Link from "next/link";

const linkItems = [
  { label: "Акции", href: "/information/sales" },
  { label: "Новости", href: "/information/news" },
  { label: "Статьи", href: "/information/articles" },
  { label: "Вопрос ответ", href: "/information/questions" },
];

const InformationMenu = () => {
  return (
    <div className="max-w-[250px] w-full">
      <Link
        href="/"
        className="font-medium opacity-70 hover:text-orange-bg transition"
      >
        Главная
      </Link>

      <h1 className="text-4xl font-bold text-gray-bg">Информация</h1>

      <div className="flex flex-col my-[30px] bg-light-gray rounded-[10px]">
        <LinkButton navLinks={linkItems} />
      </div>
    </div>
  );
};

export default InformationMenu;
