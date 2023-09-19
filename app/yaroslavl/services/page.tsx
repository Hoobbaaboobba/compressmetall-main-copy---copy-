"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import OurContacts from "../../../components/Home/OurContacts/OurContacts";
import OrderCall from "../../../components/Home/Header/OrderCall";
import { useState } from "react";

const ServicesPage = () => {
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
    <main>
      <div className="w-full p-6 z-50">
        <div className="max-w-[600px] my-4">
          <h1>
            ООО &ldquo;КОМПРЕССМЕТАЛ&rdquo; предлагает к реализации
            невостребованные остатки металла от производства по оптовым ценам.
            Чтобы купить металл по сниженным ценам, ознакомьтесь с Прайсом на:
          </h1>
          <ul className="flex flex-col my-3">
            <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
              обрез металла
            </li>
            <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
              невостребованный металлопрокат
            </li>
            <li className="ml-4 relative before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[12px] before:left-[-10px]">
              неликвиды металла
            </li>
          </ul>
          <h2>
            Возможен самовывоз или доставка.Цены ниже рыночных.По каждой позиции
            можно получить консультацию менеджера и оформить заказ в любой
            удобной вам форме:
          </h2>
        </div>
        <div className="z-50">
          <button
            onClick={orderCall}
            className="py-2 px-4 boxshadow bg-orange-bg underline text-white"
          >
            Оставить заявку
            <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
          </button>
        </div>
        <OurContacts />
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
            topic={"Оставить заявку"}
            description={"Оставьте ваши контакты и мы ответим Вам"}
            placeHolder1={"Почта"}
            placeHolder2={"Ваше имя / Ваша компания"}
            firstType={"email"}
            secondType={"name"}
          />
          <div onClick={hideCall}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
