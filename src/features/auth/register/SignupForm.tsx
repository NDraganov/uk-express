import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { signUpUser, type SignUpUser } from "../authSlice";
import SubmitButton from "../../../ui/SubmitButton";

export default function SignupForm() {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpUser>();
  const { success, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(signUpUser(data));
    console.log(data);
    if (success) {
      setValue("fullName", "");
      setValue("email", "");
      setValue("password", "");
      setValue("confirmPassword", "");
    }
    // Navigate to the Home page is set on Supabase
  });

  return (
    <form
      className="flex w-1/5 flex-col items-center justify-center gap-4"
      onSubmit={onSubmit}
    >
      <div className="flex w-full flex-col items-start justify-center">
        <label className="text-lg font-light text-slate-700" htmlFor="fullName">
          Full name
        </label>
        <input
          className="my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          type="text"
          placeholder="Full name"
          {...register("fullName", { required: "This field is required!" })}
          disabled={isLoading}
        />
        {errors?.fullName && (
          <p className="text-red-600">{errors.fullName.message}</p>
        )}
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <label className="text-lg font-light text-slate-700" htmlFor="email">
          Email address
        </label>
        <input
          className="my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          type="email"
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
        <label className="text-lg font-light text-slate-700" htmlFor="password">
          Password (min of 8 characters)
        </label>
        <input
          className="my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters!",
            },
          })}
          disabled={isLoading}
        />
        {errors?.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <label
          className="text-lg font-light text-slate-700"
          htmlFor="confirmPassword"
        >
          Repeat password
        </label>
        <input
          className="my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "This field is required!",
            validate: (value) =>
              value === getValues().password || "Passwords need to match!",
          })}
          disabled={isLoading}
        />
        {errors?.confirmPassword && (
          <p className="text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>
      <SubmitButton title="Register" disabled={isLoading} />
    </form>
  );
}
