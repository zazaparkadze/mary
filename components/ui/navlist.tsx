import ToggleLanguage from "./language";
import SessionButton from "./session-button";

export default function Navlist({ className = "flex-col gap-3 py-3" }) {
  return (
    <ul className={`flex items-center justify-center ${className} `}>
      <li>About Me</li>
      <li>Services</li>
      <li>Testimonials</li>
      <li>Blog</li>
      <li className="flex gap-x-3">
        <ToggleLanguage />
        <SessionButton />
      </li>
    </ul>
  );
}
