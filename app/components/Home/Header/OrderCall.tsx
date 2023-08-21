"use client";

interface OrderCallProps {
  topic: string;
  description: string;
  placeHolder1: string;
  placeHolder2: string;
  firstType: string;
  secondType: string;
}

import { useForm } from "react-hook-form";

const OrderCall: React.FC<OrderCallProps> = ({
  topic,
  description,
  placeHolder1,
  placeHolder2,
  firstType,
  secondType,
}) => {
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

  return (
    <div className="flex flex-col bg-white text-gray-bg py-8 px-12 text-center z-50">
      <h1 className="text-3xl font-bold">{topic}</h1>
      <p className="font-bold text-base opacity-70 mb-2">{description}</p>
      <form
        method="POST"
        action="https://formsubmit.co/xopoxopox@gmail.com"
        onSubmit={onSubmit}
        target="_blank"
        className="flex flex-col text-black gap-4 mt-2"
      >
        <div className="text-start">
          <input
            type="text"
            {...register("email", { required: true, maxLength: 100 })}
            className="border w-full rounded-md py-1 px-2"
            placeholder={placeHolder1}
          />
          {errors.email && (
            <p className="text-red-400 text-sm ml-1">
              {errors.email.type === "required" &&
                "Это поле обязательно для заполнения"}
              {errors.email.type === "maxLength" &&
                "Максимальная длина 100 символов"}
            </p>
          )}
        </div>
        <div className="text-start">
          <input
            type="text"
            {...register("message", {
              required: true,
              maxLength: 100,
            })}
            className="border w-full rounded-md py-1 px-2"
            placeholder={placeHolder2}
          />
          {errors.message && (
            <p className="text-red-400 text-sm ml-1">
              {errors.message.type === "required" &&
                "Это поле обязательно для заполнения"}
              {errors.message.type === "maxLength" &&
                "Максимальная длина 100 символов"}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-bg p-2 text-white rounded-md hover:opacity-70 transition duration-200"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default OrderCall;
