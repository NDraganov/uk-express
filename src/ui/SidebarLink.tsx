import { NavLink, type NavLinkProps } from "react-router-dom";
import Icon from "./Icon";
import { MdArrowForwardIos } from "react-icons/md";

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
    <li className="text-1xl w-full py-6 pl-10 pr-4 font-bold text-zinc-400">
      <NavLink
        className={({ isActive }) => (isActive ? " text-black" : "")}
        to={to}
        {...restProps}
      >
        {({ isActive }) => (
          <div className="flex w-full items-center justify-between">
            <span>{title}</span>
            <Icon value={{ className: isActive ? "fill-black" : "hidden" }}>
              <MdArrowForwardIos />
            </Icon>
          </div>
        )}
      </NavLink>
    </li>
  );
}
