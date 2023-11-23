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
    <button className="" disabled={disabled} onClick={onSubmit}>
      {title}
    </button>
  );
}
