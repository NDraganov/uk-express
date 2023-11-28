import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  title: string;
}

export default function SidebarLink({ to, title }: SidebarLinkProps) {
  return (
    <li className="text-1xl flex w-full items-center justify-start border-b-2 border-gray-200 pl-10 font-bold text-gray-400">
      <NavLink to={to}>{title}</NavLink>
    </li>
  );
}
