import { ComponentPropsWithoutRef } from "react";

type FormButtonProps = {
  title: string;
  type: string;
} & ComponentPropsWithoutRef<"button">;

export default function FormButton({ title, type }: FormButtonProps) {
  if (type === "submit")
    return (
      <button
        className="rounded-sm border border-black bg-black px-16 py-2 text-xl text-slate-100 hover:bg-inherit hover:text-black"
        type={type}
        title={title}
      >
        {title}
      </button>
    );
  return (
    <button
      className="rounded-sm border border-black px-16 py-2 text-xl text-black hover:bg-black hover:text-slate-100"
      type={type}
      title={title}
    >
      {title}
    </button>
  );
}
