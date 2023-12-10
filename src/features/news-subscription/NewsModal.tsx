import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeModal, openModalTimer } from "./newsSlice";
import Icon from "../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export default function NewsModal() {
  const { isOpen } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  useEffect(
    function () {
      const timer = setTimeout(() => {
        dispatch(openModalTimer());
      }, 3000);
      return () => clearTimeout(timer);
    },
    [dispatch],
  );

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex scroll-m-0 items-center justify-center bg-white/50">
          <div className="flex h-96 w-[40rem] flex-col rounded-md bg-violet-950 p-4 text-white">
            <div className="flex items-center justify-end">
              <button onClick={() => dispatch(closeModal())}>
                <Icon
                  value={{
                    className: "text-2xl fill-slate-400 hover:fill-white",
                  }}
                >
                  <AiOutlineClose />
                </Icon>
              </button>
            </div>

            <div className="flex flex-col items-start justify-center px-10">
              <h2 className="py-4 text-[4rem] font-extrabold leading-none">
                Never miss out on new products!
              </h2>
              <p className="pb-6 pr-28 text-lg text-indigo-300">
                Subscribe for our newsletter to be inform whenever we offer new
                products!
              </p>
              <div className="flex items-center rounded-md px-2 ring-4 ring-pink-500 ">
                <input
                  className="rounded-l-md border-0 bg-violet-950 placeholder:text-white focus:ring-0"
                  type="email"
                  placeholder="Email"
                />
                <div>
                  <Icon value={{ className: "text-xl" }}>
                    <FiSend />
                  </Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
