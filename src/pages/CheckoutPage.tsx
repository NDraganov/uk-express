import Payment from "../features/checkout/Payment";
import CartPage from "../features/checkout/CartPage";

export default function CheckoutPage() {
  return (
    <main className="my-10 mx-32">
      <h1 className="text-4xl">Checkout</h1>
      <div className="flex items-center justify-center gap-40 w-full mt-10">
        <CartPage />
        <Payment />
      </div>
    </main>
  );
}
