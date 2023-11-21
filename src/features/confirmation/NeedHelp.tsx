import NavigationLink from "../../ui/NavigationLink";

export default function NeedHelp() {
  return (
    <section>
      <h4>NEED HELP?</h4>
      <div>
        <NavigationLink to="/policies" title="Delivery" />
        <NavigationLink to="/policies" title="Return & Refund" />
        <NavigationLink to="/policies" title="Order & Payment" />
        <NavigationLink to="/policies" title="Promotions & Vouchers" />
      </div>
    </section>
  );
}
