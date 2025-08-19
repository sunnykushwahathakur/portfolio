import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-card border-t border-border mt-12 pt-8">
  <p className="text-sm text-muted-foreground text-center">
    &copy; {new Date().getFullYear()} Sunnythakur.com, All Rights Reserved.
  </p>

  <a
    href="#hero"
    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-4 bottom-4"
  >
    <ArrowUp />
  </a>
</footer>

  );
};
