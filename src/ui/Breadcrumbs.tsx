import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      const capitalized = crumb.charAt(0).toUpperCase() + crumb.slice(1);
      return (
        <div className="last:text-orange-500" key={crumb}>
          <NavLink className="flex items-center" to={currentLink}>
            <p>{capitalized}</p>
            <Icon value={{ className: "text-lg" }}>
              <MdOutlineKeyboardArrowRight />
            </Icon>
          </NavLink>
        </div>
      );
    });

  return (
    <div className="my-24 ml-10 flex items-center gap-2">
      <Icon value={{ className: "text-lg" }}>
        <FaHome />
        <MdOutlineKeyboardArrowRight />
      </Icon>
      {crumbs}
    </div>
  );
}