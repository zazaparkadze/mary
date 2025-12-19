import Link from "next/link";

export default function Navlist(addClasses: { addClasses?: string }) {
  const cssClasses = "flex gap-3" + addClasses;
  return (
    <ul className={cssClasses}>
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
  );
}
