import { useAppDispatch } from "../../../store/hooks";
import { closeMobileMenu } from "../mobileMenuSlice";
import Icon from "../../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";

export default function CloseButton() {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(closeMobileMenu())}>
      <Icon
        value={{
          className: "text-2xl fill-slate-100 hover:fill-black",
        }}
      >
        <AiOutlineClose />
      </Icon>
    </button>
  );
}
