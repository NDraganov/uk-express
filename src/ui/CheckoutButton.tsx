import { NavLink } from "react-router-dom";

export default function CheckoutButton() {
  return (
    <button className="rounded-full ring-1 ring-slate-700 px-5 py-1 mt-2 mb-2 hover:ring-offset-1 hover:ring-orange-500 text-slate-700">
      <NavLink to="/checkout">Checkout</NavLink>
    </button>
  );
}
