"use client";
import { createMongoPost } from "../action";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function CreateMongoPost({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
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
          router.push(`/${locale}/blog`);
        }}
        className="flex flex-col items-center justify-center min-h-screen lg:items-center gap-2 rounded space-3"
      >
        <label htmlFor="title" className="px-2 pb-1 pt-2 ">
          {" "}
          {locale === "he" ? "כותרת" : " Title"}
        </label>
        <input
          type="text"
          name="title"
          ref={inputRef}
          placeholder={locale !== "he" ? "Title" : "כותרת"}
          required
          className="border px-2 py-1 rounded  border-gray-400 lg:w-[600px] w-full"
        />
        <label htmlFor="newpost" className="px-2 py-1  border-gray-400">
          {" "}
          {locale !== "he" ? "Post" : "פוסט"}
        </label>
        <textarea
          name="newpost"
          placeholder={locale !== "he" ? "start typing" : "להתחיל להקליד"}
          required
          className="border px-2 py-1 rounded  border-gray-400 lg:w-[600px]"
        />
        <button
          onClick={() => setSubmitting(true)}
          className="px-4 py-1 my-2 rounded border w-full border-gray-400 lg:w-[600px]"
        >
          <div className="flex items-center justify-center ">
            {!submitting
              ? locale !== "he"
                ? "submit"
                : "להגיש"
              : locale !== "he"
              ? "submitting, wait... "
              : "שולח, רגע..."}
            {submitting && <Spinner />}
          </div>
        </button>
      </form>
    </div>
  );
}
