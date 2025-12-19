"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  open?: boolean;
  onChange?: (open: boolean) => void;
  size?: "sm" | "md";
  className?: string;
};

export default function HamburgerButton({
  open: openProp,
  onChange,
  size = "sm",
  className = "",
}: Props) {
  const [openState, setOpenState] = useState<boolean>(!!openProp);
  const isControlled = typeof openProp === "boolean";
  const open = isControlled ? !!openProp : openState;

  function toggle() {
    const next = !open;
    if (!isControlled) setOpenState(next);
    onChange?.(next);
  }

  const dims = {
    sm: { btn: "w-8 h-8", barW: "w-6", barH: "h-[2px]", gap: "gap-1.5" },
    md: { btn: "w-9 h-9", barW: "w-7", barH: "h-[2px]", gap: "gap-1.5" },
  }[size];
  /* lg: { btn: "w-12 h-12", barW: "w-7", barH: "h-[2px]", gap: "gap-1.5" }, */

  return (
    <Button
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={toggle}
      className={`p-2 rounded-md ${dims.btn} flex items-center justify-center ${className} text-[#a36f6f] hover:text-[#a36f6f] hover:bg-transparent`}
      variant="ghost"
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span
        className={`relative flex flex-col ${dims.gap} items-center justify-center`}
      >
        <span
          className={`block ${dims.barW} ${
            dims.barH
          } rounded-full transform transition-all duration-300 ease-in-out bg-current ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block ${dims.barW} ${dims.barH}
          rounded-full transform transition-all duration-300 ease-in-out bg-current ${
            open ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />
        <span
          className={`block ${dims.barW} ${
            dims.barH
          } rounded-full transform transition-all duration-300 ease-in-out bg-current ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </span>
    </Button>
  );
}
