import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function BackButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <button className="" title="Back" onClick={handleClick}>
      <IconContext.Provider
        value={{ className: "text-lg fill-slate-500 hover:fill-slate-900" }}
      >
        <FaArrowLeft />
      </IconContext.Provider>
    </button>
  );
}
