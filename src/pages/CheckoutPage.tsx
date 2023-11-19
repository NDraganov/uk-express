import CartPage from "./CartPage";

export default function CheckoutPage() {
  return (
    <main>
      <div>
        <h1>Checkout</h1>
        <div className="flex items-center">
          <div>
            <CartPage />
          </div>
          <div>Payment details</div>
        </div>
      </div>
    </main>
  );
}
