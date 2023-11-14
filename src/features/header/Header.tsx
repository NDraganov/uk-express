import { NavLink } from "react-router-dom";
import NavigationLink from "../../ui/NavigationLink";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-black px-3 py-2 text-slate-200">
      <h2 className="flex items-baseline text-2xl font-bold">
        <NavLink to="/">UkExpress</NavLink>
        <p className="text-base font-normal">.co.uk</p>
      </h2>
      <nav>
        <ul>
          <NavigationLink to="products" title="Products" />
        </ul>
      </nav>
      <button>Cart</button>
    </header>
  );
}
