"use client";

import { useData } from "../DataContext";
import PostPage from "./PostPage";

type Post = {
  _id?: string | object;
  id: number;
  title: string;
  dateTime: string;
  postBody: string;
  likes?: number;
  disLikes?: number;
  comments?: string[];
  __v?: number;
  userId?: number;
};
type Props = {
  posts: Post[];
};

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
