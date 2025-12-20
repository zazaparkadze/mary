import Link from "next/link";
import SessionButton from "./session-button";
import ToggleLanguage from "./language-button";
import { he, en } from "../../app/content/navList.json";

type cssClasses = {
  divClass: string;
  ulClass: string;
  locale: string;
};

export default function Navlist({ divClass, ulClass, locale }: cssClasses) {
  const translation = { he, en };
  return (
    <div className={`${divClass}`}>
      <ul className={`${ulClass}`}>
        <li>{translation[locale as "en" | "he"].aboutme}</li>
        <li>{translation[locale as "en" | "he"].services}</li>
        <li>
          <a href="#testimonials">
            {" "}
            {translation[locale as "en" | "he"].testimonials}
          </a>
        </li>
        <li>
          <a href="#how-it-works">
            {translation[locale as "en" | "he"].howitworks}
          </a>
        </li>
        <li>
          <Link href={"blog"}>{translation[locale as "en" | "he"].blog}</Link>
        </li>
      </ul>
      <div className="flex gap-3">
        <ToggleLanguage locale={locale} />
        <SessionButton
          sessionButtontext={translation[locale as "en" | "he"].bookasession}
        />
      </div>
    </div>
  );
}
