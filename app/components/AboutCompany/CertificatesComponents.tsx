"use client";

import Link from "next/link";
import Image from "next/image";

import certificate from "../../assets/certificate.svg";

type certificatesLink = {
  label: string;
  href: string;
};

type Props = {
  certificatesLinks: certificatesLink[];
};

const CertificatesComponents = ({ certificatesLinks }: Props) => {
  return (
    <>
      {certificatesLinks.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className="flex flex-col justify-center items-center lg:hover:scale-110 transition"
          >
            <Image
              src={certificate}
              alt="certificate"
              width={150}
              height={150}
            />
            <h1 className="font-medium text-gray-bg">{link.label}</h1>
          </Link>
        );
      })}
    </>
  );
};

export default CertificatesComponents;
