"use client";
import { useData } from "../DataContext";
import { Input } from "@/components/ui/input";

export default function SearchForm({
  searchPlaceholder,
}: {
  searchPlaceholder: string;
}) {
  const { setSearch, search } = useData();
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 w-full pt-2">
      <form className="bg-gray-50 lg:w-[300px]">
        <Input
          name="searchPost"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-[#848679] bg-white px-3 py-1 rounded-[8px] lg:w-[300px]"
        />
      </form>
    </div>
  );
}
