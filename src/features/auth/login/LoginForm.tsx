import { useAppDispatch } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { loginUser, type LoginUser } from "../authSlice";
import SubmitButton from "../../../ui/SubmitButton";

export default function LoginForm() {
  const { register, handleSubmit, setValue } = useForm<LoginUser>();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(loginUser(data));
    setValue("email", "");
    setValue("password", "");
  });

  return (
    <form
      className="flex items-center justify-center flex-col gap-4 w-1/5"
      onSubmit={onSubmit}
    >
      <div className="flex items-start justify-center flex-col w-full">
        <label className="text-lg text-slate-700 font-light" htmlFor="username">
          Username
        </label>
        <input
          className="rounded-md my-1 w-full border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400"
          type="email"
          id="username"
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
          className="rounded-md my-1 w-full border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-orange-500 placeholder-slate-400"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
          required
        />
      </div>
      <SubmitButton title="Login" disabled={false} />
    </form>
  );
}
