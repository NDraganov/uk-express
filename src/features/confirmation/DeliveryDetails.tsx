import { useAppSelector } from "../../store/hooks";

export default function DeliveryDetails() {
  const {
    items: cartItems,
    isStandard,
    standardDays,
    expressDays,
  } = useAppSelector((state) => state.cart);

  return (
    <section className="my-6">
      <div className="w-2/3 rounded-md border border-slate-300 p-4 shadow-md dark:border-gray-500">
        <h3 className="font-medium dark:text-white">DELIVERY DETAILS</h3>
        <ul className="my-2 grid gap-2 md:grid-cols-5">
          {cartItems.map((item) => (
            <li
              className="flex items-center justify-center rounded-md border border-slate-300 py-1"
              key={item.id}
            >
              <img className="w-14" src={item.thumbnail} alt={item.title} />
            </li>
          ))}
        </ul>
        <p>
          Your order will be delivered in (
          {isStandard ? standardDays : expressDays}) days by{" "}
          <span className="font-medium text-red-700">Royal Mail</span>
        </p>
      </div>
      <p className="mt-2 font-light text-slate-600 dark:text-gray-400">
        Track and trace details will be sent to your email upon shipment.
      </p>
    </section>
  );
}
