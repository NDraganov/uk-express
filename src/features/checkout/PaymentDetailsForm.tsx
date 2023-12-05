export default function PaymentDetailsForm() {
  return (
    <form>
      <div>
        <label
          className="text-sm font-medium text-slate-500 dark:text-gray-400"
          htmlFor="card"
        >
          Card information
        </label>
        <div>
          <input
            className="h-10 w-full rounded-t-md border border-slate-300 p-1 placeholder:font-light dark:border-gray-500 dark:bg-slate-900"
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
              className="dark:bg-slate-90 h-10 w-full rounded-bl-md border border-t-0 border-slate-300 p-1 placeholder:font-light dark:border-gray-500 dark:bg-slate-900"
              type="text"
              name="expire"
              id="expire"
              placeholder="MM/YY"
            />
            <input
              className="dark:bg-slate-90 h-10 w-full rounded-br-md border border-t-0 border-slate-300 p-1 placeholder:font-light dark:border-gray-500 dark:bg-slate-900"
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
        <input type="checkbox" name="billing" id="billing" />
        <label
          className="text-sm font-medium text-slate-500 dark:text-gray-400"
          htmlFor="billing"
        >
          Billing address is same as shipping
        </label>
      </div>
    </form>
  );
}
