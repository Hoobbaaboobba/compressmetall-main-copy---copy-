"use client";

import Image from "next/image";
import Link from "next/link";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CityButton from "./CityButton";
import Search from "./Search";
import { Suspense } from "react";
import useLocationModal from "@/hooks/useLocationModal";
import useCallModal from "@/hooks/useCallModal";
import Logo from "./Logo";

const Loading = () => {
  return <Image src="/loading.gif" alt="loading" width={100} height={100} />;
};

const UpperHeader = () => {
  const { onOpen } = useCallModal();

  const hideRequest = () => {
    onOpen();
    document.body.style.overflowY = "hidden";
  };

  return (
    <div className="hidden xl:flex justify-center bg-white items-center w-full text-white py-3">
      <div className="flex justify-between items-center max-w-[1300px] w-full">
        <Logo />
        <CityButton />
        <h3 className="text-base font-normal text-black opacity-80">
          Продажа металлопроката по всей <br /> территории России и СНГ
        </h3>
        <Suspense fallback={<Loading />}>
          <Search />
        </Suspense>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <EmailOutlinedIcon className="text-orange-bg mt-[3px]" />
            <h3 className="font-bold text-xl text-black opacity-80">
              info@kometal.ru
            </h3>
          </div>
          <button
            onClick={hideRequest}
            className="text-lg w-full text-orange-bg underline font-bold"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
