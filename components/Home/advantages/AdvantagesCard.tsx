import Image from "next/image";

interface AdvantagesCardProps {
  image: string;
  topic: string;
  description: string;
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  image,
  topic,
  description,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 max-w-[300px]">
      <div className="w-[60px] h-[60px]">
        <Image src={`/${image}.png`} alt={topic} width={60} height={60} />
      </div>
      <div className="w-[240px]">
        <h3 className="text-base font-medium">{topic}</h3>
        <p className="opacity-80 leading-5 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AdvantagesCard;
