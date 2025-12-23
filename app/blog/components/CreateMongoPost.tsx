"use client";
import { createMongoPost } from "../action";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateMongoPost() {
  const ref = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 w-full">
      <form
        ref={ref}
        action={async (formData) => {
          await createMongoPost(formData);
          ref.current?.reset();
          router.refresh();
        }}
        className="flex flex-col items-start lg:items-center gap-2 rounded space-3"
      >
        <label htmlFor="title" className="px-2 pb-1 pt-2 ">
          {" "}
          Title
        </label>
        <input
          type="text"
          name="title"
          ref={inputRef}
          placeholder="title"
          className="border px-2 py-1 rounded  border-gray-400 lg:w-[300px]"
        />
        <label htmlFor="newpost" className="px-2 py-1  border-gray-400">
          {" "}
          Post
        </label>
        <textarea
          name="newpost"
          placeholder="new post"
          className="border px-2 py-1 rounded  border-gray-400 lg:w-[300px]"
        />
        <button className="px-4 py-1 my-2 rounded border border-gray-400 lg:w-[300px]">
          submit
        </button>
      </form>
    </div>
  );
}
