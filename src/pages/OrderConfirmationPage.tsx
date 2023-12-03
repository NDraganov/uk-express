import { useAppSelector } from "../store/hooks";
import DeliveryDetails from "../features/confirmation/DeliveryDetails";
import NeedHelp from "../features/confirmation/NeedHelp";
import OrderSummary from "../features/confirmation/OrderSummary";
import Club from "../ui/Club";
import Icon from "../ui/Icon";
import { FaCheckCircle } from "react-icons/fa";

export default function OrderConfirmationPage() {
  const user = useAppSelector((state) => state.auth.user);

  const userName = user?.user_metadata.firstName.toUpperCase();

  return (
    <main className="mx-28 my-40">
      <div className="flex items-baseline justify-between">
        <div className="w-2/3">
          <h2 className="text-lg font-medium text-slate-700">
            Hi <span className="font-semibold">{userName}</span>, thank you for
            shopping with UkExpress!
          </h2>
          <div className="my-2 flex w-2/3 items-center justify-between rounded-md border-2 border-green-500 px-2 py-1">
            <h1 className="text-2xl font-semibold text-slate-900">
              YOUR ORDER WAS PLACED SUCCESSFULLY
            </h1>
            <Icon value={{ className: "fill-green-500" }}>
              <FaCheckCircle />
            </Icon>
          </div>
          <p className="text-sm text-slate-600">Order number: (NUMBER)</p>
          <p className="my-2 text-base text-slate-600">
            We will send confirmation email to shortly
          </p>
          <Club />
          <DeliveryDetails />
        </div>
        <div className="w-1/3">
          <OrderSummary />
          <NeedHelp />
        </div>
      </div>
    </main>
  );
}
