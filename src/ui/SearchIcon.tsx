import { useAppDispatch } from "../store/hooks";
import { IoIosSearch } from "react-icons/io";
import Icon from "./Icon";
import { showSearchModal } from "../features/header/search/searchSlice";

export default function SearchIcon() {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(showSearchModal())}>
      <Icon
        value={{
          className: "text-xl hover:fill-slate-400 dark:hover:fill-cyan-300",
        }}
      >
        <IoIosSearch />
      </Icon>
    </button>
  );
}
