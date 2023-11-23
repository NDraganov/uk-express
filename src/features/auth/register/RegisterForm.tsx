import { type FormEvent } from "react";
import SubmitButton from "../../../ui/SubmitButton";

export default function RegisterForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      className="flex items-center justify-center flex-col gap-4 w-1/5"
      onSubmit={handleSubmit}
    >
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border border-slate-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400 my-1"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="password">
          Password
        </label>
        <input
          className="w-full border border-slate-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400 my-1"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="flex items-start justify-center flex-col w-full">
        <label
          className="text-lg text-slate-700 font-light"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          className="w-full border border-slate-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400 my-1"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
        />
      </div>
      <SubmitButton
        title="Register"
        disabled={false}
        onSubmit={() => handleSubmit}
      />
    </form>
  );
}
