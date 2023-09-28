"use client";

<<<<<<< HEAD
import { posts } from "@/posts";
import Image from "next/image";
import Link from "next/link";
=======
import SearchContent from "@/components/Search/SearchContent";
import { posts } from "@/posts";
>>>>>>> 7b47037 (commt)
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

<<<<<<< HEAD
  return (
    <div className="flex flex-col pt-8 gap-4">
      <h2 className="text-2xl text-center lg:text-start">
        По запросу: <span className="font-bold">"{query}"</span>
      </h2>
      <div className=" max-w-[1000px] w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 py-4 px-2 sm:px-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((post: any, index: number) => (
            <div
              key={index}
              className="rounded-md relative border text-center border-light-gray gap-2 w-full min-h-[250px] flex flex-col justify-between items-center p-[20px] cursor-pointer hover:shadow-lg transition duration-200"
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
                src={`/${post[2]}.png`}
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
=======
  return <SearchContent query={query || ""} currentPosts={currentPosts} />;
>>>>>>> 7b47037 (commt)
};

export default SearchPage;
