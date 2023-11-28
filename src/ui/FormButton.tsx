import { useAppSelector } from "../store/hooks";
import { type ComponentPropsWithoutRef } from "react";
import { Spinner } from "flowbite-react";

type FormButtonProps = {
  title: string;
  type: string;
} & ComponentPropsWithoutRef<"button">;

export default function FormButton({
  title,
  type,
  ...restProps
}: FormButtonProps) {
  const { isLoading, isError } = useAppSelector((state) => state.auth);
  if (type === "submit")
    return (
      <button
        className={`rounded-sm border border-black bg-${
          isError ? "red-600" : "black"
        } px-16 py-2 text-xl text-slate-100 hover:bg-inherit hover:text-black`}
        type={type}
        title={title}
        {...restProps}
      >
        {isLoading ? <Spinner /> : title}
      </button>
    );
  return (
    <button
      className={`rounded-sm border bg-${
        isError ? "red-600" : "inherit"
      } border-black px-16 py-2 text-xl text-black hover:bg-black hover:text-slate-100`}
      type={type}
      title={title}
      {...restProps}
    >
      {isLoading ? <Spinner /> : title}
    </button>
  );
}
