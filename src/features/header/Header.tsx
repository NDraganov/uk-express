import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavigationLink from "../../ui/NavigationLink";
import Cart from "../cart/Cart";

export default function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  function handleOpenCart() {
    setIsCartVisible(true);
  }

  function handleCloseCart() {
    setIsCartVisible(false);
  }
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
      <button onClick={handleOpenCart}>Cart</button>
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </header>
  );
}
