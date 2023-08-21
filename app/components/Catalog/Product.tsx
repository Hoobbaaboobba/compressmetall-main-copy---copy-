interface ProductProps {
  src: string;
  name: string;
  firstTopic: string;
  secondTopic: string;
  thirdTopic: string;
}

const Product: React.FC<ProductProps> = ({
  src,
  name,
  firstTopic,
  secondTopic,
  thirdTopic,
}) => {
  return (
    <div className="max-w-[280px] h-[420px] w-full flex text-center flex-col justify-between items-center border border-light-gray rounded-3xl p-[16px] gap-2 cursor-pointer xl:hover:shadow-xl transition duration-300">
      <img src={src} alt="card_image" />
      <h1 className="text-xl font-bold">{name}</h1>
      <hr className="w-full bg-orange-bg border-orange-bg border-2" />
      <div className="flex flex-col gap-2">
        <button className="w-full bg-light-gray hover:bg-orange-bg hover:text-white transition rounded-md font-medium py-2 px-4">
          {firstTopic}
        </button>
        <button className="w-full bg-light-gray hover:bg-orange-bg hover:text-white transition rounded-md font-medium py-2 px-4">
          {secondTopic}
        </button>
        <button className="w-full bg-light-gray hover:bg-orange-bg hover:text-white transition rounded-md font-medium p-2">
          {thirdTopic}
        </button>
      </div>
    </div>
  );
};

export default Product;
