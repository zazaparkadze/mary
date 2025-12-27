export const dynamic = "force-dynamic";
import CreateMongoPost from "../components/CreateMongoPost";

export default async function page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const rawParams = await params;
  console.log(rawParams);
  const locale = rawParams.locale as "he" | "en";
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <CreateMongoPost locale={locale} />
    </div>
  );
}
