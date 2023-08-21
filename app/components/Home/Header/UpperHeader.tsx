"use client";

import Image from "next/image";
import Link from "next/link";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import logo from "../../../assets/logo.png";
import CityButton from "./CityButton";
import Search from "./Search";
import OrderCall from "./OrderCall";
import { useState } from "react";

const UpperHeader = () => {
  const [call, setCall] = useState(false);

  const orderCall = () => {
    setCall(true);
    document.body.style.overflowY = "hidden";
  };

  const hideCall = () => {
    setCall(false);
    document.body.style.overflowY = "auto";
  };
  return (
    <div className="hidden xl:flex justify-center bg-white items-center w-full text-white py-3">
      <div className="flex justify-between items-center max-w-[1300px] w-full">
        <Link href="/">
          <Image src={logo} alt="logo" width={135} height={68} />
        </Link>
        <CityButton />
        <h3 className="text-base font-normal text-black opacity-80">
          Продажа металлопроката по всей <br /> территории России и СНГ
        </h3>
        <Search />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <EmailOutlinedIcon className="text-orange-bg mt-[3px]" />
            <h3 className="font-bold text-xl text-black opacity-80">
              info@kometal.ru
            </h3>
          </div>
          <button
            onClick={orderCall}
            className="text-lg w-full text-orange-bg underline font-bold"
          >
            Заказать звонок
          </button>
        </div>
      </div>
      <div
        className={` ${
          call ? "flex" : "hidden"
        } justify-center items-center fixed top-0 left-0 z-50 px-6 w-full h-[100vh]`}
      >
        <div
          onClick={hideCall}
          className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
        ></div>
        <div className="relative z-50">
          <OrderCall
            topic={"Заказать звонок"}
            description={"Оставьте ваши контакты и мы перезвоним Вам"}
            placeHolder1={"Ваше имя / Ваша компания"}
            placeHolder2={"Ваш номер телефона"}
            firstType={"name"}
            secondType={"telephone"}
          />
          <div onClick={hideCall}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
