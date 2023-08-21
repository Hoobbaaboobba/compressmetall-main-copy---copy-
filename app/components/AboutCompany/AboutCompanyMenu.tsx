import LinkButton from "./LinkButton";

import Link from "next/link";

const linkItems = [
  { label: "О компании", href: "/about_company" },
  { label: "Сертификаты", href: "/about_company/certificate" },
  { label: "Партнеры", href: "/about_company/partners" },
  { label: "Отзывы", href: "/about_company/reviews" },
  { label: "Вакансии", href: "/about_company/vacancies" },
  { label: "Реквизиты", href: "/about_company/requisites" },
];

const AboutCompanyMenu = () => {
  return (
    <div className="max-w-[250px] w-full">
      <Link
        href="/"
        className="font-medium opacity-70 hover:text-orange-bg transition"
      >
        Главная
      </Link>

      <h1 className="text-4xl font-bold text-gray-bg">Компания</h1>

      <div className="flex flex-col my-[30px] bg-light-gray rounded-[10px]">
        <LinkButton navLinks={linkItems} />
      </div>
    </div>
  );
};

export default AboutCompanyMenu;
