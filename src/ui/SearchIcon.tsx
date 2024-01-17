import { useAppDispatch } from "../store/hooks";
import { IoIosSearch } from "react-icons/io";
import Icon from "./Icon";
import { showSearchModal } from "../features/header/search/searchSlice";

interface SearchIconProps {
  size: string;
}

export default function SearchIcon({ size }: SearchIconProps) {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(showSearchModal())}>
      <Icon
        value={{
          className: `${size} hover:fill-slate-400 dark:fill-slate-100 dark:hover:fill-cyan-300`,
        }}
      >
        <IoIosSearch />
      </Icon>
    </button>
  );
}
