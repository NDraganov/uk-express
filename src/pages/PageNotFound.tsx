import { useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import Button from "../ui/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <main className="my-40">
      <BackButton />
      <div className="flex h-screen flex-col items-center justify-center">
        <p className="text-5xl font-bold text-red-500">404</p>
        <h1 className="my-3 text-4xl text-slate-900">Page not found!</h1>
        <p className="my-2 text-slate-500">
          Please double check your Url or visit our Home page
        </p>
        <Button title="Home" onClick={handleClick} />
      </div>
    </main>
  );
}
