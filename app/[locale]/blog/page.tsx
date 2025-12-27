export const dynamic = "force-dynamic";
import getAllPosts from "@/lib/getAllPosts";
import SearchForm from "./components/SearchForm";
import PostPageList from "./components/PostPageList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { House, ArrowUp } from "lucide-react";
import { en } from "@/app/content/enContent.json";
import { he } from "@/app/content/heContent.json";
import { ru } from "@/app/content/ruContent.json";
import clsx from "clsx";

const translate = { en, he, ru };

export default async function page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const rawParams = await params;
  const locale = rawParams.locale as Locale;
  const posts: Post[] = JSON.parse(await getAllPosts());

  return (
    <div
      id="#top"
      className="flex flex-col items-center min-h-screen bg-gray-50"
    >
      <div
        className={clsx(
          "w-full flex flex-col items-end fixed top-[25%] right-4 text-xl gap-y-3",
          [{ "left-4": locale === "he" }]
        )}
      >
        <Button
          variant={"outline"}
          className="w-3 border-[#848679] bg-transparent"
        >
          <Link href="/">
            <House />
          </Link>
        </Button>
        <Button
          variant={"outline"}
          className="w-3 border-[#848679] bg-transparent"
        >
          <Link href="#top">
            <ArrowUp />
          </Link>
        </Button>
      </div>
      <Button variant={"outline"} className="my-5 border-[#848679]">
        <Link href={`/${locale}/blog/newpost`}>
          {translate[locale].createNewPost}
        </Link>
      </Button>
      <SearchForm searchPlaceholder={translate[locale].searchPlaceholder} />
      <PostPageList
        posts={posts}
        recentPosts={translate[locale].recentPosts}
        locale={locale}
      />
    </div>
  );
}
