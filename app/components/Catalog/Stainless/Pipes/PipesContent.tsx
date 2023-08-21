import Image from "next/image";

import stailessPipes from "../../../../assets/stainlessPipes.png";
import Products from "./Products";

const productsItems = [
  {
    No: "1",
    label:
      "Труба нержавеющая бесшовная 10х2 12Х18Н10Т ГОСТ 9941-81, ГОСТ 9940-81",
    size: "10х2",
    quantity: "0.0303",
  },
  {
    No: "2",
    label:
      "Труба нержавеющая бесшовная 14х2 12Х18Н10Т ГОСТ 9941-81, ГОСТ 9940-81",
    size: "14х2",
    quantity: "0.0035",
  },
  {
    No: "3",
    label: "Труба нержавеющая Бесшовная 18х2мм 12Х18Н10Т",
    size: "18х2",
    quantity: "0.0190",
  },
  {
    No: "4",
    label: "Труба нержавеющая Бесшовная 18х3мм 12Х18Н10Т",
    size: "18х3",
    quantity: "0.0063",
  },
  {
    No: "5",
    label:
      "Труба нержавеющая бесшовная 159х5 12Х18Н10Т ГОСТ 9941-81, ГОСТ 9940-81",
    size: "159х5",
    quantity: "0.0570",
  },
  {
    No: "6",
    label: "Труба нержавеющая Бесшовная 30х1.5мм 12Х18Н10Т",
    size: "30х1,5",
    quantity: "0.0200",
  },
  {
    No: "7",
    label:
      "Труба нержавеющая бесшовная 32х3 12Х18Н10Т ГОСТ 9941-81, ГОСТ 9940-81",
    size: "32х3",
    quantity: "0.0833",
  },
  {
    No: "8",
    label:
      "Труба нержавеющая бесшовная 38х3 12Х18Н10Т ГОСТ 9941-81, ГОСТ 9940-81",
    size: "38х3",
    quantity: "0.0149",
  },
  {
    No: "9",
    label:
      "Труба нержавеющая бесшовная 50х2 12Х18Н10Т ГОСТ 9941-81, ГОСТ 9940-81",
    size: " 50х2",
    quantity: "0.001145",
  },
  {
    No: "10",
    label:
      "Труба нержавеющая бесшовная 50х3 12Х18Н10Т ГОСТ 9941-81, ГОСТ 9940-81",
    size: "50х3",
    quantity: "0.022000",
  },
];

const SortsContent = () => {
  return (
    <section className="max-w-[700px] xl:max-w-[800px] flex flex-col">
      <Image src={stailessPipes} alt="нержавеющий сортовой метал" />
      <h2 className="font-medium text-gray-bg text-2xl my-2">
        Все нержавеющие трубы, который есть на скаладе
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

export default SortsContent;
