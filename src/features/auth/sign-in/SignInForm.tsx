import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../authSlice";
import { type SignInUser } from "../authTypes";
import FormButton from "../../../ui/FormButton";
import Button from "../../../ui/Button";
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
      navigate(`/users/${userId}/account-information`);
    }
  });

  function demoAccount() {
    setValue("email", "ned@email.com");
    setValue("password", "12345678");
  }

  return (
    <form
      className="flex w-2/5 flex-col items-center justify-center"
      onSubmit={onSubmit}
    >
      <div className="flex w-full flex-col items-start justify-center">
        <input
          className="my-1 w-full rounded-full border border-slate-400 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
          type="email"
          title="Email"
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
        <input
          className="my-1 w-full rounded-full border border-slate-400 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
          type="password"
          title="Password"
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
      <Button title="Demo account" onClick={demoAccount} />
    </form>
  );
}
