import { type ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import Icon from "../../ui/Icon";

type PolicyNavLinkProps = {
  title: string;
  to: string;
  icon: ReactNode;
} & NavLinkProps;

export default function PolicyNavLink({
  title,
  to,
  icon,
  ...restProps
}: PolicyNavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-lg " : "text-lg")}
      to={to}
      {...restProps}
    >
      {({ isActive }) => (
        <li
          className={`flex items-center justify-center gap-2 rounded-t-xl px-4 pt-2 hover:bg-zinc-50 dark:hover:bg-slate-700 ${
            isActive
              ? "bg-zinc-100 dark:bg-slate-800 dark:text-cyan-500"
              : "dark:text-gray-300"
          }`}
        >
          <Icon value={{ className: isActive ? "fill-cyan-600" : "" }}>
            {icon}
          </Icon>
          <span>{title}</span>
        </li>
      )}
    </NavLink>
  );
}
