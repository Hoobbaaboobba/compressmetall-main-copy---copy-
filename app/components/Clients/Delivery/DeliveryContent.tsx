import vas from "../../../assets/VasCar.png";
import gas from "../../../assets/GasCar.png";
import DeliveryCars from "./DeliveryCars";

const deliveryCars = [
  {
    image: vas.src,
    long: "3 м",
    grus: "1,5 т",
    price: "2 000 руб. (в черте города)",
  },
  {
    image: gas.src,
    long: "3 м",
    grus: "1,5 т",
    price: "2 000 руб. (в черте города)",
  },
  {
    image: vas.src,
    long: "3 м",
    grus: "1,5 т",
    price: "2 000 руб. (в черте города)",
  },
  {
    image: gas.src,
    long: "3 м",
    grus: "1,5 т",
    price: "2 000 руб. (в черте города)",
  },
];

const DeliveryContent = () => {
  return (
    <section className="max-w-[900px] w-full justify-center items-center">
      <p className="text-gray-bg text-medium">
        В зависимости от объема купленного вами проката вы должны будете
        оплатить аренду автотранспорта: Газели, Бычка, ЗИЛа, МАЗа или Камаза.
        Оплата транспорта довольно умеренная. Заранее оформленная доставка
        арматуры позволит вам максимально сэкономить время и не отрываться от
        своих текущих дел на то, чтобы привезти купленный металлопрокат к себе
        на склад.
      </p>
      <h3 className="text-xl text-gray-bg mt-2">
        Мы производим доставку на грузовиках{" "}
        <span className="font-bold">следующих марок</span>:
      </h3>
      <div className="flex flex-wrap justify-center items-center mt-[40px] gap-[20px]">
        <DeliveryCars deliveryCars={deliveryCars} />
      </div>
    </section>
  );
};

export default DeliveryContent;
