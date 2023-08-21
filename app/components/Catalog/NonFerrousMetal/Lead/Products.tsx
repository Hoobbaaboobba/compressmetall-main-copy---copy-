type productsItem = {
  No: string;
  label: string;
  size: string;
  quantity: string;
};

type Props = {
  productsItems: productsItem[];
};

const Products = ({ productsItems }: Props) => {
  return (
    <>
      {productsItems.map((item) => {
        return (
          <div
            key={item.label}
            className="w-full flex gap-2 justify-between items-center border border-light-gray"
          >
            <div className="text-sm md:text-md w-[30px] border-r border-light-gray flex justify-center items-center text-center py-2">
              <p>{item.No}</p>
            </div>
            <div className="text-sm md:text-md w-[200px] md:w-[300px] text-center flex justify-center items-center py-2 px-1">
              <p>{item.label}</p>
            </div>
            <div className="text-sm md:text-md w-[70px] break-all md:w-[100px] xl:w-[235px] text-center flex justify-center items-center py-2 px-1">
              <p>{item.size}</p>
            </div>
            <div className="text-sm md:text-md w-[70px] md:w-[100px] xl:w-[235px] text-center md:flex justify-center items-center py-2 px-1">
              <p>{item.quantity}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
