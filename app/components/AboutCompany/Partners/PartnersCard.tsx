"use client";

import Link from "next/link";
import Image from "next/image";

interface PartnersProps {
  src: string;
  label: string;
  href: string;
}

const PartnersCard: React.FC<PartnersProps> = ({ src, label, href }) => {
  return (
    <Link
      href={href}
      className="w-[220px] h-[220px] border border-light-gray rounded-xl flex justify-center items-center hover:shadow-md transition"
    >
      <Image
        src={require(`../../../assets/${src}.png`)}
        alt={label}
        width={220}
        height={91}
      />
    </Link>
  );
};

export default PartnersCard;
