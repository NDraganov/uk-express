import { type CartItem } from "./cartSlice";

export default function CartItem(item: CartItem) {
  return (
    <div className="mb-2 flex w-full items-center justify-between">
      <div>
        <span>{item.title}</span>
        <span className="font-semibold"> ({item.price})</span>
      </div>
      <div>
        <span>{item.quantity}</span>
      </div>
    </div>
  );
}
