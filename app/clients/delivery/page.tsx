import { Suspense } from "react";
import Loading from "./loading";
import DeliveryContent from "@/app/components/Clients/Delivery/DeliveryContent";

export default function Delivery() {
  return (
    <main className="">
      <Suspense fallback={<Loading />}>
        <DeliveryContent />
      </Suspense>
    </main>
  );
}
