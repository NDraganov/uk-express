import DiscountedButton from "../../ui/DiscountedButton";

export default function BigSale() {
  return (
    <section className="my-10 flex items-center justify-center sm:h-[40rem]">
      <div className="flex flex-col items-start justify-center">
        <p className="-rotate-6 rounded-xl border-8 border-rose-600 px-10 py-4 text-5xl font-extrabold text-rose-600 sm:border-[1rem] sm:text-9xl">
          BIG Sale!!!
        </p>
        <div className="">
          <p className="pt-5 text-2xl font-bold dark:text-white sm:text-6xl">
            Limited{" "}
            <span className="text-3xl text-rose-600 sm:text-7xl">TIME</span>{" "}
            only!
          </p>
          <p className="dark:text-white sm:text-2xl">
            Till next{" "}
            <span className="font-semibold text-rose-600">FRIDAY</span>
          </p>
        </div>
        <DiscountedButton />
      </div>
    </section>
  );
}
