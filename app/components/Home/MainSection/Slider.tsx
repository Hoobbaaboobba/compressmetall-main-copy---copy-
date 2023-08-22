"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import OrderCall from "../Header/OrderCall";

import { useState } from "react";

export const Slider = () => {
  const [call, setCall] = useState(false);

  const orderCall = () => {
    setCall(true);
    document.body.style.overflowY = "hidden";
  };

  const hideCall = () => {
    setCall(false);
    document.body.style.overflowY = "auto";
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider text-white w-full max-w-[1050px]"
      >
        <div className="keen-slider__slide slider1 relative max-w-[1050px]">
          <div className="absolute top-[20%] left-[5%] z-10 flex justify-start items-start flex-col gap-1">
            <h1 className="uppercase text-xl sm:text-4xl font-bold">
              широкий выбор <br /> металлургической продукции
            </h1>
            <p className="leading-5 text-sm sm:text-md ml-4">
              Ознакомьтесь с нашим ассортиментом прямо сейчас и <br />{" "}
              приобретите идеальные материалы для вашего успеха.
            </p>
            <button
              onClick={orderCall}
              className="py-2 px-4 boxshadow bg-orange-bg mt-4 underline"
            >
              Оставить заявку
              <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
            </button>
          </div>
        </div>
        <div className="keen-slider__slide slider2 relative max-w-[1050px]">
          <div className="absolute top-[20%] left-[5%] z-10 flex justify-start items-start flex-col gap-1">
            <h1 className="uppercase text-xl sm:text-4xl font-bold">
              Качественный металлопрокат: <br /> ваш надежный партнер
            </h1>
            <p className="leading-5 text-sm sm:text-md ml-4">
              Склад находится в г.Москва, Шоссе энтузиастов на <br /> территории
              компрессорного завода
            </p>
            <button
              onClick={orderCall}
              className="py-2 px-4 boxshadow bg-orange-bg mt-4 underline"
            >
              Оставить заявку
              <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
            </button>
          </div>
        </div>
        <div className="keen-slider__slide slider3 relative max-w-[1050px]">
          <div className="absolute top-[20%] left-[5%] z-10 flex justify-start items-start flex-col gap-1">
            <h1 className="uppercase text-xl sm:text-4xl font-bold">
              Ключ к надежной конструкции: <br /> наш металлопрокат
            </h1>
            <p className="leading-5 text-sm sm:text-md ml-4">
              Доверьтесь качеству и опыту – выберите идеальные <br /> материалы
              для ваших задач.
            </p>
            <button
              onClick={orderCall}
              className="py-2 px-4 boxshadow bg-orange-bg mt-4 underline"
            >
              Оставить заявку
              <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
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
      </div>
    </>
  );
};
