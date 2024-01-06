import { useAppSelector } from "../store/hooks";
import { type ComponentPropsWithoutRef } from "react";

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
        } my-4 px-16 py-2 text-base text-slate-100 hover:bg-inherit hover:text-black dark:bg-cyan-500 dark:text-black dark:hover:border-cyan-300 dark:hover:bg-slate-900 dark:hover:text-cyan-300`}
        type={type}
        title={title}
        {...restProps}
      >
        {isLoading ? (
          <div className="flex items-center justify-between gap-2">
            <span>Processing...</span>
          </div>
        ) : (
          title
        )}
      </button>
    );
  return (
    <button
      className={`rounded-full border bg-${
        isError ? "red-600" : "inherit"
      } my-4 border-black px-16 py-2 text-base text-black hover:bg-black hover:text-slate-100 dark:border-cyan-500 dark:text-cyan-500 dark:hover:border-cyan-300 dark:hover:bg-slate-900 dark:hover:text-cyan-300`}
      type={type}
      title={title}
      {...restProps}
    >
      {isLoading ? (
        <div className="flex items-center justify-between gap-2">
          <span>Processing...</span>
        </div>
      ) : (
        title
      )}
    </button>
  );
}
