import Image from "next/image";

import stailessBarMetal from "../../../../assets/stainlessBarMetal.png";
import Products from "./Products";

const productsItems = [
  {
    No: "1",
    label: "Круг нержавеющий 10 мм 12Х18Н10Т",
    size: "10 мм",
    quantity: "0.001920",
  },
  {
    No: "2",
    label: "Круг нержавеющий г/к 16 мм 14Х17Н2",
    size: "16 мм",
    quantity: "0.001950",
  },
  {
    No: "3",
    label: "Круг нержавеющий 30 мм 14Х17Н2 ГОСТ 5949-2018",
    size: " 30 мм",
    quantity: "0.004960",
  },
  {
    No: "4",
    label: "Круг нержавеющий 45 мм 12Х18Н10Т ГОСТ 5949-2018",
    size: "45 мм",
    quantity: "0.011370",
  },
  {
    No: "5",
    label: "Круг нержавеющий 52 мм 12Х18Н10Т ГОСТ 5949-2018",
    size: "52 мм",
    quantity: "0.014000",
  },
  {
    No: "6",
    label: "Круг нержавеющий 85 мм 12Х18Н10Т",
    size: "85 мм",
    quantity: "0.029000",
  },
  {
    No: "7",
    label: "Круг нержавеющий 100 мм 12Х18Н10Т",
    size: "100 мм",
    quantity: "0.037000",
  },
  {
    No: "8",
    label: "Шестигранник нержавеющий 27 мм 12Х18Н10Т ГОСТ 8560-78",
    size: "27 мм",
    quantity: "0.049000",
  },
  {
    No: "9",
    label: "Шестигранник нержавеющий 46 мм 12Х18Н10Т ГОСТ 8560-78",
    size: "46 мм",
    quantity: "0.043360",
  },
];

const SortsContent = () => {
  return (
    <section className="max-w-[700px] xl:max-w-[800px] flex flex-col">
      <Image src={stailessBarMetal} alt="нержавеющий сортовой метал" />
      <h2 className="font-medium text-gray-bg text-2xl my-2">
        Весь нержавеющий сортовой металл, который есть на скаладе
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
