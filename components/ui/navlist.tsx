import Link from "next/link";
import SessionButton from "./session-button";
import ToggleLanguage from "./language-button";

type cssClasses = {
  divClass: string;
  ulClass: string;
};

export default function Navlist({ divClass, ulClass }: cssClasses) {
  return (
    <div className={`${divClass}`}>
      <ul className={`${ulClass}`}>
        <li>About Me</li>
        <li>Services</li>
        <li>
          <a href="#testimonials"> Testimonials</a>
        </li>
        <li>
          <a href="#how-it-works">How it Works</a>
        </li>
        <li>
          <Link href={"blog"}>Blog</Link>
        </li>
      </ul>
      <div className="flex gap-3">
        <ToggleLanguage />
        <SessionButton />
      </div>
    </div>
  );
}
