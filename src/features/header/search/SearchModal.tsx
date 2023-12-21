import { useAppDispatch } from "../../../store/hooks";
import { closeSearchModal } from "./searchSlice";
import SearchBar from "./SearchBar";
import Icon from "../../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";

export default function SearchModal() {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/50 dark:bg-white/30">
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white p-4 dark:bg-slate-900 sm:h-3/5 sm:w-3/5">
          <div className="flex justify-end">
            <button onClick={() => dispatch(closeSearchModal())}>
              <Icon
                value={{
                  className: "text-2xl fill-slate-400 hover:fill-white",
                }}
              >
                <AiOutlineClose />
              </Icon>
            </button>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
