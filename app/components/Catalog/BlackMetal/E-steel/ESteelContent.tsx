import Image from "next/image";

import ESteel from "../../../../assets/e-steel.png";
import Products from "./Products";

const productsItems = [
  {
    No: "1",
    label: "КЛист СШ-0,35х960х1500-ТШ-Т130-35S ГОСТ 32482-2013",
    size: "10,35х960х1500",
    quantity: "0.376000",
  },
];

const ESteelContent = () => {
  return (
    <section className="max-w-[700px] xl:max-w-[800px] flex flex-col">
      <Image src={ESteel} alt="электротехническая сталь" />
      <h2 className="font-medium text-gray-bg text-xl lg:text-2xl my-2">
        Вся электротехническая сталь, которая есть на скаладе
      </h2>
      <hr className="w-full border-2 border-orange-bg rounded-lg mt-2 mb-4" />
      <div className="rounded-t-lg w-full flex justify-between bg-orange-bg text-white sticky top-[90px] xl:top-[160px]">
        <div className="text-sm md:text-md w-[30px] flex justify-center items-center text-center py-2">
          <p>№ п/п</p>
        </div>
        <div className="text-sm md:text-md w-[200px] md:w-[300px] text-center flex justify-center items-center py-2 px-1">
          <p>Наименование</p>
        </div>
        <div className="text-sm md:text-md py-2 px-1 w-[70px] md:w-[100px] xl:w-[235px] text-center flex justify-center items-center">
          <p>Размер</p>
        </div>
        <div className="text-sm md:text-md py-2 px-1 w-[70px] md:w-[100px] xl:w-[235px] text-center flex justify-center items-center">
          <p>Кол-во в 1С, т</p>
        </div>
      </div>
      <div className="w-full">
        <Products productsItems={productsItems} />
      </div>
    </section>
  );
};

export default ESteelContent;
