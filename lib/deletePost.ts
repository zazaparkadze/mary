"use server";
import Post from "@/app/model/Post";

export default async function deletePost(id: number) {
  const foundPost = await Post.findOne({ id: id }).lean();
  if (foundPost) {
    const result = await Post.deleteOne({ id: id });

    return JSON.stringify(result);
  } else {
    return JSON.stringify({ message: "server error" });
  }
}
