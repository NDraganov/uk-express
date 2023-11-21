import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addShipping } from "../features/cart/cartSlice";
import { IconContext } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

const standard = 5;
const express = 15;

interface ShippingMethodProps {
  type: "standard" | "express";
}

export default function DeliveryMethod({ type }: ShippingMethodProps) {
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useAppDispatch();

  function handleClick() {
    if (type === "standard") {
      setIsSelected((prevClick) => !prevClick);
      dispatch(addShipping(standard));
    }

    if (type === "express") {
      setIsSelected((prevClick) => !prevClick);
      dispatch(addShipping(express));
    }
  }

  if (type === "standard") {
    return (
      <button
        className={`border border-${
          isSelected ? "orange-500" : "slate-300"
        } rounded-md p-2 h-28 w-1/2 flex items-start justify-between flex-col hover:border-orange-500`}
        onClick={handleClick}
      >
        <div className="text-left flex items-baseline justify-between w-full">
          <div>
            <h3 className="text-slate-700">Standard</h3>
            <p className="text-slate-400 font-light">5-10 business days</p>
          </div>
          {isSelected && (
            <IconContext.Provider value={{ className: "fill-orange-500" }}>
              <FaCheckCircle />
            </IconContext.Provider>
          )}
        </div>
        <span className="text-slate-700">£{standard}</span>
      </button>
    );
  }

  if (type === "express") {
    return (
      <button
        className={`border border-${
          isSelected ? "orange-500" : "slate-300"
        } rounded-md p-2 h-28 w-1/2 flex items-start justify-between flex-col hover:border-orange-500`}
        onClick={handleClick}
      >
        <div className="text-left flex items-baseline justify-between w-full">
          <div>
            <h3 className="text-slate-700">Express</h3>
            <p className="text-slate-400 font-light">2-5 business days</p>
          </div>
          {isSelected && (
            <IconContext.Provider value={{ className: "fill-orange-500" }}>
              <FaCheckCircle />
            </IconContext.Provider>
          )}
        </div>
        <span className="text-slate-700">£{express}</span>
      </button>
    );
  }
}
