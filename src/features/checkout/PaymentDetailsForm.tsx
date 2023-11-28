export default function PaymentDetailsForm() {
  return (
    <form>
      <div>
        <label className="text-sm font-medium text-slate-500" htmlFor="card">
          Card information
        </label>
        <div>
          <input
            className="w-full h-10 border border-slate-300 rounded-t-md p-1"
            id="card"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength={19}
            placeholder="xxxx xxxx xxxx xxxx"
          />
          <div className="flex items-center">
            <input
              className="w-full h-10 border border-t-0 border-slate-300 rounded-bl-md p-1"
              type="text"
              name="expire"
              id="expire"
              placeholder="MM/YY"
            />
            <input
              className="w-full h-10 border border-t-0 border-slate-300 rounded-br-md p-1"
              type="tel"
              name="cvc"
              id="cvc"
              inputMode="numeric"
              maxLength={3}
              pattern="[0-9]"
              placeholder="CVC"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <input
          className="accent-blue-300"
          type="checkbox"
          name="billing"
          id="billing"
        />
        <label className="text-sm font-medium text-slate-500" htmlFor="billing">
          Billing address is same as shipping
        </label>
      </div>
    </form>
  );
}
