"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  const { title, postBody, dateTime, userId } = post;
  const [postLength, setPostLength] = useState(post.postBody?.length);
  function showHideContent() {
    if (postLength > 25) {
      setPostLength(0);
    } else {
      setPostLength(26);
    }
  }
  const content = (
    <section className="flex flex-col mt-3 pt-3 max-w-56">
      <p className="text-xl">Title: {title}</p>
      <p className="text-[14px]">Time: {dateTime}</p>
      <p onClick={showHideContent} className="flex grow-0">
        Content: {postLength ? postBody.slice(0, 25) + "..." : postBody}
      </p>
      <p>Posted By {userId ? userId : "anonimous"}</p>
      <br />
      <hr />
    </section>
  );
  return content;
}
