"use client";
import HamburgerButton from "./hamburger-button";

import MaryLogo from "./mary-logo";
import { useState } from "react";

import Navlist from "./navlist";

export default function Header({ locale }: { locale: "en" | "he" }) {
  const [open, setOpen] = useState(false);
  const cssClassesLg = {
    divClass: "hidden lg:flex gap-3 items-center",
    ulClass: "flex gap-3",
    locale: locale,
  };
  const cssClassesSm = {
    divClass:
      "group-data-[navlist=false]:hidden  group-data-[navlist=true]:flex flex-col items-center justify-center bg-black/5 backdrop-blur-[3px] animate-nav origin-top",
    ulClass: "flex gap-3 flex-col items-center justify-center py-3",
    locale: locale,
  };
  return (
    <div className="container flex sticky top-0 w-full justify-between max-w-7xl mx-auto bg-background p-4 lg:p-8 animate-nav origin-top">
      <div className="grid place-content-center">
        <MaryLogo />
      </div>
      <Navlist {...cssClassesLg} />
      <div
        className="group w-full fixed inset-0  mt-15 lg:hidden animate-nav origin-top"
        data-navlist={open ? "true" : "false"}
      >
        <Navlist {...cssClassesSm} />
      </div>
      <HamburgerButton
        className="lg:hidden"
        onChange={(open) => setOpen(open)}
      />
    </div>
  );
}
