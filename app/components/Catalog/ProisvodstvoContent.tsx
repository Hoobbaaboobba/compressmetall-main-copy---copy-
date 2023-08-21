import sito from "../../assets/ProisvodstvoSito.png";
import Proisvodstovo from "./Proisvodstovo";

const proisvodstvoItems = [
  {
    label: "Втулки",
    src: sito.src,
  },
  {
    label: "Корпусы распределительных щитов (шкафов)",
    src: sito.src,
  },
  {
    label: "Металические вентиляционные решётки",
    src: sito.src,
  },
  {
    label: "Перфорированное сито",
    src: sito.src,
  },
  {
    label: "Панели",
    src: sito.src,
  },
  {
    label: "Пандусы",
    src: sito.src,
  },
  {
    label: "Спирали",
    src: sito.src,
  },
  {
    label: "Пружины",
    src: sito.src,
  },
  {
    label: "Металлоконструкции",
    src: sito.src,
  },
  {
    label: "Кабельные лотки",
    src: sito.src,
  },
  {
    label: "Закладные детали",
    src: sito.src,
  },
  {
    label: "Кабельные лотки",
    src: sito.src,
  },
  {
    label: "Поковки",
    src: sito.src,
  },
  {
    label: "Сетка",
    src: sito.src,
  },
  {
    label: "Отливки",
    src: sito.src,
  },
  {
    label: "Уголок гнутый",
    src: sito.src,
  },
  {
    label: "Швеллер гнутый",
    src: sito.src,
  },
  {
    label: "Сварная балка",
    src: sito.src,
  },
];

const ProisvodstvoSection = () => {
  return (
    <main className="max-w-[900px] flex h-full flex-wrap justify-center items-center gap-8 lg:gap-4">
      <Proisvodstovo proisvodstvoItems={proisvodstvoItems} />
    </main>
  );
};

export default ProisvodstvoSection;
