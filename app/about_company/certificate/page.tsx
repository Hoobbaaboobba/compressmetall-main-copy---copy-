import CertificatesContent from "@/app/components/AboutCompany/CertificatesContent";
import { Suspense } from "react";
import Loading from "./loading";

export default function Certificates() {
  return (
    <main className="w-full flex justify-center items-center">
      <Suspense fallback={<Loading />}>
        <CertificatesContent />
      </Suspense>
    </main>
  );
}
