import NavigationLink from "../../ui/NavigationLink";

export default function NeedHelp() {
  return (
    <section className="my-6">
      <h4 className="text-sm font-semibold text-slate-600">NEED HELP?</h4>
      <div className="flex items-start justify-between flex-col gap-2 mt-2">
        <NavigationLink to="/policies" title="Delivery" />
        <NavigationLink to="/policies" title="Return & Refund" />
        <NavigationLink to="/policies" title="Order & Payment" />
        <NavigationLink to="/policies" title="Promotions & Vouchers" />
      </div>
    </section>
  );
}
