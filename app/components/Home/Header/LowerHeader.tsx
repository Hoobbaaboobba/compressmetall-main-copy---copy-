"use client";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import logo from "../../../assets/logo.png";

import { useState } from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Search from "./Search";
import OrderCall from "./OrderCall";

const LowerHeader = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [call, setCall] = useState(false);
  const [price, setPrice] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const orderCall = () => {
    setCall(true);
    document.body.style.overflowY = "hidden";
  };

  const hideCall = () => {
    setCall(false);
    document.body.style.overflowY = "auto";
  };

  const orderPrice = () => {
    setPrice(true);
    document.body.style.overflowY = "hidden";
  };

  const hidePrice = () => {
    setPrice(false);
    document.body.style.overflowY = "auto";
  };

  const navbarShow = () => {
    setMenu(true);
    document.body.classList.add("overflowHidden");
  };
  const navbarHide = () => {
    setMenu(false);
    document.body.classList.remove("overflowHidden");
  };

  const pathname = usePathname();

  return (
    <nav className="text-white nav bg-gray-bg flex justify-center items-center flex-col w-full text-lg z-10 ">
      <div className="sticky top-0 left-0 hidden xl:flex justify-center items-center max-w-[1300px] w-full">
        <div className={`flex justify-center w-full`}>
          <div className="relative w-1/5">
            <MenuButton src={"/catalog"} name="Каталог" icon="true" />
          </div>
          <div
            onClick={orderPrice}
            className="relative w-1/5 flex py-2 font-medium justify-center items-center gap-8
      xl:hover:bg-orange-bg transition"
          >
            Прайс
          </div>
          <div
            className="relative w-1/5"
            onMouseLeave={() => setPopUp(false)}
            onMouseEnter={() => setPopUp(true)}
          >
            <MenuButton src={"/about_company"} name="Компания" icon="false" />
            <div className="absolute top-[44px] bg-transparent w-full">
              <div
                className={`${
                  popUp ? "block" : "hidden"
                } bg-white rounded-lg mt-2 text-black w-full text-start flex flex-col py-2 shadow-lg`}
              >
                <Link
                  href={`/about_company/requisites`}
                  className="hover:bg-orange-bg hover:text-white py-1 px-2"
                >
                  Реквизиты
                </Link>
                <Link
                  href={`/about_company/partners`}
                  className="hover:bg-orange-bg hover:text-white py-1 px-2"
                >
                  Партнёры
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-1/5">
            <MenuButton src={"/contacts"} name="Контакты" icon="false" />
          </div>
          <div className="relative w-1/5">
            <MenuButton src={"/certificates"} name="Сертификаты" icon="false" />
          </div>
        </div>

        {/* <div
          className={`${
            search ? "block" : "hidden"
          } bg-gray-bg transition z-10 duration-300 max-w-[1300px] w-full h-[60px] bg-transparent flex gap-2 justify-center items-center fixed top-[100px]`}
        >
          <input
            type="text"
            className={`w-full h-[42px] rounded-md px-4 text-gray-bg outline-none`}
            placeholder="Найти"
          />
          <button className="py-2 px-4 bg-orange-bg rounded-md">Найти</button>
          <div onClick={() => setSearch(false)}>
            <CloseOutlinedIcon
              fontSize="large"
              className="cursor-pointer hover:text-orange-bg"
            />
          </div>
        </div> */}
      </div>
      <div className="flex fixed top-0 left-0 w-full bg-white shadow-md xl:hidden justify-between items-center px-6 py-2">
        <div
          className={`fixed ${
            search ? "flex" : "hidden"
          } gap-2 md:hidden justify-between items-center left-0 top-0 bg-white w-full h-[84px] px-6`}
        >
          <div className="w-full">
            <Search />
          </div>
          <div className="bg-orange-bg p-1 border-orange-bg">
            <CloseOutlinedIcon
              fontSize="large"
              onClick={() => setSearch(false)}
              className="cursor-pointer border border-orange-bg"
            />
          </div>
        </div>
        <Link href="/" onClick={() => setMenu(false)}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden md:block">
          <Search />
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setSearch(true)}
            className="cursor-pointer bg-orange-bg p-1 md:hidden"
          >
            <SearchOutlinedIcon fontSize="large" />
          </button>
          {menu ? (
            <div className="bg-orange-bg p-1">
              <CloseOutlinedIcon
                fontSize="large"
                onClick={navbarHide}
                className="cursor-pointer "
              />
            </div>
          ) : (
            <div className="bg-orange-bg p-1">
              <MenuOutlinedIcon
                fontSize="large"
                onClick={navbarShow}
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={`xl:hidden ${
          menu ? "translate-x-0" : "translate-x-[100%]"
        } backdrop-blur-md w-full transition-all duration-200 h-[100dvh] flex flex-col fixed top-[84px] bg-gray-bg justify-start items-center z-30`}
      >
        <Link
          href="/catalog"
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname === "/catalog" || pathname === "/catalog/proisvodstvo"
              ? "bg-orange-bg"
              : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Каталог
        </Link>
        <hr className="border w-full" />
        <button
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname === "/price" ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={orderPrice}
        >
          Прайс
        </button>
        <hr className="border w-full" />
        <Link
          href="/about_company"
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname === "/about_company" ||
            pathname === "/about_company/certificate"
              ? "bg-orange-bg"
              : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Компания
        </Link>
        <hr className="border w-full" />
        <Link
          href="/contacts"
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname === "/contacts" ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Контакты
        </Link>
        <hr className="border w-full" />
        <Link
          href="/certificates"
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname === "/certificates" ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Сертификаты
        </Link>
        <hr className="border w-full" />
        <div className="w-full flex flex-col justify-center items-center">
          <button
            onClick={orderCall}
            className="py-6 text-lg w-full bg-orange-bg underline font-bold"
          >
            Оставить заявку
            <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
          </button>
          <h1 className="text-center p-2">
            Продажа металлопроката по всей территории России и СНГ
          </h1>
        </div>
      </div>
      <div
        className={` ${
          call ? "flex" : "hidden"
        } justify-center items-center fixed top-0 left-0 z-30 px-6 w-full h-[100vh]`}
      >
        <div
          onClick={hideCall}
          className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
        ></div>
        <div className="relative z-50">
          <OrderCall
            topic={"Оставить заявку"}
            description={"Оставьте ваши контакты и мы ответим Вам"}
            placeHolder1={"Почта"}
            placeHolder2={"Ваше имя / Ваша компания"}
            firstType={"Почта"}
            secondType={"Имя"}
          />
          <div onClick={hideCall}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        className={` ${
          price ? "flex" : "hidden"
        } justify-center items-center fixed top-0 left-0 z-50 px-6 w-full h-[100vh]`}
      >
        <div
          onClick={hidePrice}
          className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
        ></div>
        <div className="relative z-50">
          <OrderCall
            topic={`Запросить прайс`}
            description={"Оставьте ваши контакты и мы отправим Вам прайс"}
            placeHolder1={"Ваш номер телефона"}
            placeHolder2={"Товар"}
            firstType={"Номер телефона"}
            secondType={"Товар"}
          />
          <div onClick={hidePrice}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LowerHeader;
