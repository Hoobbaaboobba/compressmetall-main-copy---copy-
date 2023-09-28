import useLocationModal from "@/hooks/useLocationModal";
import Image from "next/image";
import Link from "next/link";

interface OurMetalCardProps {
  src: string;
  name: string;
  description: string;
  isInStock: string;
  amount: string;
}

const OurMetalCard: React.FC<OurMetalCardProps> = ({
  src,
  name,
  description,
  isInStock,
  amount,
}) => {
  const { link } = useLocationModal();

  return (
    <div className="border border-light-gray h-full max-h-[280px] rounded-xl flex flex-col justify-between items-center text-center gap-2 p-[20px] transitionr">
      <div className="relative">
        <div className="bg-orange-bg text-center text-white text-sm absolute -top-2 -left-2 px-1 rounded">
          хит
        </div>
        <Image src={`/${src}.png`} alt={name} width={160} height={160} />
      </div>
      <div>
        <p className="opacity-60 text-sm">{name}</p>
        <h2 className="text-sm ">{description}</h2>
      </div>
      <Link
        href={`/${link || "moscow"}/catalog/${encodeURI(name)}/${encodeURI(
          description
        )}?i=${encodeURI(src)}&q=${encodeURI(isInStock)}&amount=${encodeURI(
          amount
        )}`}
      >
        <button className="py-2 px-6 boxshadow bg-orange-bg mt-4 underline text-white">
          Подробнее
        </button>
      </Link>
    </div>
  );
};

export default OurMetalCard;
