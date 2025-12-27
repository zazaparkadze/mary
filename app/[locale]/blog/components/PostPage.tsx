"use client";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import deletePost from "@/lib/deletePost";
import { useState } from "react";

export default function PostPage({
  post,
  locale,
}: postProps & { locale: "he" | "en" }) {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { title, postBody, dateTime, userId, id } = post;

  const handleClick = async (id: number) => {
    const result = await deletePost(id);
    const parsedResult: {
      acknowledged: boolean;
      deletedCount: number;
    } = JSON.parse(result);

    if (parsedResult.acknowledged === true) {
      window.location.reload();
    }
  };

  const content = (
    <section className="flex flex-col m-3  lg:max-w-7xl bg-white shadow-lg border border-gray-200 rounded-xl p-4 lg:p-8">
      <p className="text-xl pb-4 wrap-anywhere">
        {locale === "en" ? "Title " : " כותרת"}: {title}
      </p>
      <p className="text-[14px] pb-4 font-semibold wrap-anywhere">
        {locale === "en" ? "Date" : " תאריך"}: {dateTime}
      </p>
      <p className="overflow-auto wrap-anywhere">{postBody}</p>
      <p>Posted By {userId ? userId : "anonimous"}</p>
      <br />
      <hr />
      <section className="w-full flex justify-evenly mt-4">
        <Button
          disabled={isDisabled}
          variant={"outline"}
          onClick={() => {
            handleClick(id);
            setIsDisabled(true);
          }}
          className="bg-[#848679] text-white"
        >
          {!isDisabled ? "Delete" : "wait..."}
        </Button>
        <Button
          variant={"outline"}
          disabled
          className="bg-[#9D9E94] text-white"
        >
          Update
        </Button>
      </section>
    </section>
  );
  return content;
}
