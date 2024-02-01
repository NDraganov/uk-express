interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="my-2 rounded-full bg-white px-5 py-1 text-sm ring-1 ring-black hover:ring-orange-500 hover:ring-offset-1 hover:ring-offset-white dark:bg-slate-900 dark:text-white dark:ring-cyan-500 dark:hover:text-cyan-300 dark:hover:ring-cyan-300 dark:hover:ring-offset-gray-800"
      title={title}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
