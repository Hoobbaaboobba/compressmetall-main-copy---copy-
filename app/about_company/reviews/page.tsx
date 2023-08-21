import ReviewsContent from "@/app/components/AboutCompany/Reviews/ReviewsContent";
import React, { Suspense } from "react";
import Loading from "../loading";

const Reviews = () => {
  return (
    <main className="max-w-[900px] w-full flex flex-col justify-center items-center">
      <Suspense fallback={<Loading />}>
        <ReviewsContent />
      </Suspense>
    </main>
  );
};

export default Reviews;
