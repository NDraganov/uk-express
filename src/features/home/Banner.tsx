export default function Banner() {
  return (
    <div className="flex items-center overflow-x-hidden bg-rose-600 py-1 text-lg font-medium text-slate-800">
      <div className="flex animate-banner items-center whitespace-nowrap">
        <p className="mx-4">
          Free shipping for orders over{" "}
          <span className="animate-pulse font-semibold text-white">£100</span>
        </p>
        <p className="mx-4">
          Everything under{" "}
          <span className="animate-pulse font-semibold text-white">£500</span>{" "}
          and over{" "}
          <span className="animate-pulse font-semibold text-white">£1000</span>{" "}
          on sale
        </p>
      </div>

      <div className="flex animate-banner2 items-center whitespace-nowrap">
        <p className="mx-4">
          Free shipping for orders over{" "}
          <span className="animate-pulse font-semibold text-white">£100</span>
        </p>
        <p className="mx-4">
          Everything under{" "}
          <span className="animate-pulse font-semibold text-white">£500</span>{" "}
          and over{" "}
          <span className="animate-pulse font-semibold text-white">£1000</span>{" "}
          on sale
        </p>
      </div>
    </div>
  );
}
