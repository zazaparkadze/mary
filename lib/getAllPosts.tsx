"use server";
import Post from "@/app/model/Post";
import connectDB from "@/lib/connectDB";

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

export default async function getAllPosts() {
  connectDB();
  const allPosts: Post[] = await Post.find({});
  return JSON.stringify(allPosts);
}
