import { Suspense } from "react";
import PriceContent from "../components/Price/PriceContent";
import Loading from "./loading";

const Price = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <PriceContent />
      </Suspense>
    </main>
  );
};

export default Price;
