import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Content from "@/components/ui/content";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
