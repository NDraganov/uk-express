import Icon from "./Icon";
import { BsTrash3 } from "react-icons/bs";

interface DeleteButtonProps {
  onDelete: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <button title="Delete" onClick={onDelete}>
      <Icon
        value={{
          className:
            "fill-black dark:fill-cyan-500 hover:fill-orange-500 dark:hover:fill-cyan-300",
        }}
      >
        <BsTrash3 />
      </Icon>
    </button>
  );
}
