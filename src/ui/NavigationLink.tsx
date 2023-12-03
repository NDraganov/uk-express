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
          className="rounded-md px-5 py-1 font-medium ring-1 ring-slate-300 hover:ring-offset-1"
          onClick={onClick}
        >
          <NavLink to={to}>{title}</NavLink>
        </button>
      </li>
    );
  } else {
    return (
      <button className="my-1 text-sm text-slate-800 underline">
        <NavLink to={to}>{title}</NavLink>
      </button>
    );
  }
}
