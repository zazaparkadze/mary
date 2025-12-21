import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Content from "@/components/ui/content";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const localeParams = await params;
  const locale = localeParams.locale as "en" | "he";
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <Header locale={locale} />
      <Content locale={locale} />
      <Footer />
    </div>
  );
}
