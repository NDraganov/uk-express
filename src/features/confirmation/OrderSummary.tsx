import { useAppSelector } from "../../store/hooks";

export default function OrderSummary() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const shipping = useAppSelector((state) => state.cart.shipping);

  const totalPriceItems = cartItems.reduce(
    (value, item) => value + Number(item.price) * item.quantity,
    0,
  );
  const formattedTotalPriceItems = totalPriceItems.toFixed(2);
  const totalPriceWithShipping = totalPriceItems + shipping;
  const formattedTotalPriceWithShipping = totalPriceWithShipping.toFixed(2);

  return (
    <section className="w-full">
      <div className="rounded-md border border-slate-300 p-4 font-light shadow-md dark:border-gray-500">
        <p className="font-medium dark:text-white">ORDER SUMMARY</p>
        <p className="my-1 flex items-center justify-between">
          {cartItems.length} items{" "}
          <span className="font-normal">£{formattedTotalPriceItems}</span>
        </p>
        <p className="my-1 flex items-center justify-between">
          Subtotal{" "}
          <span className="font-normal">£{formattedTotalPriceItems}</span>
        </p>
        <p className="my-1 flex items-center justify-between">
          Shipping <span className="font-normal">£{shipping}</span>
        </p>

        <p className="my-1 flex items-center justify-between font-normal">
          Total{" "}
          <span className="text-red-700 dark:text-cyan-500">
            £{formattedTotalPriceWithShipping}
          </span>
        </p>
      </div>
    </section>
  );
}
