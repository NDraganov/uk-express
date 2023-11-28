export default function ShippingForm() {
  return (
    <form>
      <div className="flex items-start flex-col">
        <label className="text-slate-500 font-medium text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="border border-slate-300 rounded-md h-10 w-full p-1"
          type="email"
          name="email"
          id="email"
          title="email"
        />
      </div>
      <div className="my-4">
        <label className="text-slate-500 font-medium text-sm" htmlFor="address">
          Shipping address
        </label>
        <div className="flex items-start flex-col">
          <input
            className="border border-slate-300 rounded-t-md h-10 w-full p-1"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            title="Name"
          />
          <select
            className="border border-slate-300 border-t-0 border-b-0 h-10 w-full p-1 text-slate-400"
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
            className="border border-slate-300 rounded-b-md h-10 w-full p-1"
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
