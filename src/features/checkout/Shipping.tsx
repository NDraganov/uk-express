import ShippingForm from "./ShippingForm";

export default function Shipping() {
  return (
    <section>
      <p className="flex items-center justify-center gap-4 mt-6 w-full text-slate-400 text-sm">
        <hr className="border border-slate-300 w-1/3" />
        Or pay with card
        <hr className="border border-slate-300 w-1/3" />
      </p>
      <h3 className="font-medium text-slate-600 my-4">Shipping information</h3>
      <ShippingForm />
    </section>
  );
}
