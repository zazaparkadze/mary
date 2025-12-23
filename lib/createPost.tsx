"use server";
import Post from "@/app/model/Post";

export default async function createPost(newPost: Post) {
  const createdPost = await Post.create(newPost);

  return JSON.stringify(createdPost);
}
