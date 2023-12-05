import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Club() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/creators-club");
  }
  return (
    <div className="w-2/3 rounded-md border border-slate-300 p-4 shadow-md dark:border-gray-500">
      <h3 className="mb-2 font-medium text-lime-600 dark:text-cyan-500">
        JOIN OUR CREATORS CLUB TO EARN EXCLUSIVE REWARDS
      </h3>
      <Button title="Sign up for free" onClick={handleClick} />
    </div>
  );
}
