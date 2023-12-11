import { useAppSelector } from "../store/hooks";
import CartDetails from "../features/checkout/CartDetails";
import Payment from "../features/checkout/Payment";
import BackButton from "../ui/BackButton";

export default function CheckoutPage() {
  const { isLoading } = useAppSelector((state) => state.cart);

  return (
    <main className="mx-32 my-40">
      {isLoading ? (
        <p className="flex min-h-screen items-center justify-center text-5xl text-red-500">
          Loading...
        </p>
      ) : (
        <>
          <div className="flex flex-col items-start gap-5">
            <BackButton />
            <h1 className="text-4xl dark:text-white">Checkout</h1>
          </div>
          <div className="mt-10 flex w-full items-baseline justify-center gap-40">
            <CartDetails />
            <Payment />
          </div>
        </>
      )}
    </main>
  );
}
