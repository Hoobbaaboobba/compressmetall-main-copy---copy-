import {
  blackMetal,
  colorMetal,
  metiza,
  nershav,
  precenSplav,
  truba,
  zincMetal,
} from "../Home/MainSection/productsData";
import AllItems from "./AllItems/AllItems";
import PageComponent from "./PageComponent";

interface CatalogContentProps {
  query: string;
}

const CatalogContent: React.FC<CatalogContentProps> = ({ query }) => {
  return (
    <div className="mt-2 xl:mt-8 w-full justify-center items-center">
      {query === "Все товары" || query === "" ? <AllItems /> : ""}
      {query === "Чёрный металл" ? <PageComponent data={blackMetal} /> : ""}
      {query === "Цветной металл" ? <PageComponent data={colorMetal} /> : ""}
      {query === "Нержавеющая сталь" ? <PageComponent data={nershav} /> : ""}
      {query === "Оцинкованная сталь" ? <PageComponent data={zincMetal} /> : ""}
      {query === "Метиза" ? <PageComponent data={metiza} /> : ""}
      {query === "Трубопроводная арматура" ? (
        <PageComponent data={truba} />
      ) : (
        ""
      )}
      {query === "Прецензионные сплавы" ? (
        <PageComponent data={precenSplav} />
      ) : (
        ""
      )}
      {query === "Строительные материалы" ? (
        <PageComponent data={blackMetal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CatalogContent;
