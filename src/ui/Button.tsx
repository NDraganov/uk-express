interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="mb-2 mt-2 rounded-full px-5 py-1 ring-1 ring-black hover:ring-orange-500 hover:ring-offset-1 hover:ring-offset-white dark:text-white dark:ring-cyan-500 dark:hover:text-cyan-300 dark:hover:ring-cyan-300 dark:hover:ring-offset-gray-800"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
