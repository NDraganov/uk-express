import CartDetails from "../features/checkout/CartDetails";
import Payment from "../features/checkout/Payment";
import BackButton from "../ui/BackButton";

export default function CheckoutPage() {
  return (
    <main className="my-10 mx-32">
      <div className="flex items-center gap-5">
        <BackButton />
        <h1 className="text-4xl text-slate-700">Checkout</h1>
      </div>
      <div className="flex items-baseline justify-center gap-40 w-full mt-10">
        <CartDetails />
        <Payment />
      </div>
    </main>
  );
}
