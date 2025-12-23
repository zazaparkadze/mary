export const dynamic = "force-dynamic";
import getAllPosts from "@/lib/getAllPosts";
import CreateMongoPost from "./components/CreateMongoPost";
import SearchForm from "./components/SearchForm";
import PostPageList from "./components/PostPageList";

export default async function page() {
  const posts: Post[] = JSON.parse(await getAllPosts());
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <CreateMongoPost />
      <SearchForm />
      <PostPageList posts={posts} />
    </div>
  );
}
