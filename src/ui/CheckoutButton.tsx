import { NavLink } from "react-router-dom";

export default function CheckoutButton() {
  return (
    <button className="rounded-full mt-2  border border-orange-500 px-5 py-1 mb-2 hover:bg-orange-500 hover:text-black">
      <NavLink to="/checkout">Checkout</NavLink>
    </button>
  );
}
