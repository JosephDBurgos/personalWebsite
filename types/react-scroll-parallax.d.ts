declare module "react-scroll-parallax" {
  import { ReactNode } from "react";

  export interface ParallaxProps {
    speed?: number;
    className?: string;
    children?: ReactNode;
  }

  export const Parallax: React.FC<ParallaxProps>;

  export interface ParallaxProviderProps {
    children?: ReactNode;
  }

  export const ParallaxProvider: React.FC<ParallaxProviderProps>;
}
