import { NavLink } from "react-router-dom";
import shopOptions from "../../../data/FooterShop.json";

export default function ShopLinks() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-medium text-slate-200 dark:text-slate-200">
        SHOP
      </p>

      <div className="flex flex-col">
        {shopOptions.map((option) => (
          <NavLink
            className="hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-100"
            key={option.title}
            to={option.path}
          >
            {option.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
