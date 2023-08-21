import Link from "next/link";
import Image from "next/image";

import Severstal from "../../../assets/SEVER.png";
import Amet from "../../../assets/AMET.png";
import Evras from "../../../assets/EVRAS.png";
import Mechel from "../../../assets/MECHEL.png";
import MMK from "../../../assets/MMK.png";

const PartnersContent = () => {
  return (
    <section className="max-w-[1000px] w-full flex flex-col gap-6">
      <h1 className="font-bold text-gray-bg text-xl">Наши основные партнеры</h1>
      <div className="flex flex-wrap gap-5 justify-center items-center lg:justify-start lg:items-start">
        <Link
          href="https://www.severstal.com/rus"
          className="w-[220px] h-[220px] border border-light-gray rounded-xl flex justify-center items-center hover:shadow-md transition"
        >
          <Image src={Severstal} alt="северсталь" width={220} height={91} />
        </Link>
        <Link
          href="https://www.amet.ru"
          className="w-[220px] h-[220px] border border-light-gray rounded-xl flex justify-center items-center hover:shadow-md transition"
        >
          <Image src={Amet} alt="северсталь" width={220} height={91} />
        </Link>
        <Link
          href="http://www.evraz.com/ru/"
          className="w-[220px] h-[220px] border border-light-gray rounded-xl flex justify-center items-center hover:shadow-md transition"
        >
          <Image src={Evras} alt="северсталь" width={220} height={91} />
        </Link>
        <Link
          href="http://www.mechel.ru/"
          className="w-[220px] h-[220px] border border-light-gray rounded-xl flex justify-center items-center hover:shadow-md transition"
        >
          <Image src={Mechel} alt="северсталь" width={220} height={91} />
        </Link>
        <Link
          href="http://mmk.ru/"
          className="w-[220px] h-[220px] border border-light-gray rounded-xl flex justify-center items-center hover:shadow-md transition"
        >
          <Image src={MMK} alt="северсталь" width={220} height={91} />
        </Link>
      </div>
    </section>
  );
};

export default PartnersContent;
