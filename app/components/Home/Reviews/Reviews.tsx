"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/image";
import quotes from "../../../assets/quotes.png";
import reviewImg from "../../../assets/reviewImg.png";

import OrderCall from "../Header/OrderCall";
import { useState } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const reviews = [
  {
    name: "Иван Петров",
    job: "директор малого строительного предприятия",
    review:
      "Долго искал надежного поставщика прокатного металла, и наконец, обратился в компанию «Компресс Металл». Был приятно удивлен отзывчивостью и вниманием к моим потребностям. Поставка была выполнена оперативно, а качество металла полностью соответствовало заявленным характеристикам. Буду обязательно сотрудничать и рекомендовать их услуги",
    img: "И",
  },
  {
    name: "Александра Козлова",
    job: "Инженер-конструктор крупного производства",
    review:
      "Очень довольна работой компании «Компресс Металл». Сделали крупный заказ на прокат металла для строительного проекта. Весь процесс прошел гладко: от обсуждения деталей до оперативной доставки. Качество материала выше всяких похвал. С уверенностью рекомендую всем, кто ищет надежного поставщика",
    img: "И",
  },
  {
    name: "Сергей Землянский",
    job: "Менеджер компании",
    review:
      "Сотрудничество с «Компресс Металл» было безупречным. Внимательный менеджер помог выбрать подходящий прокат металла для моего производства, учитывая специфические требования. Поставка была осуществлена точно в срок, а качество металла оказалось на высоком уровне. Впечатлен их профессионализмом!",
    img: "И",
  },
  {
    name: "Наталия Смирнова",
    job: "Предприниматель, владеющая небольшим стальным производством.",
    review:
      "Заказывала у «Компресс Металл» прокатной ленты для нашего производства. Осталась довольна как качеством материала, так и обслуживанием. Менеджеры всегда на связи и оперативно решают все вопросы. Это действительно надежная компания, на которую можно положиться.",
    img: "И",
  },
  {
    name: "Денис Васильев",
    job: "Менеджер снабжения крупного строительного холдинга",
    review:
      "Работаем с компанией «Компресс Металл» уже несколько лет, и все это время они оправдали наши ожидания. Качество прокатного металла всегда на высоте, а цены - вполне конкурентоспособные. Мы рекомендуем их услуги своим партнерам",
    img: "И",
  },
  {
    name: "Елена Ковалева",
    job: "Представительница авиационной отрасли",
    review:
      "Поразила оперативность «Компресс Металл» в оформлении заказа и быстрой доставке. Наша компания впервые работала с ними, и остались полностью довольны. Будем сотрудничать и далее, так как это надежный поставщик, которому можно доверять )",
    img: "И",
  },
  {
    name: "Михаил Сидоров",
    job: "Руководитель проектной группы",
    review:
      "Компресс Металл» - это настоящий профессионал в своем деле. Заказывали у них прокат металла для нашего проекта, и они подобрали оптимальные решения и предложили выгодные условия. Результат превзошел ожидания. Отличная компания!",
    img: "И",
  },
  {
    name: "Сергей Попов",
    job: "Владелец среднего металлообрабатывающего предприятия",
    review:
      "Сотрудничество с «Компресс Металл» - это находка для нашей компании. Они не только предоставили качественный прокат металла, но и проявили высокий уровень профессионализма в общении с клиентами. Будем рекомендовать их услуги всем нашим партнерам",
    img: "И",
  },
];

const Reviews = () => {
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
      slides: {
        perView: 1.25,
        spacing: 20,
      },
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
          }, 5000);
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
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <h1 className="text-xl font-bold text-gray-bg text-center xl:text-start">
        Отзывы наших лиентов
      </h1>
      <div ref={sliderRef} className="keen-slider mx-4">
        {reviews.map((review, index) => (
          <div className="keen-slider__slide" key={index}>
            <div
              className={`p-[20px] md:p-[40px] flex flex-col gap-4 border border-light-gray rounded-xl number-slide${index}`}
            >
              <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-start md:items-start gap-2 md:gap-8">
                <Image
                  src={reviewImg}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="text-center md:text-start">
                  <h1 className="font-bold">{review.name}</h1>
                  <p className="text-sm opacity-60">{review.job}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-3">
                <Image src={quotes} alt={"кавычки"} width={20} height={16} />
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center text-white">
        <button
          onClick={orderCall}
          className="py-2 px-4 boxshadow bg-orange-bg mt-4 underline"
        >
          Запросить прайс
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
            topic={`Запросить прайс`}
            description={"Оставьте ваши контакты и мы отправим Вам прайс"}
            placeHolder1={"Ваш номер телефона"}
            placeHolder2={"Ваше имя / Ваша компания"}
            firstType={"telephone"}
            secondType={"name"}
          />
          <div onClick={hideCall}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
