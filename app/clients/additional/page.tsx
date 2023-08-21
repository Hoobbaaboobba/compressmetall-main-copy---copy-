import GostContent from "@/app/components/Clients/Gost/GostContent";
import { Suspense } from "react";
import Loading from "./loading";

export default function Gost() {
  return (
    <main className="">
      <Suspense fallback={<Loading />}>
        <GostContent />
      </Suspense>
    </main>
  );
}
