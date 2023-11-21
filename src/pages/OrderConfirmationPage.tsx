import DeliveryDetails from "../features/confirmation/DeliveryDetails";
import NeedHelp from "../features/confirmation/NeedHelp";
import OrderSummary from "../features/confirmation/OrderSummary";

export default function OrderConfirmationPage() {
  return (
    <main>
      <div className="flex items-baseline justify-between my-16 mx-28">
        <div className="w-2/3">
          <h2 className="text-lg text-slate-700 font-medium">
            Hi (NAME), thank you for shopping with UkExpress!
          </h2>
          <h1 className="text-2xl font-semibold text-slate-900 my-2">
            YOUR ORDER WAS PLACED SUCCESSFULLY
          </h1>
          <p className="text-sm text-slate-600">Order number: (NUMBER)</p>
          <p className="text-base text-slate-600 my-2">
            We will send confirmation email to shortly
          </p>
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
