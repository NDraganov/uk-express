import Icon from "./Icon";
import { BsApple } from "react-icons/bs";

interface PaymentButtonProps {
  title: string;
  onPayment: () => void;
}

export default function PaymentButton({
  title,
  onPayment,
}: PaymentButtonProps) {
  return (
    <button
      className="flex w-full items-center justify-center gap-4 rounded-md bg-black px-32 py-2 text-slate-300 dark:bg-white dark:text-black"
      title={title}
      onClick={onPayment}
    >
      <Icon value={{ className: "text-xl fill-white dark:fill-black " }}>
        <BsApple />
      </Icon>
      {title}
    </button>
  );
}
