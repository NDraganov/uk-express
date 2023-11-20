import Payment from "../features/checkout/Payment";
import CartDetails from "../features/checkout/CartDetails";

export default function CheckoutPage() {
  return (
    <main className="my-10 mx-32">
      <h1 className="text-4xl text-slate-700">Checkout</h1>
      <div className="flex items-baseline justify-center gap-40 w-full mt-10">
        <CartDetails />
        <Payment />
      </div>
    </main>
  );
}
