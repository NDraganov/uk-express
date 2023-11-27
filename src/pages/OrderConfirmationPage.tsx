import { useAppSelector } from "../store/hooks";
import DeliveryDetails from "../features/confirmation/DeliveryDetails";
import NeedHelp from "../features/confirmation/NeedHelp";
import OrderSummary from "../features/confirmation/OrderSummary";
import Club from "../ui/Club";
import Icon from "../ui/Icon";
import { FaCheckCircle } from "react-icons/fa";

export default function OrderConfirmationPage() {
  const userName = useAppSelector((state) => state.auth.user?.email);

  return (
    <main>
      <div className="flex items-baseline justify-between my-16 mx-28">
        <div className="w-2/3">
          <h2 className="text-lg text-slate-700 font-medium">
            Hi ({userName}), thank you for shopping with UkExpress!
          </h2>
          <div className="border-2 border-green-500 rounded-md py-1 px-2 w-2/3 my-2 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-slate-900">
              YOUR ORDER WAS PLACED SUCCESSFULLY
            </h1>
            <Icon value={{ className: "fill-green-500" }}>
              <FaCheckCircle />
            </Icon>
          </div>
          <p className="text-sm text-slate-600">Order number: (NUMBER)</p>
          <p className="text-base text-slate-600 my-2">
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
