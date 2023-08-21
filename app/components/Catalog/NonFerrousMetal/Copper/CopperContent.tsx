import Image from "next/image";

import colorfulCopper from "../../../../assets/colorfulCopper.png";
import Products from "./Products";

const productsItems = [
  {
    No: "1",
    label: "Проволока медная 1.0 ММ",
    size: "1,0 мм",
    quantity: "0.00971",
  },
  {
    No: "2",
    label: "Круг медный 40 мм М1 тв",
    size: "40 мм",
    quantity: "0.0095",
  },
];

const CopperContext = () => {
  return (
    <section className="max-w-[700px] xl:max-w-[800px] flex flex-col">
      <Image src={colorfulCopper} alt="нержавеющие листы" />
      <h2 className="font-medium text-gray-bg text-xl lg:text-2xl my-2">
        Весь медный металл, который есть на скаладе
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

export default CopperContext;
