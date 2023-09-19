import { Suspense } from "react";
import Loading from "./loading";
import OurContacts from "../../../components/Home/OurContacts/OurContacts";

type Props = {
  params: {
    location: string;
  };
};

export default function OurContactsPage({ params }: Props) {
  return (
    <main className="mt-8">
      <Suspense fallback={<Loading />}>
        <OurContacts />
      </Suspense>
    </main>
  );
}
