import { type ReactNode } from "react";
import { IconContext } from "react-icons";

interface IconProps {
  value: object;
  children: ReactNode;
}

export default function Icon({ value, children }: IconProps) {
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
}
