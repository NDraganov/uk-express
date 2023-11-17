interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="rounded-full border border-orange-500 px-5 py-1 mt-2 mb-2 hover:bg-orange-500 hover:text-black"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
