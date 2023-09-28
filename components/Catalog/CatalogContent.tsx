<<<<<<< HEAD
=======
import { metalArray } from "../Home/MainSection/data";
>>>>>>> 7b47037 (commt)
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
<<<<<<< HEAD
=======
import CatalogItself from "./CatalogItself";
>>>>>>> 7b47037 (commt)
import PageComponent from "./PageComponent";

interface CatalogContentProps {
  query: string;
}

const CatalogContent: React.FC<CatalogContentProps> = ({ query }) => {
  return (
<<<<<<< HEAD
    <div className="mt-2 xl:mt-8 w-full justify-center items-center">
      {query === "Все товары" || query === "" ? <AllItems /> : ""}
=======
    <div className="mt-8 w-full justify-center items-center">
      {/* {query === "Все товары" || query === "" ? <AllItems /> : ""}
>>>>>>> 7b47037 (commt)
      {query === "Чёрный металл" ? <PageComponent data={blackMetal} /> : ""}
      {query === "Цветной металл" ? <PageComponent data={colorMetal} /> : ""}
      {query === "Нержавеющая сталь" ? <PageComponent data={nershav} /> : ""}
      {query === "Оцинкованная сталь" ? <PageComponent data={zincMetal} /> : ""}
      {query === "Метизы" ? <PageComponent data={metiza} /> : ""}
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
<<<<<<< HEAD
      )}
=======
      )} */}
      {query ? <CatalogItself data={metalArray} label={query} /> : ""}
>>>>>>> 7b47037 (commt)
    </div>
  );
};

export default CatalogContent;
