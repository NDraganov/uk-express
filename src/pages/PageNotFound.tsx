import { useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import Button from "../ui/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <BackButton />
      <div className="mx-4 flex h-screen flex-col items-center justify-center sm:mx-0">
        <p className="text-5xl font-bold text-red-500">404</p>
        <p className="my-3 text-4xl dark:text-white">Page not found!</p>
        <h1 className="my-2 text-slate-500 dark:text-gray-400">
          Please double check your url address or visit our Home page
        </h1>
        <Button title="Home" onClick={() => navigate("/")} />
      </div>
    </main>
  );
}
