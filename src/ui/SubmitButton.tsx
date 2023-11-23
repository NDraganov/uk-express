interface SubmitButtonProps {
  title: string;
  onSubmit: () => void;
  disabled: boolean;
}

export default function SubmitButton({
  title,
  onSubmit,
  disabled,
}: SubmitButtonProps) {
  return (
    <button
      className="bg-orange-400 hover:bg-orange-500 py-2 px-10 my-4 text-slate-100 font-medium rounded-md"
      disabled={disabled}
      onClick={onSubmit}
    >
      {title}
    </button>
  );
}
