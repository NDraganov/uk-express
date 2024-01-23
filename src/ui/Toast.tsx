import Icon from "./Icon";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";

interface ToastProps {
  type: string;
}

export default function Toast({ type }: ToastProps) {
  return (
    <div>
      <div>
        <Icon value={{ className: "" }}>
          {type === "addProduct" && <BsFillCartPlusFill />}
          {type === "deleteProduct" && <BsCartDashFill />}
        </Icon>
      </div>
      <div>
        {type === "addProduct" && <p>Product added!</p>}
        {type === "deleteProduct" && <p>Product deleted!</p>}
      </div>
      <div>
        <Icon value={{ className: "" }}>
          <AiOutlineClose />
        </Icon>
      </div>
    </div>
  );
}
