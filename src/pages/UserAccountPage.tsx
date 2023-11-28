import { useAppSelector } from "../store/hooks";

export default function UserAccountPage() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <main className="min-h-screen">
      <h1>User account page</h1>
      <div className="mx-28 my-20">
        <img
          className="w-64"
          src="/default-user.jpg"
          alt={user?.user_metadata.fullName}
        />
        <p>{user?.user_metadata.fullName}</p>
        <p>{user?.email}</p>
      </div>
    </main>
  );
}
