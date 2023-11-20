const standard = 5;
const express = 15;

interface ShippingMethodProps {
  type: "standard" | "express";
}

export default function DeliveryMethod({ type }: ShippingMethodProps) {
  if (type === "express") {
    return (
      <button className="border border-slate-300 rounded-md p-2 h-28 w-1/2 flex items-start justify-between flex-col">
        <div className="text-left">
          <h3 className="text-slate-700">Express</h3>
          <p className="text-slate-400 font-light">2-5 business days</p>
        </div>
        <span className="text-slate-700">£{express}</span>
      </button>
    );
  }
  if (type === "standard") {
    return (
      <button className="border border-slate-300 rounded-md p-2 h-28 w-1/2 flex items-start justify-between flex-col">
        <div className="text-left">
          <h3 className="text-slate-700">Standard</h3>
          <p className="text-slate-400 font-light">5-10 business days</p>
        </div>
        <span className="text-slate-700">£{standard}</span>
      </button>
    );
  }
}
