import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeModal, openModalTimer } from "./newsSlice";

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
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex scroll-m-0 items-center justify-center bg-white/60">
          <div className="text-3xl text-red-600">
            <h1>Modal</h1>
            <p>vygbuhvyctvygbhnjhbgvyftcdrtfvygbhnj</p>
            <button onClick={() => dispatch(closeModal())}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
