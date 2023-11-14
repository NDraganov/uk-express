import { NavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  title: string;
  onClick?: () => void;
}
export default function NavigationLink({ to, title, onClick }: NavLinkProps) {
  if (onClick) {
    return (
      <li>
        <button
          className="rounded-md px-5 py-1 hover:border-2 hover:border-slate-200"
          onClick={onClick}
        >
          <NavLink to={to}>{title}</NavLink>
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <NavLink to={to}>{title}</NavLink>
      </li>
    );
  }
}
