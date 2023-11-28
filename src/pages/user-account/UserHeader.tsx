import { useAppSelector } from "../../store/hooks";

export default function UserHeader() {
  const user = useAppSelector((state) => state.auth.user);
  const userName = user?.user_metadata.fullName.toUpperCase();
  return (
    <header className="flex items-center justify-start gap-5 border-b-2 border-gray-200 p-10">
      <img
        className="w-12"
        src="/default-user.jpg"
        alt={user?.user_metadata.fullName}
      />
      <h1 className="space-x-10 text-4xl font-thin">HELLO {userName}</h1>
    </header>
  );
}
