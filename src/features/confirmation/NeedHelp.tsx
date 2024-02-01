import NavigationLink from "../header/categories-nav/NavigationLink";

export default function NeedHelp() {
  return (
    <section className="my-6">
      <p className="text-sm font-semibold text-black dark:text-white">
        NEED HELP?
      </p>
      <div className="mt-2 flex flex-col items-start justify-between gap-2">
        <NavigationLink to="/policies" title="Delivery" />
        <NavigationLink to="/policies" title="Return & Refund" />
        <NavigationLink to="/policies" title="Order & Payment" />
        <NavigationLink to="/policies" title="Promotions & Vouchers" />
      </div>
    </section>
  );
}
