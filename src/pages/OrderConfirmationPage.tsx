import DeliveryDetails from "../features/confirmation/DeliveryDetails";
import NeedHelp from "../features/confirmation/NeedHelp";
import OrderSummary from "../features/confirmation/OrderSummary";

export default function OrderConfirmationPage() {
  return (
    <main>
      <h1>Hi (NAME), thank you for shopping with UkExpress!</h1>
      <h2>YOUR ORDER WAS PLACED SUCCESSFULLY</h2>
      <p>We will send confirmation email to shortly</p>
      <OrderSummary />
      <DeliveryDetails />
      <NeedHelp />
    </main>
  );
}
