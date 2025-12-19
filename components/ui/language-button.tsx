"use client";
import { LucideGlobe, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function ToggleLanguage() {
  const [lang, setLang] = useState("עברית");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          className="flex gap-x-1 items-center border border-[#a36f6f] 
          rounded-full text-[16px] content-center bg-white text-[#a36f6f]
           w-34 cursor-pointer hover:bg-[#a36f6f] hover:text-white
         focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none shadow-none
           "
        >
          <LucideGlobe />
          <span>{lang}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {lang !== "English" && (
          <DropdownMenuItem
            className="text-[#a36f6f] hover:bg-[#a36f6f]! hover:text-white!"
            onClick={() => setLang("English")}
          >
            English
          </DropdownMenuItem>
        )}
        {lang !== "עברית" && (
          <DropdownMenuItem
            className="text-[#a36f6f] hover:bg-[#a36f6f]! hover:text-white!"
            onClick={() => setLang("עברית")}
          >
            עברית
          </DropdownMenuItem>
        )}
        {lang !== "Русский" && (
          <DropdownMenuItem
            className="text-[#a36f6f] hover:bg-[#a36f6f]! hover:text-white!"
            onClick={() => setLang("Русский")}
          >
            Русский
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
