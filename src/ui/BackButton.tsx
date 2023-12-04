import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-full border border-white p-2 hover:border-black dark:border-slate-900 dark:hover:border-cyan-300"
      title="Back"
      onClick={() => navigate(-1)}
    >
      <IconContext.Provider
        value={{
          className:
            "text-lg fill-black dark:fill-cyan-500 dark:hover:fill-cyan-300",
        }}
      >
        <FaArrowLeft />
      </IconContext.Provider>
    </button>
  );
}
