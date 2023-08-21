import Image from "next/image";

type DeliveryCar = {
  image: string;
  long: string;
  grus: string;
  price: string;
};

type Props = {
  deliveryCars: DeliveryCar[];
};

const DeliveryCars = ({ deliveryCars }: Props) => {
  return (
    <>
      {deliveryCars.map((item) => {
        return (
          <div
            key={item.image}
            className="border max-w-[400px] w-full  border-light-gray rounded-xl p-4"
          >
            <Image
              src={item.image}
              alt="машины доставки"
              width={360}
              height={280}
            />
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Длина:</span> {item.long}
              </p>
              <p>
                <span className="font-bold">Грузоподъемность:</span> {item.grus}
              </p>
              <p>
                <span className="font-bold">Цена:</span> {item.price}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DeliveryCars;
