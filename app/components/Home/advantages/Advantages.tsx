import AdvantagesCard from "./AdvantagesCard";

import advantagesHome from "../../../assets/advantageHome.png";
import advantagesMetal from "../../../assets/advantageMetal.png";
import advantagesStock from "../../../assets/advatageStock.png";
import advantagesClock from "../../../assets/advantageClock.png";
import advantagesCar from "../../../assets/advantageCar.png";
import advantagesMedal from "../../../assets/advantageMedal.png";

const Advantages = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-wrap gap-8 justify-center items-center pt-12 px-2">
        <AdvantagesCard
          image={advantagesHome.src}
          topic={"Конкурентные цены"}
          description={
            "Компания предлагает конкурентоспособные цены на металлопрокат."
          }
        />
        <AdvantagesCard
          image={advantagesMetal.src}
          topic={"Надежное партнерство"}
          description={
            "Длительные и успешные отношения c клиентами и партнерами."
          }
        />
        <AdvantagesCard
          image={advantagesStock.src}
          topic={"Индивидуальный подход"}
          description={
            "Компания готова предложить индивидуальные решения для каждого клиента."
          }
        />
        <AdvantagesCard
          image={advantagesClock.src}
          topic={"Быстрая доставка"}
          description={
            "Компания обеспечивает оперативную доставку заказанных товаров. "
          }
        />
        <AdvantagesCard
          image={advantagesCar.src}
          topic={"Широкий выбор продукции "}
          description={
            "Компания предлагает разнообразные виды и размеры металлических изделий и конструкций."
          }
        />
        <AdvantagesCard
          image={advantagesMedal.src}
          topic={"Контроль качества"}
          description={
            "Компания предлагает только качественную металлическую продукцию, которая соответствует всем стандартам и требованиям."
          }
        />
      </div>
    </section>
  );
};

export default Advantages;
