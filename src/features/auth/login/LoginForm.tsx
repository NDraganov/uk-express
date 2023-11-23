import { type FormEvent } from "react";
import SubmitButton from "../../../ui/SubmitButton";

export default function LoginForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      className="flex items-center justify-center flex-col gap-4 w-1/5"
      onSubmit={handleSubmit}
    >
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="username">
          Username
        </label>
        <input
          className="rounded-md my-1 w-full border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400"
          type="email"
          name="username"
          id="username"
          placeholder="Email"
        />
      </div>
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md my-1 w-full border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <SubmitButton
        title="Login"
        disabled={false}
        onSubmit={() => handleSubmit}
      />
    </form>
  );
}
