import { type ReactNode } from "react";

interface PaymentButtonProps {
  children: ReactNode;
}

export default function PaymentButton({ children }: PaymentButtonProps) {
  return (
    <button className="bg-black text-slate-300 w-full rounded-md py-2 px-32">
      {children}
    </button>
  );
}
