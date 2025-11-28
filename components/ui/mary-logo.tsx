import { Brain } from "lucide-react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"], //
});

export default function MaryLogo() {
  return (
    <div>
      <div className="text-neutral-800  flex items-center justify-center gap-x-1">
        <Brain className="text-[#a36f6f] size-3.5" />
        <div className={lato.className}>Mary</div>
      </div>
    </div>
  );
}
