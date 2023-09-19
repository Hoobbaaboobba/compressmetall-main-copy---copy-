"use client";

import OrderCall from "../Home/Header/OrderCall";
import useRequestModal from "@/hooks/useRequestModal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Request = () => {
  const { onClose, isOpen } = useRequestModal();

  const hideRequest = () => {
    onClose();
    document.body.style.overflowY = "auto";
  };
  return (
    <div
      className={` ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center fixed top-0 left-0 z-[100] px-6 w-full h-[100vh]`}
    >
      <div
        onClick={hideRequest}
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
        <div onClick={hideRequest}>
          <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Request;
