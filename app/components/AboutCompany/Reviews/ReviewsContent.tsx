const ReviewsContent = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-4">
      <h1 className="font-bold text-gray-bg text-3xl">
        Здесь будут появляться Ваши отзывы
      </h1>
      <button className="font-medium text-white border border-orange-bg bg-orange-bg hover:bg-transparent hover:text-orange-bg transition py-2 px-4 rounded-lg">
        Оставить отзыв
      </button>
    </section>
  );
};

export default ReviewsContent;
