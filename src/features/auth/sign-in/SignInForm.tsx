import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInUser, type SignInUser } from "../authSlice";
import FormButton from "../../../ui/FormButton";
import NavigationLink from "../../../ui/NavigationLink";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<SignInUser>();
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
      reset;
      navigate(`/users/${userId}`);
    }
  });

  return (
    <form
      className="flex w-2/5 flex-col items-center justify-center"
      onSubmit={onSubmit}
    >
      <div className="flex w-full flex-col items-start justify-center">
        <label
          className="text-base font-light text-slate-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="my-1 w-full rounded-full border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          type="email"
          id="username"
          placeholder="Email"
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address!",
            },
          })}
          disabled={isLoading}
        />
        {errors?.email && (
          <p className="text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <label
          className="text-base font-light text-slate-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="my-1 w-full rounded-full border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: "This field is required!" })}
          disabled={isLoading}
        />
        {errors?.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
      </div>
      <NavigationLink to="/" title="Forgot your password?" />
      <FormButton type="submit" title="Sign In" disabled={isLoading} />
    </form>
  );
}
