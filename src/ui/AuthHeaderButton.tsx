import { NavLink } from "react-router-dom";

interface AuthHeaderButtonProps {
  to: string;
  title: string;
}

export default function AuthHeaderButton({ to, title }: AuthHeaderButtonProps) {
  return (
    <button className="font-light hover:text-sky-600">
      <NavLink to={to}>{title}</NavLink>
    </button>
  );
}
