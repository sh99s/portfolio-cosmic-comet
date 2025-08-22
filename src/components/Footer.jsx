import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-12 flex flex-wrap  justify-center items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {"Saurabh's"} Cloud. All rights
        reserved.
      </p>
      <a
        href="#hero"
        className="ml-2 p-2 bg-primary/10 rounded-full hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
