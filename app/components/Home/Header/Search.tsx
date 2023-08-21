"use client";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const params = useSearchParams();
  const query = params.get("query");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(`/search?query=${searchQuery}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="border relative border-orange-bg max-w-[500px] w-full flex justify-between items-center"
    >
      <SearchOutlinedIcon className="text-gray-bg opacity-50 mx-2" />
      <input
        type="search"
        defaultValue={query || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Поиск по наименованию или коду товара"
        className="text-gray-bg opacity-80 w-full outline-none pr-2"
      />
      <button type="submit" className="bg-orange-bg h-full py-2 px-4">
        Найти
      </button>
      {/* {searchQuery === "" ? (
        ""
      ) : (
        <ul className="absolute top-[50px] bg-white z-50 w-full border">
          {currentPosts.map((post) => (
            <li
              key={post.id}
              className="text-black hover:bg-light-gray py-2 px-4 cursor-pointer"
            >
              {post.title}
            </li>
          ))}
        </ul>
      )} */}
    </form>
  );
};

export default Search;
