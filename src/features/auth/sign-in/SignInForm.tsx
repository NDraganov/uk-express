import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInUser, type SignInUser } from "../authSlice";
import SubmitButton from "../../../ui/SubmitButton";

export default function SignInForm() {
  const { register, handleSubmit, setValue } = useForm<SignInUser>();
  const { isLoading, isError, success } = useAppSelector((state) => state.auth);
  const userId = useAppSelector((state) => state.auth.user?.id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    dispatch(signInUser(data));
    if (isError) console.log("Wrong credentials");
    if (success) {
      setValue("email", "");
      setValue("password", "");
      navigate(`/users/${userId}`);
    }
  });

  return (
    <form
      className="flex w-1/5 flex-col items-center justify-center gap-4"
      onSubmit={onSubmit}
    >
      <div className="flex w-full flex-col items-start justify-center">
        <label className="text-lg font-light text-slate-700" htmlFor="username">
          Username
        </label>
        <input
          className="my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          type="email"
          id="username"
          placeholder="Email"
          {...register("email")}
          required
          disabled={isLoading}
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <label className="text-lg font-light text-slate-700" htmlFor="password">
          Password
        </label>
        <input
          className="my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
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
