import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeSearchModal } from "./searchSlice";
import SearchBar from "./SearchBar";
import Icon from "../../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";

export default function SearchModal() {
  const { input } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/40 dark:bg-white/20">
      <div className="flex h-screen items-start justify-center pt-20">
        <div
          className={`mx-4 w-full rounded-md bg-white p-4 dark:bg-slate-900 sm:mx-0 ${
            input ? "sm:w-4/5" : "sm:w-2/5"
          }`}
        >
          <div className="flex justify-end">
            <button
              onClick={() => dispatch(closeSearchModal())}
              title="Close search"
            >
              <Icon
                value={{
                  className:
                    "text-2xl fill-slate-600 hover:fill-slate-400 dark:fill-white dark:hover:fill-gray-400",
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
