import Image from "next/image";

import colorfulAluminum from "../../../../assets/colorfulAluminum.png";
import Products from "./Products";

const productsItems = [
  {
    No: "1",
    label: "Круг 10 мм ст45 ГОСТ 2590-2006",
    size: "10 мм ",
    quantity: "0.012327",
  },
  {
    No: "2",
    label: "Круг 12 мм ст3 ГОСТ 2590-2006",
    size: "12 мм ",
    quantity: "0.0039",
  },
  {
    No: "3",
    label: "Круг 12 мм ст45 ГОСТ 2590-2006",
    size: "12 мм ",
    quantity: "0.010538",
  },
  {
    No: "4",
    label: "Круг 14 мм ст20 ГОСТ 2590-2006",
    size: "14 мм",
    quantity: "0.007",
  },
  {
    No: "5",
    label: "Круг 15 мм ст45 ГОСТ 2590-2006",
    size: "15 мм ",
    quantity: "0.013744",
  },
  {
    No: "6",
    label: "Круг 16 мм ст38ХМ",
    size: "16 мм",
    quantity: "0.00172",
  },
  {
    No: "7",
    label: "Круг 20 мм 40Х ГОСТ 2590-2006",
    size: " 20 мм",
    quantity: "0.01998",
  },
  {
    No: "8",
    label: "Круг 20 мм ст45 ГОСТ 2590-2006",
    size: "20мм",
    quantity: "0.013257",
  },
  {
    No: "9",
    label: "Круг 20 мм ст20",
    size: "20 мм",
    quantity: "0.01225",
  },
  {
    No: "10",
    label: "Круг 25 мм 40Х ГОСТ 2590-2006",
    size: "25 мм",
    quantity: "0.04226",
  },
  {
    No: "11",
    label: "Круг 25 мм ст3 ГОСТ 2590-2006",
    size: "25мм",
    quantity: "0.011",
  },
  {
    No: "12",
    label: "Круг 26 мм 40Х ГОСТ 2590-2006",
    size: "26мм",
    quantity: "0.0239",
  },
  {
    No: "13",
    label: "Круг 26 мм ст38ХМ ГОСТ 2590-2006",
    size: "26 мм",
    quantity: "0.01585",
  },
  {
    No: "14",
    label: "Круг 28 мм 40Х ГОСТ 2590-2006",
    size: "28 мм",
    quantity: "0.0238",
  },
  {
    No: "15",
    label: "Круг 30 мм ст38ХМ",
    size: "30 мм",
    quantity: "0.00774",
  },
  {
    No: "16",
    label: "Круг 30 мм ст3 ГОСТ 2590-2006",
    size: "30 мм",
    quantity: "0.021258",
  },
  {
    No: "17",
    label: "Круг 35 мм 40Х ГОСТ 2590-2006",
    size: "35 мм",
    quantity: "0.037",
  },
  {
    No: "18",
    label: "Круг 35 мм ст45 ГОСТ 2590-2006",
    size: "35мм",
    quantity: "0.042835",
  },
  {
    No: "19",
    label: "Круг 36 мм ст20 ГОСТ 2590-2006",
    size: "36 мм ",
    quantity: "0.0214",
  },
  {
    No: "20",
    label: "Круг 40 мм ст20 ГОСТ 2590-2006",
    size: "40 мм",
    quantity: "0.0545",
  },
  {
    No: "21",
    label: "Круг 40 мм ст3 ГОСТ 2590-2006",
    size: "40 мм",
    quantity: "0.055",
  },
  {
    No: "22",
    label: "Круг 40 мм ст40Х",
    size: "40 мм",
    quantity: "0.058",
  },
  {
    No: "23",
    label: "Круг 40 мм ст45 ГОСТ 2590-2006",
    size: "40 мм",
    quantity: "0.02872",
  },
  {
    No: "24",
    label: "Круг 45 мм ст45",
    size: "45 мм ",
    quantity: "0.05718",
  },
  {
    No: "25",
    label: "Круг 50 мм 40Х ГОСТ 2590-2006",
    size: "50 мм ",
    quantity: "0.097129",
  },
  {
    No: "26",
    label: "Круг 60 мм ст3",
    size: "60 мм ",
    quantity: "0.10458",
  },
  {
    No: "27",
    label: "Круг 60 мм 40Х ГОСТ 2590-2006",
    size: "60 мм ",
    quantity: "0.042788",
  },
  {
    No: "28",
    label: "Круг 80 мм ст20 ГОСТ 2590-2006",
    size: "80 мм ",
    quantity: "0.09955",
  },
  {
    No: "29",
    label: "Круг 80 мм Ст45 ГОСТ 2590-2006",
    size: "80 мм ",
    quantity: "0.192",
  },
  {
    No: "30",
    label: "Круг 100 мм Ст20 ГОСТ 2590-06",
    size: "100 мм",
    quantity: "0.11",
  },
  {
    No: "31",
    label: "Круг 100 мм Ст40Х ГОСТ 2590-06",
    size: "100 мм ",
    quantity: "0.07493",
  },
  {
    No: "32",
    label: "Круг 100 мм Ст45 ГОСТ 2590-06",
    size: "100 мм ",
    quantity: "0.205",
  },
  {
    No: "33",
    label: "Круг 150 мм ст20 ГОСТ 2590-2006",
    size: "150 мм ",
    quantity: "0.095",
  },
  {
    No: "34",
    label: "Шестигранник 10 мм ст35",
    size: "10 мм",
    quantity: "0.00052",
  },
  {
    No: "35",
    label: "Шестигранник 13 мм ст35",
    size: "13 мм",
    quantity: "0.00647",
  },
  {
    No: "36",
    label: "Шестигранник 17 мм ст35",
    size: "17 мм",
    quantity: "0.0138",
  },
  {
    No: "37",
    label: "Шестигранник 19 мм ст45",
    size: "19 мм",
    quantity: "0.00961",
  },
  {
    No: "38",
    label: "Шестигранник 24 мм ст20 ГОСТ 2879-2006",
    size: " 24 мм",
    quantity: "0.06554",
  },
  {
    No: "39",
    label: "Шестигранник 24 мм ст35 ГОСТ 2879-2006",
    size: "24 мм",
    quantity: "0.032079",
  },
  {
    No: "40",
    label: "Шестигранник 27 мм ст35 ГОСТ 2879-2006",
    size: "27 мм ",
    quantity: "0.0237",
  },
  {
    No: "41",
    label: "Шестигранник 55 мм ст35",
    size: "55 мм",
    quantity: "0.11367",
  },
];

const SortsContent = () => {
  return (
    <section className="max-w-[700px] xl:max-w-[800px] flex flex-col">
      <Image src={colorfulAluminum} alt="нержавеющие листы" />
      <h2 className="font-medium text-gray-bg text-xl lg:text-2xl my-2">
        Весь сортовой метал, который есть на скаладе
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
