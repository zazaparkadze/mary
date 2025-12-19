"use client";
import HamburgerButton from "./hamburger-button";
import SessionButton from "./session-button";
import ToggleLanguage from "./language-button";
import MaryLogo from "./mary-logo";
import { useState } from "react";
import Link from "next/link";
/* import Navlist from "./navlist"; */

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container flex sticky top-0 w-full justify-between max-w-7xl mx-auto bg-background p-4 lg:p-8 animate-mylist origin-top">
      <div className="grid place-content-center">
        <MaryLogo />
      </div>
      {/*  <Navlist /> */}
      <div className="hidden lg:flex gap-3 items-center">
        <ul className="flex gap-3">
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
        <ToggleLanguage />
        <SessionButton />
      </div>
      <div
        className="group w-full fixed inset-0  mt-15 lg:hidden"
        data-navlist={open ? "true" : "false"}
      >
        <div
          className="
           group-data-[navlist=false]:hidden 
           group-data-[navlist=true]:flex 
           flex-col
           items-center justify-center
           bg-black/5 backdrop-blur-[3px]
           animate-mylist origin-top
           "
        >
          <ul className="flex gap-3 flex-col items-center justify-center py-3">
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
            <li className="flex gap-x-3">
              <ToggleLanguage />
              <SessionButton />
            </li>
          </ul>
        </div>
      </div>
      <HamburgerButton
        className="lg:hidden"
        onChange={(open) => setOpen(open)}
      />
    </div>
  );
}
