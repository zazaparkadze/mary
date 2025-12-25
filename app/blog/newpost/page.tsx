export const dynamic = "force-dynamic";
import CreateMongoPost from "../components/CreateMongoPost";

export default async function page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <CreateMongoPost />
    </div>
  );
}
