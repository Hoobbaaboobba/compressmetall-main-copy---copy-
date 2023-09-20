"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import useRequestModal from "@/hooks/useRequestModal";
import OrangeButton from "@/components/OrangeButton";
import Image from "next/image";

import sliderImageFactory from "../../../public/mainphoto.png";
import sliderImageMap from "../../../public/backgroundMap.png";
import sliderImageMetal from "../../../public/backgroundImage.png";

export const Slider = () => {
  const { onOpen } = useRequestModal();

  const showRequest = () => {
    onOpen();
    document.body.style.overflowY = "hidden";
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
    <div
      ref={sliderRef}
      className="keen-slider text-white w-full max-w-[1050px]"
    >
      <div className="keen-slider__slide slider1 relative max-w-[1050px]">
        <Image
          src={sliderImageFactory}
          alt="slider_img"
          quality={100}
          fill
          sizes="(max-width: 1050px), (height: 300px)"
          style={{
            objectFit: "cover",
            objectPosition: "top right",
          }}
          placeholder="blur"
        />
        <div className="absolute top-[20%] left-[5%] z-10 flex justify-start items-start flex-col gap-1">
          <h1 className="uppercase text-xl sm:text-4xl font-bold">
            широкий выбор <br /> металлургической продукции
          </h1>
          <p className="leading-5 text-sm sm:text-md ml-4">
            Ознакомьтесь с нашим ассортиментом прямо сейчас и <br /> приобретите
            идеальные материалы для вашего успеха.
          </p>
          <div onClick={showRequest} className="mt-2">
            <OrangeButton label={"Оставить заявку"} />
          </div>
        </div>
      </div>
      <div className="keen-slider__slide slider2 relative max-w-[1050px]">
        <Image
          src={sliderImageMap}
          alt="slider_img"
          quality={100}
          fill
          sizes="(width: 100%), (height: 300px)"
          style={{
            objectFit: "cover",
            objectPosition: "60% 50%",
          }}
          placeholder="blur"
        />
        <div className="absolute top-[20%] left-[5%] z-10 flex justify-start items-start flex-col gap-1">
          <h1 className="uppercase text-xl sm:text-4xl font-bold">
            Качественный металлопрокат: <br /> ваш надежный партнер
          </h1>
          <p className="leading-5 text-sm sm:text-md ml-4">
            Склад находится в г.Москва, Шоссе энтузиастов на <br /> территории
            компрессорного завода
          </p>
          <div onClick={showRequest} className="mt-2">
            <OrangeButton label={"Оставить заявку"} />
          </div>
        </div>
      </div>
      <div className="keen-slider__slide slider3 relative max-w-[1050px]">
        <Image
          src={sliderImageMetal}
          alt="slider_img"
          quality={100}
          fill
          sizes="(width:100%, (height: 300px)"
          style={{
            objectFit: "cover",
            objectPosition: "top right",
          }}
          placeholder="blur"
        />
        <div className="absolute top-[20%] left-[5%] z-10 flex justify-start items-start flex-col gap-1">
          <h1 className="uppercase text-xl sm:text-4xl font-bold">
            Ключ к надежной конструкции: <br /> наш металлопрокат
          </h1>
          <p className="leading-5 text-sm sm:text-md ml-4">
            Доверьтесь качеству и опыту – выберите идеальные <br /> материалы
            для ваших задач.
          </p>
          <div onClick={showRequest} className="mt-2">
            <OrangeButton label={"Оставить заявку"} />
          </div>
        </div>
      </div>
    </div>
  );
};
