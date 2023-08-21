import Image from "next/image";

import MMK from "../../../assets/MMK.png";
import MECHEL from "../../../assets/MECHEL.png";
import EVRAS from "../../../assets/EVRAS.png";
import AMET from "../../../assets/AMET.png";
import SEVER from "../../../assets/SEVER.png";

const OurPartners = () => {
  return (
    <section className="flex flex-col justify-center items-center px-8 mt-8">
      <div className="max-w-[1300px] w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-bg text-center lg:text-start">
          Наши партнёры
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-4 my-4 lg:justify-between items-center">
          <div className="grayscale hover:grayscale-0 transition">
            <Image src={MMK.src} alt="MMK" width={186} height={91} />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <Image src={MECHEL.src} alt="MECHEL" width={186} height={91} />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <Image src={EVRAS.src} alt="EVRAS" width={186} height={91} />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <Image src={AMET.src} alt="AMET" width={186} height={91} />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <Image src={SEVER.src} alt="SEVER" width={186} height={91} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
