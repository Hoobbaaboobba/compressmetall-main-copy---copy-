"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import OrderCall from "../Header/OrderCall";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface DynamicPageProps {
  category: string;
  id: string;
}

const DynamicPage: React.FC<DynamicPageProps> = ({ category, id }) => {
  const [call, setCall] = useState(false);

  const orderCall = () => {
    setCall(true);
    document.body.style.overflowY = "hidden";
  };

  const hideCall = () => {
    setCall(false);
    document.body.style.overflowY = "auto";
  };

  const params = useSearchParams();
  const image = params.get("i") || "";
  const isInStock = params.get("q") || "";
  const amount = params.get("amount") || "";
  return (
    <>
      <div className="max-w-[1000px] w-full flex flex-col gap-4 px-4">
        <h1 className="text-xl font-bold text-center md:text-start text-gray-bg">
          {category}
        </h1>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 ">
          <Image
            src={require(`../../../assets/${image}.png`)}
            alt={category}
            width={400}
            height={250}
            className="border border-light-gray rounded-[15px]"
          />
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <h1 className="text-lg max-w-[400px] text-center">{id}</h1>
            <h2 className="opacity-60">
              {isInStock} (<span className="text-orange-bg">{amount}</span>)
            </h2>
            <button
              onClick={orderCall}
              className="py-2 px-4 boxshadow bg-orange-bg underline text-white"
            >
              Запросить прайс
              <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
            </button>
          </div>
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
            topic={`Запросить прайс`}
            description={"Оставьте ваши контакты и мы отправим Вам прайс"}
            placeHolder1={"Ваш номер телефона"}
            placeHolder2={"Товар"}
            firstType={"Номер телефона"}
            secondType={"Товар"}
          />
          <div onClick={hideCall}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicPage;
