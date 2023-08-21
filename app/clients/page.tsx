import { Suspense } from "react";
import Loading from "./loading";
import ClientsContent from "../components/Clients/ClientsContent";

export default function Clients() {
  return (
    <main className="">
      <Suspense fallback={<Loading />}>
        <ClientsContent />
      </Suspense>
    </main>
  );
}
