import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addExpressShipping,
  addStandardShipping,
} from "../features/cart/cartSlice";
import Icon from "./Icon";
import { FaCheckCircle } from "react-icons/fa";

const standard = 5;
const express = 15;

interface ShippingMethodProps {
  type: "standard" | "express";
}

export default function DeliveryMethod({ type }: ShippingMethodProps) {
  const {
    isStandard: isStandardSelected,
    isExpress: isExpressSelected,
    standardDays,
    expressDays,
    isFreeShipping,
  } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (type === "standard") {
    return (
      <button
        className={`flex h-28 w-1/2 flex-col items-start justify-between rounded-md border p-2 hover:border-orange-400 dark:hover:border-cyan-300 ${
          isStandardSelected
            ? "border-orange-500 dark:border-cyan-500"
            : "border-slate-300 dark:border-gray-500"
        }`}
        title="Standard delivery"
        onClick={() => dispatch(addStandardShipping(standard))}
        id="standard"
      >
        <div className="flex w-full items-baseline justify-between text-left">
          <div>
            <p
              className={`${
                isStandardSelected ? "dark:text-cyan-500" : "dark:text-white"
              }`}
            >
              Standard
            </p>
            <p className="font-light text-slate-400 dark:text-gray-400">
              {standardDays} business days
            </p>
          </div>
          {isStandardSelected && (
            <Icon value={{ className: "fill-orange-500 dark:fill-cyan-500" }}>
              <FaCheckCircle />
            </Icon>
          )}
        </div>
        <div>
          <span
            className={`${
              isStandardSelected ? "dark:text-cyan-500" : "dark:text-white"
            }`}
          >
            £{isFreeShipping ? "0" : standard}
          </span>
          <span className="text-sm font-light text-slate-500 dark:text-gray-400">
            {isFreeShipping && " Eligible for free shipping"}
          </span>
        </div>
      </button>
    );
  }

  if (type === "express") {
    return (
      <button
        className={`flex h-28 w-1/2 flex-col items-start justify-between rounded-md border p-2 hover:border-orange-500  dark:hover:border-cyan-300 ${
          isExpressSelected
            ? "border-orange-500 dark:border-cyan-500"
            : "border-slate-300 dark:border-gray-500"
        }`}
        title="Express delivery"
        onClick={() => dispatch(addExpressShipping(express))}
        id="express"
      >
        <div className="flex w-full items-baseline justify-between text-left">
          <div>
            <p
              className={`${
                isExpressSelected ? "dark:text-cyan-500" : "dark:text-white"
              }`}
            >
              Express
            </p>
            <p className="font-light text-slate-400 dark:text-gray-400">
              {expressDays} business days
            </p>
          </div>
          {isExpressSelected && (
            <Icon value={{ className: "fill-orange-500 dark:fill-cyan-500" }}>
              <FaCheckCircle />
            </Icon>
          )}
        </div>
        <span
          className={`${
            isExpressSelected ? "dark:text-cyan-500" : "dark:text-white"
          }`}
        >
          £{express}
        </span>
      </button>
    );
  }
}
