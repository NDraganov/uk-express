import { useAppDispatch } from "../../../store/hooks";
import { closeSearchModal } from "./searchSlice";
import SearchBar from "./SearchBar";

export default function SearchModal() {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-white/50">
      <div>
        <button onClick={() => dispatch(closeSearchModal())}>X</button>
        <SearchBar />
      </div>
    </div>
  );
}
