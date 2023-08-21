"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NewsInput from "../../NewsInput";

const GostContent = () => {
  return (
    <section className="max-w-[900px] max-h-[500px] flex flex-col w-full h-full justify-center items-start">
      <div className="flex items-center gap-2 w-full">
        <AccessTimeIcon className="text-orange-bg" fontSize="large" />
        <h1 className="text-2xl lg:text-3xl text-bold text-gray-bg">
          Скоро появится
        </h1>
      </div>
      <p className="text-md lg:text-xl opacity-70">
        Подпишитесь на рассылку, чтобы первыми узнавать об обновленях
      </p>
      <NewsInput />
    </section>
  );
};

export default GostContent;
