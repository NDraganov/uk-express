import { useAppSelector } from "../store/hooks";
import { Spinner } from "flowbite-react";

interface SubmitButtonProps {
  title: string;
  disabled: boolean;
}

export default function SubmitButton({ title, disabled }: SubmitButtonProps) {
  const { isLoading, isError } = useAppSelector((state) => state.auth);
  return (
    <button
      className={`bg-${
        isError ? "red-600" : "orange-600"
      } my-4 rounded-md px-10 py-2 font-medium text-slate-100 hover:bg-orange-500`}
      type="submit"
      disabled={disabled}
    >
      {isLoading ? <Spinner /> : title}
    </button>
  );
}
