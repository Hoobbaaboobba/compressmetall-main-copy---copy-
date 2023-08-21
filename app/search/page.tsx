"use client";

import { posts } from "@/posts";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const search = useSearchParams();
  const query = search.get("query");

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter(
      (post) =>
        post[0].toLowerCase().includes(query.toLowerCase()) ||
        post[1].toLowerCase().includes(query.toLowerCase())
    );
  }

  // if (query) {
  //   currentPosts = posts.filter((post) =>
  //     post[1].toLowerCase().includes(query.toLowerCase())
  //   );
  // }

  return (
    <div className="flex flex-col pt-8 gap-4">
      <h2 className="text-2xl text-center lg:text-start">
        По запросу: <span className="font-bold">"{query}"</span>
      </h2>
      <div className=" max-w-[1000px] w-full flex flex-wrap justify-center items-center lg:justify-start lg:items-start gap-4 py-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((post: any, index: number) => (
            <div
              key={index}
              className="rounded-md relative border text-center border-light-gray gap-2 w-[200px] min-h-[250px] flex flex-col justify-between items-center p-[20px] cursor-pointer hover:shadow-lg transition duration-200"
            >
              <Link
                href={`/catalog/${encodeURI(post[0])}/${encodeURI(
                  post[1]
                )}?i=${encodeURI(post[2])}&q=${encodeURI(
                  post[3]
                )}&amount=${encodeURI(post[4])}`}
                className="absolute w-full h-full top-0 left-0"
              ></Link>
              <Image
                src={require(`../assets/${post[2]}.png`)}
                alt={post[0]}
                width={160}
                height={160}
              />
              <div className="text-center w-full">
                <h1 className="opacity-60">{post[0]}</h1>
                <h2>{post[1]}</h2>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-4xl text-center font-bold">Ничего не найдено</h1>
        )}
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default SearchPage;
