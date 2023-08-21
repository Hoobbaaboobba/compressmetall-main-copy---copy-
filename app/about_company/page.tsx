import { Suspense } from "react";
import AboutCompanyContent from "../components/AboutCompany/AboutCompanyContent";
import Loading from "./loading";

export default function AboutCompany() {
  return (
    <main className="px-4 w-full flex justify-center items-center">
      <Suspense fallback={<Loading />}>
        <AboutCompanyContent />
      </Suspense>
    </main>
  );
}
