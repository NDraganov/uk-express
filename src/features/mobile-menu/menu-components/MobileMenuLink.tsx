import { NavLink } from "react-router-dom";

interface MobileMenuLinkProps {
  to: string;
  title: string;
}
export default function MobileMenuLink({ to, title }: MobileMenuLinkProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => <li className={`${isActive ? "" : ""}`}>{title}</li>}
    </NavLink>
  );
}
