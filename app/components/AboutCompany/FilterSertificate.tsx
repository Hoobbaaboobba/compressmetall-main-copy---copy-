const FilterSertificate = () => {
  return (
    <div className="w-full mb-[30px]">
      <select
        name=""
        id=""
        className="font-medium outline-none p-2 border border-light-gray rounded-xl cursor-pointer text-gray-bg focus:border-orange-bg"
      >
        <option className="font-medium">Арматура</option>
        <option className="font-medium">Сталь</option>
        <option className="font-medium">Нержавеющая сталь</option>
        <option className="font-medium">Арматура</option>
        <option className="font-medium">Арматура</option>
      </select>
    </div>
  );
};

export default FilterSertificate;
