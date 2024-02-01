import { NavLink } from "react-router-dom";

export default function DiscountedButton() {
  return (
    <button
      className="mt-4 rounded-full px-4 py-2 ring ring-red-600 hover:ring-offset-2 dark:hover:ring-offset-slate-900"
      title="Sale products"
    >
      <NavLink
        className="font-medium text-red-600 hover:font-bold sm:text-2xl"
        to="/products/sale"
      >
        Products on sale
      </NavLink>
    </button>
  );
}
