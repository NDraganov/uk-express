import { useAppSelector } from "../../store/hooks";

export default function DeliveryDetails() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <section className="my-6">
      <div className="w-2/3 border border-slate-300 p-4 text-slate-700 rounded-md">
        <h3 className="font-semibold">DELIVERY DETAILS</h3>
        <ul className="grid md:grid-cols-5 my-2 gap-2">
          {cartItems.map((item) => (
            <li
              className="border border-slate-300 rounded-md flex items-center justify-center py-1"
              key={item.id}
            >
              <img className="w-14" src={item.image} alt={item.title} />
            </li>
          ))}
        </ul>
        <p>
          Your order will be delivered in (Number) days by{" "}
          <span className="text-red-700 font-medium">Royal Mail</span>
        </p>
      </div>
      <p className="mt-2 text-slate-600">
        Track and trace details will be sent to your email upon shipment.
      </p>
    </section>
  );
}
