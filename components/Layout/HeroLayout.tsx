import { ReactNode } from "react";

type HeroLayoutProps = {
  children: ReactNode;
};

export default function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center md:items-start gap-8">
      {children}
    </div>
  );
}
