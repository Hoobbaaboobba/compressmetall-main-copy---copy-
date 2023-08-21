import Image from "next/image";

import stailessWires from "../../../../assets/stainlessWires.png";
import Products from "./Products";

const productsItems = [
  {
    No: "1",
    label: "Проволока нержавеющая 0.8 мм 04Х19Н11М3 ГОСТ 2246-70",
    size: "0,8 мм",
    quantity: "0.0040000",
  },
  {
    No: "2",
    label: "Проволока 1,0 Св-04Х19Н11М3 ГОСТ2246-70",
    size: "1,0 мм",
    quantity: "0.003990",
  },
  {
    No: "3",
    label: "Проволока 1,2 Св-04Х19Н11М3 ГОСТ2246-70",
    size: "1,2 мм",
    quantity: "0.000400",
  },
  {
    No: "4",
    label: "Проволока нержавеющая 2.0 мм 04Х19Н11М3",
    size: "2,0 мм",
    quantity: "0.017000",
  },
  {
    No: "5",
    label: "Проволока нержавеющая 0.2 мм 12Х18Н10Т ГОСТ 18143-72",
    size: "0.2 мм",
    quantity: "0.006770",
  },
  {
    No: "6",
    label: "Проволока нержавеющая 0.5 мм 12Х18Н10Т ГОСТ 18143-72",
    size: " 0.5 мм",
    quantity: "0.0098500",
  },
  {
    No: "7",
    label: "Проволока нержавеющая 3.0 мм 12Х18Н10Т ГОСТ 18143-72",
    size: "3.0 мм",
    quantity: "0.014492",
  },
  {
    No: "8",
    label: "Проволока нержавеющая  5.0x AISI 321 (12Х18Н10Т)",
    size: "5,0 мм",
    quantity: "0.017720",
  },
  {
    No: "9",
    label: "Проволока нержавеющая  6.0x AISI 321 (12Х18Н10Т)",
    size: "6,0 мм",
    quantity: "0.017460",
  },
  {
    No: "10",
    label: "Проволока пружинная ГОСТ 9389-75 ст.80 1,0мм",
    size: "1,0 мм",
    quantity: "99 м",
  },
];

const WiresContent = () => {
  return (
    <section className="max-w-[700px] xl:max-w-[800px] flex flex-col">
      <Image src={stailessWires} alt="нержавеющие проволоки" />
      <h2 className="font-medium text-gray-bg text-2xl my-2">
        Вся нержавеющая проволока, которая есть на скаладе
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

export default WiresContent;
