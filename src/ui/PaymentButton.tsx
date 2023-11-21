import { type ReactNode } from "react";

interface PaymentButtonProps {
  children: ReactNode;
  onPayment: () => void;
}

export default function PaymentButton({
  children,
  onPayment,
}: PaymentButtonProps) {
  return (
    <button
      className="bg-black text-slate-300 w-full rounded-md py-2 px-32"
      onClick={onPayment}
    >
      {children}
    </button>
  );
}
