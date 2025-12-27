import { Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background p-8 max-w-7xl text-black/80 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between w-full max-w-7xl">
        <p className="text-sm text-muted-foreground">
          © 2025 All rights reserved
        </p>
        <div className="flex gap-4">
          <Twitter className="h-5 w-5" />
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/marigilels"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Facebook"
            href="https://www.facebook.com/hanukashvili"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
