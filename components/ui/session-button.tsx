import { Button } from "./button";
import { Video } from "lucide-react";

export default function SessionButton() {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      className="flex gap-x-2.5 items-center rounded-full cursor-pointer 
       text-[#a36f6f] hover:bg-[#a36f6f] hover:text-white border-[#a36f6f]"
    >
      <Video className="fill-[#a36f6f]" />
      <p>Book a Session</p>
    </Button>
  );
}
