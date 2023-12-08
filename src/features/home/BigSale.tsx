export default function BigSale() {
  return (
    <section className="flex h-[40rem] flex-col items-start justify-center pl-96">
      <h3 className="-rotate-6 rounded-xl border-[1rem] border-rose-600 px-10 py-4 text-9xl font-extrabold text-rose-600">
        BIG Sale!!!
      </h3>
      <div className="">
        <p className="pt-5 text-6xl font-bold dark:text-white">
          Limited <span className="text-7xl text-rose-600">TIME</span> only!
        </p>
        <p className="text-2xl dark:text-white">
          Till next <span className="font-semibold text-rose-600">FRIDAY</span>
        </p>
      </div>
    </section>
  );
}
