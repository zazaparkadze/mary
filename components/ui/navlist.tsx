import Link from "next/link";
import SessionButton from "./session-button";
import ToggleLanguage from "./language-button";
import { he, en } from "../../app/content/navList.json";

type cssClasses = {
  divClass: string;
  ulClass: string;
  locale: "en" | "he";
};

export default function Navlist({ divClass, ulClass, locale }: cssClasses) {
  const translation = { he, en };

  return (
    <div className={`${divClass}`}>
      <ul className={`${ulClass}`}>
        <li>{translation[locale].aboutme}</li>
        <li>{translation[locale].services}</li>
        <li>
          <a href="#testimonials"> {translation[locale].testimonials}</a>
        </li>
        <li>
          <a href="#how-it-works">{translation[locale].howitworks}</a>
        </li>
        <li>
          <Link href={"blog"}>{translation[locale].blog}</Link>
        </li>
      </ul>
      <div className="flex gap-3 pb-3 lg:pb-0">
        <ToggleLanguage locale={locale} />
        <SessionButton sessionButtontext={translation[locale].bookasession} />
      </div>
    </div>
  );
}
