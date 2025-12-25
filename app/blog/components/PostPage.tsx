"use client";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import deletePost from "@/lib/deletePost";

export default function PostPage({ post }: postProps) {
  const { title, postBody, dateTime, userId, id } = post;
  const handleClick = async (id: number) => {
    await deletePost(id);
    window.location.reload();
  };

  const content = (
    <section className="flex flex-col m-3  lg:max-w-7xl bg-white shadow-lg border border-gray-200 rounded-xl p-4 lg:p-8">
      <p className="text-xl">Title: {title}</p>
      <p className="text-[14px]">Time: {dateTime}</p>
      <p>{postBody}</p>
      <p>Posted By {userId ? userId : "anonimous"}</p>
      <br />
      <hr />
      <section className="w-full flex justify-evenly mt-4">
        <Button
          variant={"outline"}
          onClick={() => handleClick(id)}
          className="bg-[#848679] text-white"
        >
          Delete
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
