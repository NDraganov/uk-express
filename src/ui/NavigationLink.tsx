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
          className="rounded-md px-5 py-1 border border-black hover:border-slate-200 font-medium"
          onClick={onClick}
        >
          <NavLink to={to}>{title}</NavLink>
        </button>
      </li>
    );
  } else {
    return (
      <a className="text-sm text-blue-900 underline">
        <NavLink to={to}>{title}</NavLink>
      </a>
    );
  }
}
