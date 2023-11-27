import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser, type LoginUser } from "../authSlice";
import SubmitButton from "../../../ui/SubmitButton";

export default function LoginForm() {
  const { register, handleSubmit, setValue } = useForm<LoginUser>();
  const { isLoading, isError, success } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    dispatch(loginUser(data));
    if (isError) console.log("Wrong credentials");
    setValue("email", "");
    setValue("password", "");
    if (success) navigate("/");
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
          disabled={isLoading}
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
          disabled={isLoading}
        />
      </div>
      <SubmitButton title="Login" disabled={isLoading} />
    </form>
  );
}
