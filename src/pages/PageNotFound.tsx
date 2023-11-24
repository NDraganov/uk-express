import { useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import Button from "../ui/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <main>
      <BackButton />
      <div className="flex items-center justify-center flex-col h-screen">
        <p className="text-5xl text-red-500 font-bold">404</p>
        <h1 className="text-4xl text-slate-900 my-3">Page not found!</h1>
        <p className="text-slate-500 my-2">
          Please double check your Url or visit our Home page
        </p>
        <Button title="Home" onClick={handleClick} />
      </div>
    </main>
  );
}
