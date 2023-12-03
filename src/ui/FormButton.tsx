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
        className={`rounded-full border border-black bg-${
          isError ? "red-600" : "black"
        } my-4 px-16 py-2 text-base text-slate-100 hover:bg-inherit hover:text-black`}
        type={type}
        title={title}
        {...restProps}
      >
        {isLoading ? <Spinner /> : title}
      </button>
    );
  return (
    <button
      className={`rounded-full border bg-${
        isError ? "red-600" : "inherit"
      } my-4 border-black px-16 py-2 text-base text-black hover:bg-black hover:text-slate-100`}
      type={type}
      title={title}
      {...restProps}
    >
      {isLoading ? <Spinner /> : title}
    </button>
  );
}
