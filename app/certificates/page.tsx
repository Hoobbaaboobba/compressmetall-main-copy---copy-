import { Suspense } from "react";
import Loading from "./loading";
import { certificates } from "./certificatesData";
import Image from "next/image";
import certificateImage from "../assets/certificate.svg";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <main className="w-full mt-8">
      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap w-full justify-center gap-4">
          {certificates.map((certificate, index) => (
            <Link href={`./${certificate}`} target="_blank">
              <div
                key={index}
                className="cursor-pointer flex flex-col justify-center items-center hover:scale-105 transition duration-100"
              >
                <Image
                  src={certificateImage}
                  alt={certificate}
                  width={130}
                  height={130}
                />
                <h1 className="text-lg text-gray-bg font-bold">
                  {certificate}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>
    </main>
  );
}
