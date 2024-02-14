import ShippingForm from "./ShippingForm";

export default function Shipping() {
  return (
    <section>
      <div className="my-6 flex items-center justify-center gap-4">
        <hr className="w-1/3 border border-slate-300 dark:border-gray-500" />
        <p className="text-xs text-slate-400 dark:text-gray-400 sm:text-sm">
          Or pay with card
        </p>
        <hr className="w-1/3 border border-slate-300 dark:border-gray-500" />
      </div>
      <p className="my-4 font-medium dark:text-white">Shipping information</p>
      <ShippingForm />
    </section>
  );
}
