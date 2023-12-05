export default function ShippingForm() {
  return (
    <form>
      <div className="flex flex-col items-start">
        <label
          className="text-sm font-normal text-slate-500 dark:text-gray-400"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="h-10 w-full rounded-md border border-slate-300 p-1 placeholder:font-light dark:border-gray-500 dark:bg-slate-900"
          type="email"
          name="email"
          title="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="my-4">
        <label
          className="text-sm font-normal text-slate-500 dark:text-gray-400"
          htmlFor="address"
        >
          Shipping address
        </label>
        <div className="flex flex-col items-start">
          <input
            className="h-10 w-full rounded-t-md border border-slate-300 p-1 placeholder:font-light dark:border-gray-500 dark:bg-slate-900"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            title="Name"
          />
          <select
            className="h-10 w-full border  border-b-0 border-t-0 border-slate-300 p-1 text-slate-400 dark:border-gray-500 dark:bg-slate-900"
            name="country"
            id="country"
            title="country"
          >
            <option value="united-kingdom" title="United Kingdom">
              United Kingdom
            </option>
            <option value="spain" title="Spain">
              Spain
            </option>
            <option value="france" title="France">
              France
            </option>
            <option value="germany" title="Germany">
              Germany
            </option>
          </select>
          <input
            className="h-10 w-full rounded-b-md border border-slate-300 p-1 placeholder:font-light dark:border-gray-500 dark:bg-slate-900"
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            title="address"
          />
        </div>
      </div>
    </form>
  );
}
