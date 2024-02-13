import { useAppSelector } from "../store/hooks";
import CartDetails from "../features/checkout/CartDetails";
import Payment from "../features/checkout/Payment";
import BackButton from "../ui/BackButton";
import ProcessPaymentLoader from "../features/checkout/ProcessPaymentLoader";

export default function CheckoutPage() {
  const { isLoading } = useAppSelector((state) => state.cart);

  return (
    <main className="-mt-10 mb-10 sm:mx-32 sm:mt-0">
      {isLoading && <ProcessPaymentLoader />}

      <div className="flex items-start gap-5 pl-4 sm:flex-col sm:pl-0">
        <BackButton />
      </div>
      <div className="flex w-full flex-col items-baseline justify-center gap-10 sm:mt-10 sm:flex-row sm:gap-40">
        <CartDetails />
        <Payment />
      </div>
    </main>
  );
}
