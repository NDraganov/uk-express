import { NavLink } from "react-router-dom";

interface AuthHeaderButtonProps {
  to: string;
  title: string;
}

export default function AuthHeaderButton({ to, title }: AuthHeaderButtonProps) {
  return (
    <a className="text-slate-100 font-medium hover:text-orange-500">
      <NavLink to={to}>{title}</NavLink>
    </a>
  );
}
