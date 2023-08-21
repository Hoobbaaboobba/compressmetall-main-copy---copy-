"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface OrangeButtonProps {
  label: string;
  type: string;
  bgTransparent: boolean;
  checkMark: boolean;
  isForm: boolean;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({
  label,
  type,
  bgTransparent,
  checkMark,
  isForm,
}) => {
  const [form, setForm] = useState(false);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const showForm = () => {
    if (isForm) {
      setForm(true);
    }
  };

  const hideForm = () => {
    if (isForm) {
      setForm(false);
    }
  };

  return (
    <>
      <button
        onClick={showForm}
        className={`py-2 px-8 ${
          bgTransparent
            ? "text-orange-bg hover:opacity-80 transition duration-200"
            : "bg-orange-bg boxshadow text-white"
        }   underline`}
      >
        {label}
        {type === "call" && label === "" ? "Заказать звонок" : ""}
        {type === "request" && label === "" ? "Оставить заявку" : ""}
        {type === "price" && label === "" ? "Запросить прайс" : ""}
        {checkMark ? (
          <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
        ) : (
          ""
        )}
      </button>
      <div
        className={`${
          form && isForm ? "flex" : "hidden"
        } justify-center items-center fixed top-0 left-0 px-6 w-full h-[100vh] z-[100]`}
      >
        <div
          onClick={hideForm}
          className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
        ></div>
        <div className="relative z-50">
          <div className="flex flex-col bg-white text-gray-bg py-8 px-12 text-center z-50">
            <h1 className="text-3xl font-bold">
              {type === "call" ? "Заказать звонок" : ""}
              {type === "request" ? "Оставить заявку" : ""}
              {type === "price" ? "Запросить прайс" : ""}
            </h1>
            <p className="font-bold text-base opacity-70 mb-2">
              {" "}
              {type === "call"
                ? "Оставьте ваши контакты и мы перезвоним Вам"
                : ""}
              {type === "request"
                ? "Оставьте ваши контакты и мы ответим Вам"
                : ""}
              {type === "price"
                ? "Оставьте ваши контакты и мы отправим Вам прайс"
                : ""}
            </p>
            <form
              method="POST"
              action="https://formsubmit.co/xopoxopox@gmail.com"
              onSubmit={onSubmit}
              target="_blank"
              className="flex flex-col text-black gap-4 mt-2"
            >
              {type === "call" ? (
                <>
                  <div className="text-start">
                    <input
                      type="text"
                      {...register("name", { required: true, maxLength: 20 })}
                      className="border w-full rounded-md py-1 px-2"
                      placeholder="Ваше имя / Ваша компания"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm ml-1">
                        {errors.name.type === "required" &&
                          "Необхожимо ввести имя / компания"}
                        {errors.name.type === "maxLength" &&
                          "Максимальная длина 20 символов"}
                      </p>
                    )}
                  </div>
                  <div className="text-start">
                    <input
                      type="text"
                      {...register("number", {
                        required: true,
                        maxLength: 11,
                      })}
                      className="border w-full rounded-md py-1 px-2"
                      placeholder="Ваш номер телефона"
                    />
                    {errors.number && (
                      <p className="text-red-400 text-sm ml-1">
                        {errors.number.type === "required" &&
                          "Необхожимо ввести номер телефона"}
                        {errors.number.type === "maxLength" &&
                          "Максимальная длина 11 цифр"}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                ""
              )}
              {type === "request" ? (
                <>
                  <div className="text-start">
                    <input
                      type="text"
                      {...register("name", { required: true, maxLength: 100 })}
                      className="border w-full rounded-md py-1 px-2"
                      placeholder="Почта"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm ml-1">
                        {errors.name.type === "required" &&
                          "Необхожимо ввести электронную почту"}
                        {errors.name.type === "maxLength" &&
                          "Максимальная длина 100 символов"}
                      </p>
                    )}
                  </div>
                  <div className="text-start">
                    <input
                      type="text"
                      {...register("message", {
                        required: true,
                        maxLength: 200,
                      })}
                      className="border w-full rounded-md py-1 px-2"
                      placeholder="Ваше сообщение / товар / уточнение"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm ml-1">
                        {errors.message.type === "required" &&
                          "Необхожимо ввести сообщение / товар / уточнение"}
                        {errors.message.type === "maxLength" &&
                          "Максимальная длина 200 символов"}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                ""
              )}

              {type === "price" ? (
                <>
                  <div className="text-start">
                    <input
                      type="text"
                      {...register("name", { required: true, maxLength: 100 })}
                      className="border w-full rounded-md py-1 px-2"
                      placeholder="Ваше имя / Ваша компания"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm ml-1">
                        {errors.name.type === "required" &&
                          "Необхожимо ввести имя / компания"}
                        {errors.name.type === "maxLength" &&
                          "Максимальная длина 100 символов"}
                      </p>
                    )}
                  </div>
                  <div className="text-start">
                    <input
                      type="text"
                      {...register("message", {
                        required: true,
                        maxLength: 200,
                      })}
                      className="border w-full rounded-md py-1 px-2"
                      placeholder="Ваше сообщение / товар / уточнение"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm ml-1">
                        {errors.message.type === "required" &&
                          "Необхожимо ввести сообщение / товар / уточнение"}
                        {errors.message.type === "maxLength" &&
                          "Максимальная длина 200 символов"}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                ""
              )}

              <button
                type="submit"
                className="bg-orange-bg p-2 text-white rounded-md hover:opacity-70 transition duration-200"
              >
                Отправить
              </button>
            </form>
          </div>
          <div onClick={hideForm}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrangeButton;
