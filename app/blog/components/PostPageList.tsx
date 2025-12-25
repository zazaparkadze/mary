"use client";

import { useData } from "../DataContext";
import PostPage from "./PostPage";

export default function PostPageList({ posts }: Props) {
  const { search } = useData();

  const filteredPosts = posts.filter(
    (post) =>
      post.postBody.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="max-w-[1000px]">
      {filteredPosts.reverse().map((post) => (
        <PostPage post={post} key={post.id} />
      ))}
    </div>
  );
}
