import { NavLink } from "react-router-dom";

interface PolicyNavLinkProps {
  title: string;
  to: string;
}

export default function PolicyNavLink({ title, to }: PolicyNavLinkProps) {
  return (
    <NavLink to={to}>
      <li>{title}</li>
    </NavLink>
  );
}
