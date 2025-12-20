import { Button } from "./button";
import { Video } from "lucide-react";

export default function SessionButton({
  sessionButtontext,
}: {
  sessionButtontext: string;
}) {
  const handleClick = () => {
    const message =
      "Hello, I am Mary, Your message please, and I'll be back asap";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${+972546440805}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <Button
      variant={"outline"}
      size={"sm"}
      onClick={handleClick}
      className="flex gap-x-2.5 items-center rounded-full cursor-pointer 
       text-[#a36f6f] hover:bg-[#a36f6f] hover:text-white border-[#a36f6f]"
    >
      <Video className="fill-[#a36f6f]" />
      <p>{sessionButtontext}</p>
    </Button>
  );
}
