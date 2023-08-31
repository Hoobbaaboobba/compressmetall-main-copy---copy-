"use client";

const Loading = () => {
  return (
    <div className="flex flex-col w-full justify-between items-center py-3">
      <div className="w-full justify-between xl:flex hidden">
        <div className="bg-light-gray w-[135px] h-[68px] rounded-md"></div>
        <div className="bg-light-gray max-w-[900px] w-full h-[68px] rounded-md"></div>
        <div className="bg-light-gray w-[100px] h-[68px] rounded-md"></div>
      </div>
      <div>
        <div className="bg-light-gray w-full h-[68px]"></div>
      </div>
    </div>
  );
};

export default Loading;
