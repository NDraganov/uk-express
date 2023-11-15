interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="rounded-full border border-orange-400 px-5 py-1 mt-2 mb-2 hover:bg-orange-300"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
