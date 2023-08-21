"use client";

import { useState } from "react";

import Image from "next/image";
import OrangeButton from "../../OrangeButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Link from "next/link";

interface CatalogPopupProps {
  topic: string;
  name: string;
  src: string;
}

const CatalogPopup: React.FC<CatalogPopupProps> = ({ topic, name, src }) => {
  const [popUp, setPopUp] = useState(false);

  const onPopUp = () => {
    setPopUp(true);
  };

  const onPopUpClose = () => {
    setPopUp(false);
  };

  return (
    <>
      <li
        onClick={onPopUp}
        className="cursor-pointer opacity-60 hover:opacity-100 transition duration-200 first-letter:font-bold"
      >
        <Link href={`/catalog/${name}`}>{name}</Link>
      </li>
      {/* <div
        className={`${
          popUp ? "flex" : "hidden"
        } w-full h-full items-start justify-center xl:items-center fixed left-0 top-0 z-30`}
      >
        <div
          onClick={onPopUpClose}
          className="w-full h-full bg-black/70 fixed top-0 left-0"
        ></div>
        <div className="w-[480px] gap-x-[40px] bg-white p-[40px] xl:static flex justify-between items-center z-30 xl:translate-y-[-100px]">
          <Image src={src} alt={name} width={200} height={160} />
          <div className="w-[240px] flex flex-col justify-center items-center text-center">
            <h1 className="font-semibold text-xl">{topic}</h1>
            <h2 className="opacity-60 leading-5 mb-3">{name}</h2>
            <OrangeButton label={"Приобрести"} href={""} />
          </div>
          <div onClick={() => setPopUp(false)}>
            <CloseOutlinedIcon className="absolute top-2 right-2 text-gray-bg cursor-pointer" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CatalogPopup;
