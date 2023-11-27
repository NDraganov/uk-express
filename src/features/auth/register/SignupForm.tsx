import { useForm } from "react-hook-form";
import SubmitButton from "../../../ui/SubmitButton";

export default function SignupForm() {
  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      className="flex items-center justify-center flex-col gap-4 w-1/5"
      onSubmit={onSubmit}
    >
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="fullName">
          Full name
        </label>
        <input
          className="w-full border border-slate-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400 my-1"
          type="text"
          placeholder="Full name"
          {...register("fullName", { required: "This field is required!" })}
          required
        />
      </div>
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border border-slate-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400 my-1"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address!",
            },
          })}
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
          {...register("password", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters!",
            },
          })}
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
          {...register("confirmPassword", {
            required: "This field is required!",
            validate: (value) =>
              value === getValues().password || "Passwords need to match!",
          })}
          required
        />
      </div>
      <SubmitButton title="Register" disabled={false} />
    </form>
  );
}
