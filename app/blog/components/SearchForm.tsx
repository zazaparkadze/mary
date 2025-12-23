"use client";
/* import { searchString } from "../action"; */
import { useData } from "../DataContext";

export default function SearchForm() {
  const { setSearch, search } = useData();
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 w-full pt-2">
      <form
        /*  action={async (formData) => {
        const searchStr = (await searchString(formData)) as string;
        setSearch(searchStr);
      }} */
        className="bg-gray-50 lg:w-[300px]"
      >
        <input
          type="text"
          name="searchPost"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded lg:w-[300px]"
        />
        {/*  <button className="border px-3 py-1 ml-2 rounded border-gray-400 w-fit">
        Search
      </button> */}
      </form>
    </div>
  );
}
