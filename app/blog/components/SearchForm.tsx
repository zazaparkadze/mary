"use client";
import { useData } from "../DataContext";

export default function SearchForm() {
  const { setSearch, search } = useData();
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 w-full pt-2">
      <form className="bg-gray-50 lg:w-[300px]">
        <input
          type="text"
          name="searchPost"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded lg:w-[300px]"
        />
      </form>
    </div>
  );
}
