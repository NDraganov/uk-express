import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Club() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/creators-club");
  }
  return (
    <div className="border border-slate-300 rounded-md w-2/3 p-4 shadow-md">
      <h3 className="text-slate-700 font-semibold mb-2">
        JOIN OUR CREATORS CLUB TO EARN EXCLUSIVE REWARDS
      </h3>
      <Button title="Sign up for free" onClick={handleClick} />
    </div>
  );
}
