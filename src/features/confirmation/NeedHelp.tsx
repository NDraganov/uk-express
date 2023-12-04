import NavigationLink from "../../ui/NavigationLink";

export default function NeedHelp() {
  return (
    <section className="my-6">
      <h4 className="text-sm font-semibold text-black dark:text-gray-500">
        NEED HELP?
      </h4>
      <div className="mt-2 flex flex-col items-start justify-between gap-2">
        <NavigationLink to="/policies" title="Delivery" />
        <NavigationLink to="/policies" title="Return & Refund" />
        <NavigationLink to="/policies" title="Order & Payment" />
        <NavigationLink to="/policies" title="Promotions & Vouchers" />
      </div>
    </section>
  );
}
