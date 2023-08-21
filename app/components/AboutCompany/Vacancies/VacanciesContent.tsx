import NewsInput from "../../NewsInput";

const VacanciesContent = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl text-gray-bg">
        На данный момент вакансий нет
      </h1>
      <p className="text-xl opacity-70">
        Подпишитесь, чтобы первыми узнатиь о появлении новых вакансий
      </p>
      <NewsInput />
    </section>
  );
};

export default VacanciesContent;
