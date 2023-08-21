const NewsInput = () => {
  return (
    <form action="" className="flex mt-4">
      <input
        type="text"
        placeholder="example@gmail.com"
        className="rounded-l-lg border border-light-gray outline-none py-2 px-4 text-gray-bg"
      />
      <button
        type="submit"
        className="py-2 px-4 font-medium rounded-r-lg text-white border border-orange-bg bg-orange-bg hover:bg-transparent hover:text-orange-bg"
      >
        Подписаться
      </button>
    </form>
  );
};

export default NewsInput;
