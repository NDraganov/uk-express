import Icon from "../../../ui/Icon";
import { BsArrowUpSquare } from "react-icons/bs";

export default function ButtonToTop() {
  return (
    <button title="To the top" onClick={() => window.scrollTo(0, 0)}>
      <Icon
        value={{
          className:
            "text-2xl hover:fill-orange-500 hover:dark:fill-gray-400 dark:fill-slate-200",
        }}
      >
        <BsArrowUpSquare />
      </Icon>
    </button>
  );
}
