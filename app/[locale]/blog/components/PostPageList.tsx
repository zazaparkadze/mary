"use client";

import { useData } from "../DataContext";
import PostPage from "./PostPage";

export default function PostPageList({
  posts,
  recentPosts,
  locale,
}: Props & { recentPosts: string; locale: Locale }) {
  const { search } = useData();

  const filteredPosts = posts.filter(
    (post) =>
      post.postBody.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="max-w-[1000px]">
      <p className="font-semibold text-center p-3 m-6 text-3xl bg-white shadow-lg border border-gray-200 rounded-xl">
        {recentPosts}
      </p>
      {filteredPosts.reverse().map((post) => (
        <PostPage post={post} key={post.id} locale={locale} />
      ))}
    </div>
  );
}
