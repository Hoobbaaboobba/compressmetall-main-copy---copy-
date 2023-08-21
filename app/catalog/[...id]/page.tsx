import { Metadata } from "next";

import { ids } from "@/app/components/pagesLinks";
import DynamicPage from "@/app/components/Home/MainSection/DynamicPage";

type Props = {
  params: {
    category: string;
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: decodeURI(params.id[1]),
    description: decodeURI(params.id[2]),
    alternates: {
      canonical: `https://kometal.vercel.app/catalog/${params.id[0]}/${params.id[1]}/${params.id[2]}`,
    },
    keywords: [
      decodeURI(params.id[1]),
      `Компресс металл ${decodeURI(params.id[1])}`,
      `Купить ${decodeURI(params.id[1])}`,
      `Металлопрокат ${decodeURI(params.id[1])}`,
      decodeURI(params.id[2]),
      `Компресс металл ${decodeURI(params.id[2])}`,
      `Купить ${decodeURI(params.id[2])}`,
      `Металлопрокат ${decodeURI(params.id[2])}`,
    ],
    openGraph: {
      title: decodeURI(params.id[1]),
      description: decodeURI(params.id[2]),
    },
  };
}

// export async function getPages(id: string) {
//   const response = await fetch(`http://localhost:3000/api/pageLink/${id}`);
//   return response.json();
// }

export async function generateStaticParams() {
  const data = ids;

  return data;
}

export default async function MetalPage({ params }: Props) {
  // const id = params.id;
  // const page = await getPages(id);

  const pageCategory = decodeURI(params.id[0]);
  const pageLabel = decodeURI(params.id[1]);

  return (
    <main className="mt-8 w-full">
      <DynamicPage category={pageCategory} id={pageLabel} />
    </main>
  );
}
