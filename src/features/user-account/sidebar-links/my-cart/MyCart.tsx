import { useAppSelector } from "../../../../store/hooks";
import { useNavigate } from "react-router-dom";
import CartDetails from "../../../checkout/CartDetails";
import CheckoutButton from "../../../../ui/CheckoutButton";
import Button from "../../../../ui/Button";

export default function MyCart() {
  const user = useAppSelector((state) => state.auth.user);
  const cartItems = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();

  function handleShopping() {
    navigate("/all-products");
  }
  return (
    <div className="min-h-screen">
      {cartItems.length === 0 ? (
        <div className="mt-24 flex h-full flex-col items-center justify-center">
          <p className="mb-4 text-2xl">
            <span>{user?.user_metadata.firstName}</span>, your cart is empty!
          </p>
          <Button title="Start shopping" onClick={handleShopping} />
        </div>
      ) : (
        <div className="mt-24 flex h-full flex-col items-center justify-center">
          <CartDetails />
          <div className="mt-8 w-3/6 text-right">
            <CheckoutButton />
          </div>
        </div>
      )}
    </div>
  );
}
