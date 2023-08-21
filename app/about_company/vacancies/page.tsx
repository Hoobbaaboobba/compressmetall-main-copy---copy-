import VacanciesContent from "@/app/components/AboutCompany/Vacancies/VacanciesContent";
import { Suspense } from "react";
import Loading from "../loading";

const Vacancies = () => {
  return (
    <main className="max-w-[900px] w-full flex justify-center items-center flex-col gap-6">
      <Suspense fallback={<Loading />}>
        <VacanciesContent />
      </Suspense>
    </main>
  );
};

export default Vacancies;
