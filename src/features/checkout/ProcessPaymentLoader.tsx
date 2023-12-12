import { useAppSelector } from "../../store/hooks";
import Icon from "../../ui/Icon";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";

export default function ProcessPaymentLoader() {
  const { isProcessed } = useAppSelector((state) => state.cart);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-white/50 dark:bg-white/60">
      <div className="flex h-full items-center justify-center">
        <div className="flex h-96 w-[40rem] flex-col items-center justify-center gap-7 rounded-md bg-violet-950">
          <div className="animate-ping rounded-full bg-pink-500 p-2">
            <div className="rounded-full bg-violet-950 p-4">
              <Icon value={{ className: "text-7xl fill-pink-500" }}>
                {isProcessed ? <IoShieldCheckmark /> : <RiSecurePaymentFill />}
              </Icon>
            </div>
          </div>
          <h1 className="pt-10 text-3xl text-white">
            {isProcessed ? "Payment successful!" : "Processing your payment..."}
          </h1>
        </div>
      </div>
    </div>
  );
}
