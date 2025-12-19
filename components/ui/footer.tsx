import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background p-8 max-w-7xl text-black/80 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between w-full max-w-7xl">
        <p className="text-sm text-muted-foreground">
          © 2025 All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
