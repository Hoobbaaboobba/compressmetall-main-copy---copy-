import Link from "next/link";

const PriceContent = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mt-8 mb-[50px] px-4 sm:px-8">
      <div className="max-w-[1300px] relative gap-8 flex flex-col w-full md:border border-light-gray rounded-3xl py-[50px] px-[20px] md:px-[40px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-gray-bg text-3xl">Цены</h1>
          <p className="opacity-70">
            Компания “Компресс металл” занимается поставками металлопроката в
            Москве и МО уже не одно десятилетие. Мы всегда обеспечиваем на
            складе большой запас стальной продукции: арматуры, металлопрокат
            сортовой, фасонный, профильный, листы стальные горячекатанные и
            холоднокатанные, лист ПВЛ, ромбические и чечевичным рифлением, и
            способны обеспечить доставку в любых количествах качественного
            российского проката.
          </p>
          <div className="py-2 my-[10px] lg:py-3 w-full bg-orange-bg text-white flex justify-center items-center rounded-lg font-medium">
            ПРАЙС НА МЕТАЛЛОПРОКАТ
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-[20px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-bg text-xl">Арматура</h1>
            <div className="flex flex-col">
              <Link
                href="/catalog/armatura_a1"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Арматура A1
              </Link>
              <Link
                href="/catalog/armatura_a2"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Арматура A2
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-bg text-xl">Трубный прокат</h1>
            <div className="flex flex-col">
              <Link
                href="/catalog/armatura_a1"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Лист рифленый
              </Link>
              <Link
                href="/catalog/armatura_a2"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Лист ПВЛ
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-bg text-xl">
              Нержавеющий металлопрокат
            </h1>
            <div className="flex flex-col">
              <Link
                href="/catalog/armatura_a1"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Лист нержавеющий
              </Link>
              <Link
                href="/catalog/armatura_a2"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Круг нержавеющий
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-bg text-xl">Арматура</h1>
            <div className="flex flex-col">
              <Link
                href="/catalog/armatura_a1"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Арматура A1
              </Link>
              <Link
                href="/catalog/armatura_a2"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Арматура A2
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-bg text-xl">Трубный прокат</h1>
            <div className="flex flex-col">
              <Link
                href="/catalog/armatura_a1"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Лист рифленый
              </Link>
              <Link
                href="/catalog/armatura_a2"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Лист ПВЛ
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-bg text-xl">
              Нержавеющий металлопрокат
            </h1>
            <div className="flex flex-col">
              <Link
                href="/catalog/armatura_a1"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Лист нержавеющий
              </Link>
              <Link
                href="/catalog/armatura_a2"
                className="text-orange-bg font-medium hover:text-orange-800 transition"
              >
                Круг нержавеющий
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceContent;
