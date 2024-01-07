export default function FooterNewsLetter() {
  return (
    <div className="flex w-1/5 flex-col items-start gap-4 text-slate-200">
      <h4>STAY IN THE KNOW</h4>
      <form className="flex w-full flex-col items-start gap-4">
        <label htmlFor="newsletter">
          Sign up for 10% off your first order.
        </label>
        <input
          className="w-full border-b bg-inherit placeholder:text-slate-300 focus:border-black focus:outline-none focus:placeholder:text-black dark:focus:border-gray-400 dark:focus:placeholder:text-gray-400"
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Enter email address"
        />
        <button className="rounded-sm bg-slate-200 px-14 py-3 text-xs text-black hover:bg-black hover:text-slate-200">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
