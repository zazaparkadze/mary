import { Spinner } from "@/components/ui/spinner";

export default function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-2xl text-green-700 ">Loading posts...</p>
      <Spinner className=" text-green-700" />
    </div>
  );
}
