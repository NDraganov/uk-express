import { NavLink, type NavLinkProps } from "react-router-dom";

type SidebarLinkProps = {
  to: string;
  title: string;
} & NavLinkProps;

export default function SidebarLink({
  to,
  title,
  ...restProps
}: SidebarLinkProps) {
  return (
    <li className="text-1xl flex w-full items-center justify-start border-b-2 border-gray-200 pl-10 font-bold text-gray-400">
      <NavLink
        className={({ isActive }) => (isActive ? "text-black" : "")}
        to={to}
        {...restProps}
      >
        {title}
      </NavLink>
    </li>
  );
}
