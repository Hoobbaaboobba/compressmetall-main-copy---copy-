"use client";

import { useState } from "react";

const Search = () => {
  const [products, setProducts] = useState([]);

  return (
    <main className="max-w-[900px] w-full flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-bold">Результаты поиска</h1>
    </main>
  );
};

export default Search;
