import Image from "next/image";
import Link from "next/link";

interface OurServicesCard {
  image: string;
  name: string;
  description: string;
}

const OurServicesCard: React.FC<OurServicesCard> = ({
  image,
  name,
  description,
}) => {
  return (
    <div className="w-[333px] flex flex-col gap-6 justify-center items-center py-4 px-2">
      <div className="flex gap-4 justify-center items-center">
        <Image src={`${image}`} alt={`${name}`} width={80} height={80} />
        <div className="">
          <h1 className="text-lg font-bold text-orange-bg">{name}</h1>
          <p className="opacity-80 text-sm">{description}</p>
        </div>
      </div>
      <Link href="/services">
        <button className="py-2 px-6 boxshadow text-white bg-orange-bg mt-4 underline">
          Подробнее
        </button>
      </Link>
    </div>
  );
};

export default OurServicesCard;
