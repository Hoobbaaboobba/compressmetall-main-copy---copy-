import Slider from "./Slider";

const OurMetal = () => {
  return (
    <section className="flex flex-col justify-start items-center w-full">
      <div className="max-w-[1000px] w-full flex flex-col">
        <h2 className="text-xl font-bold text-gray-bg mb-8 text-center xl:text-start">
          Хиты продаж
        </h2>
        <div className="hidden lg:block">
          <Slider amountSlides={4} />
        </div>
        <div className="lg:hidden w-full sm:flex hidden justify-center items-center">
          <Slider amountSlides={2.5} />
        </div>
        <div className="flex sm:hidden justify-center items-center">
          <Slider amountSlides={1.75} />{" "}
        </div>
      </div>
    </section>
  );
};

export default OurMetal;
