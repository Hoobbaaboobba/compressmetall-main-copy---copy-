import Image from "next/image";

import colorfulAluminum from "../../../../assets/colorfulAluminum.png";
import Products from "./Products";

const productsItems = [
  {
    No: "1",
    label: "Профиль АД31 АП 3632*6050 под анод.",
    size: ". . .",
    quantity: "719,95 пог.м.",
  },
  {
    No: "2",
    label: "Профиль алюминиевый АЛ1775х5700",
    size: "974 кг",
    quantity: "2126,1 пог.м.",
  },
  {
    No: "3",
    label: "Профиль алюминиевый АЛ1776х6050",
    size: "317 кг",
    quantity: "477,95 пог.м",
  },
  {
    No: "4",
    label: "Профиль алюминиевый АЛ1777х6000",
    size: "316 кг",
    quantity: "120 пог.м",
  },
  {
    No: "5",
    label: "Профиль алюминиевый АЛ1778х6000",
    size: "329 кг",
    quantity: "102 пог.м",
  },
  {
    No: "6",
    label: "Профиль алюминиевый АЛ1779х6000",
    size: "505 кг",
    quantity: "132 пог.м.",
  },
];

const ListsContent = () => {
  return (
    <section className="max-w-[700px] xl:max-w-[800px] flex flex-col">
      <Image src={colorfulAluminum} alt="нержавеющие листы" />
      <h2 className="font-medium text-gray-bg text-xl lg:text-2xl my-2">
        Весь листовой металл, который есть на скаладе
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

export default ListsContent;
