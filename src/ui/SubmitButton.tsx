import { Spinner } from "flowbite-react";
import { useAppSelector } from "../store/hooks";

interface SubmitButtonProps {
  title: string;
  disabled: boolean;
}

export default function SubmitButton({ title, disabled }: SubmitButtonProps) {
  const { isLoading, isError } = useAppSelector((state) => state.auth);
  return (
    <button
      className={`bg-${
        isError ? "red-600" : "orange-400"
      } hover:bg-orange-500 py-2 px-10 my-4 text-slate-100 font-medium rounded-md`}
      type="submit"
      disabled={disabled}
    >
      {isLoading ? <Spinner /> : title}
    </button>
  );
}
