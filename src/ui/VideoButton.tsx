interface VideoButtonProps {
  title: string;
  onClick: () => void;
}

export default function VideoButton({ title, onClick }: VideoButtonProps) {
  return (
    <button
      className="mt-4 rounded-full px-5 py-2 font-medium text-white ring ring-white hover:bg-white hover:text-black sm:mt-0 sm:text-xl"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
