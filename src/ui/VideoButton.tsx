interface VideoButtonProps {
  title: string;
  onClick: () => void;
}

export default function VideoButton({ title, onClick }: VideoButtonProps) {
  return (
    <button
      className="rounded-full px-5 py-2 text-xl font-medium text-white ring ring-white hover:bg-white hover:text-black"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
