import { NavLink } from "react-router-dom";
import shopOptions from "../../data/FooterShop.json";

export default function ShopLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-lg dark:text-slate-200">SHOP</h5>
      <div className="flex flex-col">
        {shopOptions.map((option) => (
          <NavLink to={option.path}>{option.title}</NavLink>
        ))}
      </div>
    </div>
  );
}
