"use client";

import { certificates } from "@/app/certificates/certificatesData";
import Image from "next/image";
import Link from "next/link";

const CertifiictesContent = () => {
  return (
    <>
      {certificates.map((certificate, index) => (
        <Link href={`/${certificate}`} target="_blank">
          <div
            key={index}
            className="cursor-pointer w-full h-full flex flex-col items-center hover:scale-105 transition duration-200"
          >
            <Image
              src={require("../../../assets/certificate.svg")}
              alt={certificate}
              width={130}
              height={130}
            />
            <h1 className="text-md text-gray-bg font-bold text-center">
              {certificate}
            </h1>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CertifiictesContent;
