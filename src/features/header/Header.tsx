import { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../../ui/Input";
import CartModal from "../cart/CartModal";
import CartBadge from "../../ui/CartBadge";
import { IconContext } from "react-icons";
import { IoIosSearch } from "react-icons/io";

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
      <IconContext.Provider value={{ className: "text-[1.5rem]" }}>
        <div className="flex items-center">
          <Input />
          <div className="rounded-r-md bg-orange-600 p-1">
            <IoIosSearch />
          </div>
        </div>
      </IconContext.Provider>

      <CartBadge onOpen={handleOpenCart} />

      {isCartVisible && <CartModal onClose={handleCloseCart} />}
    </header>
  );
}
