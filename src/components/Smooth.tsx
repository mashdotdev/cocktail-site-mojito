import ReactLenis from "lenis/react";
import { ReactNode } from "react";

const Smooth = ({ children }: { children: ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Smooth;
