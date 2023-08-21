"use client";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Link from "next/link";
import { useState } from "react";

const CityButton = () => {
  const [cityHover, setCityHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setCityHover(true)}
      onMouseLeave={() => setCityHover(false)}
      className="relative"
    >
      <button className="text-orange-bg text-base flex justify-center items-center gap-2 py-4">
        <FmdGoodOutlinedIcon />
        Москва
        <KeyboardArrowDownOutlinedIcon
          fontSize="small"
          className={`${
            cityHover ? "rotate-180" : "rotate-0"
          } transition duration-200`}
        />
      </button>
      {/* <ul
        className={`${
          cityHover ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } absolute top-[50px] z-50 text-black flex flex-wrap w-[300px] justify-center items-center p-[10px] bg-white transition duration-200 rounded-lg border border-light-gray gap-2`}
      >
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
        <li onClick={() => setCityHover(false)}>
          <Link href="/">Москва</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default CityButton;
