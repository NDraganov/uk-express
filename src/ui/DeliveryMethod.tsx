import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addExpressShipping,
  addStandardShipping,
} from "../features/cart/cartSlice";
import { IconContext } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

const standard = 5;
const express = 15;
// const reset = 0;

interface ShippingMethodProps {
  type: "standard" | "express";
}

export default function DeliveryMethod({ type }: ShippingMethodProps) {
  const { isStandard: isStandardSelected, isExpress: isExpressSelected } =
    useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function handleStandardClick() {
    dispatch(addStandardShipping(standard));
  }

  function handleExpressClick() {
    dispatch(addExpressShipping(express));
  }

  if (type === "standard") {
    return (
      <button
        className={`border border-${
          isStandardSelected ? "orange-500" : "slate-300"
        } flex h-28 w-1/2 flex-col items-start justify-between rounded-md p-2 hover:border-orange-400 dark:border-${
          isStandardSelected ? "cyan-500" : "gray-500"
        } dark:hover:border-cyan-300`}
        onClick={handleStandardClick}
        id="standard"
      >
        <div className="flex w-full items-baseline justify-between text-left">
          <div>
            <h3
              className={`dark:text-${
                isStandardSelected ? "cyan-500" : "white"
              }`}
            >
              Standard
            </h3>
            <p className="font-light text-slate-400">5-10 business days</p>
          </div>
          {isStandardSelected && (
            <IconContext.Provider
              value={{ className: "fill-orange-500 dark:fill-cyan-500" }}
            >
              <FaCheckCircle />
            </IconContext.Provider>
          )}
        </div>
        <span
          className={`dark:text-${isStandardSelected ? "cyan-500" : "white"}`}
        >
          £{standard}
        </span>
      </button>
    );
  }

  if (type === "express") {
    return (
      <button
        className={`border border-${
          isExpressSelected ? "orange-500" : "slate-300"
        } flex h-28 w-1/2 flex-col items-start justify-between rounded-md p-2 hover:border-orange-500 dark:border-${
          isExpressSelected ? "cyan-500" : "gray-500"
        } dark:hover:border-cyan-300`}
        onClick={handleExpressClick}
        id="express"
      >
        <div className="flex w-full items-baseline justify-between text-left">
          <div>
            <h3
              className={`dark:text-${
                isExpressSelected ? "cyan-500" : "white"
              }`}
            >
              Express
            </h3>
            <p className="font-light text-slate-400">2-5 business days</p>
          </div>
          {isExpressSelected && (
            <IconContext.Provider
              value={{ className: "fill-orange-500 dark:fill-cyan-500" }}
            >
              <FaCheckCircle />
            </IconContext.Provider>
          )}
        </div>
        <span
          className={`dark:text-${isExpressSelected ? "cyan-500" : "white"}`}
        >
          £{express}
        </span>
      </button>
    );
  }
}
