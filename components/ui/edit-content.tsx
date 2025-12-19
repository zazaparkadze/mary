"use client";
import { PencilLine } from "lucide-react";

export default function EditContent() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div
        className="group w-7 h-7 bg-gray-600 rounded-full cursor-pointer 
    grid place-content-center text-white relative"
      >
        <PencilLine className="size-4" />
        <div className="hidden group-hover:grid text-[12px] text-white bg-black/70 absolute right-8 bottom-0 px-2 py-1 whitespace-nowrap rounded-xl">
          Edit Content
        </div>
      </div>
    </div>
  );
}
