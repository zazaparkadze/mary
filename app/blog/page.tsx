export const dynamic = "force-dynamic";
import getAllPosts from "@/lib/getAllPosts";
import SearchForm from "./components/SearchForm";
import PostPageList from "./components/PostPageList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { House, ArrowUp } from "lucide-react";

export default async function page() {
  const posts: Post[] = JSON.parse(await getAllPosts());

  return (
    <div
      id="#top"
      className="flex flex-col items-center min-h-screen bg-gray-50"
    >
      <div className="w-full flex flex-col items-end fixed top-[25%] right-2 text-xl gap-y-3">
        <Button variant={"outline"} className="w-3 border-[#848679]">
          <Link href="/">
            <House />
          </Link>
        </Button>
        <Button variant={"outline"} className="w-3 border-[#848679]">
          <Link href="#top">
            <ArrowUp />
          </Link>
        </Button>
      </div>
      <Button variant={"outline"} className="my-5 border-[#848679]">
        <Link href={"/blog/newpost"}>Create New Post</Link>
      </Button>
      <SearchForm />
      <PostPageList posts={posts} />
    </div>
  );
}
