import { NavLink } from "react-router-dom";

interface AuthHeaderButtonProps {
  to: string;
  title: string;
}

export default function AuthHeaderButton({ to, title }: AuthHeaderButtonProps) {
  return (
    <button className="font-normal hover:text-orange-500 dark:hover:text-cyan-300">
      <NavLink to={to}>{title}</NavLink>
    </button>
  );
}
