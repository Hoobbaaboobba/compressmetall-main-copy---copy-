import OurServicesCard from "./OurServicesCard";

const OurServices = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div>
        <h2 className="text-xl font-bold text-gray-bg mb-8 text-center xl:text-start">
          Наши услуги
        </h2>
        <div className="flex max-w-[1000px] flex-wrap xl:flex-nowrap justify-center items-center">
          <OurServicesCard
            image={"/servicesPlasma"}
            name={"Плазменная резка"}
            description={
              "Осуществляем плазменную порезку металлопроката любой марки и сплава на высокоточном станке ЧПУ"
            }
          />
          <OurServicesCard
            image={"/servicesRubka"}
            name={"Рубка стального листа"}
            description={
              "Гильотинная рубка листового проката различной толщины на профессиональном оборудовании TRUMPF (пр-во Германия)"
            }
          />
          <OurServicesCard
            image={"/servicesRasmotka"}
            name={"Размотка арматуры"}
            description={
              "Механизированная размотка, правка в линейную форму и порезка на стержни утвержденной длины проволоки и арматуры"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
