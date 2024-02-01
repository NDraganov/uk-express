import { useAppDispatch } from "../../../store/hooks";
import { closeMobileMenu } from "../mobileMenuSlice";
import Icon from "../../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";

export default function CloseButton() {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(closeMobileMenu())} title="Close menu">
      <Icon
        value={{
          className:
            "text-2xl fill-black hover:fill-gray-500 dark:fill-slate-200 dark:hover:fill-white",
        }}
      >
        <AiOutlineClose />
      </Icon>
    </button>
  );
}
