import { Metadata } from "next";

import { ids } from "@/components/pagesLinks";
import DynamicPage from "@/components/Home/MainSection/DynamicPage";
import { Suspense } from "react";
import Image from "next/image";

type Props = {
  params: {
    location: string;
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: decodeURI(params.id[1]),
    description: decodeURI(params.id[2]),
    alternates: {
      canonical: `https://kometal.vercel.app/${params.location}/catalog/${params.id[0]}/${params.id[1]}/${params.id[2]}`,
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
const Loading = () => {
  return <Image src="loading.gif" alt="loading" width={100} height={100} />;
};

export default async function MetalPage({ params }: Props) {
  // const id = params.id;
  // const page = await getPages(id);

  const pageCategory = decodeURI(params.id[0]);
  const pageLabel = decodeURI(params.id[1]);
  const pageTitle = decodeURI(params.id[2]);

  return (
    <main className="mt-8 w-full">
      <Suspense fallback={<Loading />}>
        <DynamicPage
          category={pageCategory}
          id={pageLabel}
          title={pageTitle === "undefined" ? "" : pageTitle}
        />
      </Suspense>
    </main>
  );
}
