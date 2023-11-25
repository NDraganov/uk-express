import { useForm } from "react-hook-form";
import SubmitButton from "../../../ui/SubmitButton";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();

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
          placeholder="Email"
          {...register("email")}
          required
        />
      </div>
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="password">
          Password
        </label>
        <input
          className="w-full border border-slate-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400 my-1"
          type="password"
          placeholder="Password"
          {...register("password")}
          required
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
          placeholder="Confirm password"
          {...register("confirmPassword")}
          required
        />
      </div>
      <SubmitButton title="Register" disabled={false} />
    </form>
  );
}
