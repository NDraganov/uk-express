interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="mb-2 mt-2 rounded-sm px-5 py-1 text-slate-700 ring-1 ring-slate-700 hover:ring-orange-500 hover:ring-offset-1"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
