interface SubmitButtonProps {
  title: string;
  disabled: boolean;
}

export default function SubmitButton({ title, disabled }: SubmitButtonProps) {
  return (
    <button
      className="bg-orange-400 hover:bg-orange-500 py-2 px-10 my-4 text-slate-100 font-medium rounded-md"
      type="submit"
      disabled={disabled}
    >
      {title}
    </button>
  );
}
