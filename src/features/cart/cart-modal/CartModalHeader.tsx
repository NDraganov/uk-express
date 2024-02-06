import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeCart } from "../cartSlice";
import Icon from "../../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";

export default function CartModalHeader() {
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const subtotalPrice = cartItems.reduce(
    (value, item) => value + Number(item.price) * item.quantity,
    0,
  );
  const formattedSubtotalPrice = Number(subtotalPrice.toFixed(2));
  const priceAwayFromShipping = 100 - formattedSubtotalPrice;

  return (
    <>
      <div className="flex w-full items-start justify-between dark:border-gray-500">
        <p className="pb-2 text-lg font-medium dark:text-white">My Cart</p>
        <button onClick={() => dispatch(closeCart())} title="Close cart">
          <Icon
            value={{
              className:
                "text-lg fill-black hover:fill-orange-500 dark:fill-white dark:hover:fill-cyan-300",
            }}
          >
            <AiOutlineClose />
          </Icon>
        </button>
      </div>
      {cartItems.length === 0 && formattedSubtotalPrice === 0 ? (
        <p className="text-sm font-light">
          You are £100.00 away from Free shipping
        </p>
      ) : (
        ""
      )}

      {cartItems.length > 0 && formattedSubtotalPrice >= 100 ? (
        <p className="text-sm font-light">
          🎉 Congrats! You've unlock <strong>FREE SHIPPING!</strong>{" "}
        </p>
      ) : (
        ""
      )}

      {formattedSubtotalPrice < 100 && formattedSubtotalPrice > 0 ? (
        <p className="text-sm font-light">
          You are <span>£{priceAwayFromShipping}.00</span> away from Free
          shipping
        </p>
      ) : (
        ""
      )}
    </>
  );
}
