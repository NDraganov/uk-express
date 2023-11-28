import ShippingForm from "./ShippingForm";

export default function Shipping() {
  return (
    <section>
      <div className="flex items-center justify-center gap-4 my-6">
        <hr className="border border-slate-300 w-1/3" />
        <p className="text-slate-400 text-sm">Or pay with card</p>
        <hr className="border border-slate-300 w-1/3" />
      </div>
      <h3 className="font-medium text-slate-600 my-4">Shipping information</h3>
      <ShippingForm />
    </section>
  );
}
