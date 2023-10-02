import { Suspense } from "react";
import Loading from "./loading";
import OurContacts from "../../../components/Home/OurContacts/OurContacts";

export default function OurContactsPage() {
  return (
    <main className="mt-8">
      <Suspense fallback={<Loading />}>
        <OurContacts />
      </Suspense>
    </main>
  );
}
