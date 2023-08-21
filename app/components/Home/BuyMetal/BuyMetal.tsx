"use client";

import Image from "next/image";
import buyProcess1 from "../../../assets/buyProcess1.jpg";
import buyProcess2 from "../../../assets/buyProcess2.png";
import { useState } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import OrderCall from "../Header/OrderCall";

const BuyMetal = () => {
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
    <section className="w-full flex justify-center items-center">
      <div className="max-w-[1000px] w-full text-center flex flex-col justify-center items-center sm:text-start px-4">
        <div>
          <h1 className="text-xl text-gray-bg font-bold mb-8">
            Порядок покупки металлопроката
          </h1>
          <Image
            src={buyProcess1.src}
            alt="buy-process"
            className="hidden sm:block"
            width={1000}
            height={60}
          />
          <Image
            src={buyProcess2.src}
            alt="buy-process"
            className="block sm:hidden"
            width={500}
            height={600}
          />
        </div>
        <div className="w-full flex justify-center items-center text-white">
          <button
            onClick={orderCall}
            className="py-2 px-4 boxshadow bg-orange-bg mt-4 underline"
          >
            Оставить заявку
            <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
          </button>
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
          <div className="relative z-50 ">
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
      </div>
    </section>
  );
};

export default BuyMetal;
