import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { signUpUser, type SignUpUser } from "../authSlice";
import FormButton from "../../../ui/FormButton";

export default function SignUpForm() {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpUser>();
  const { success, isLoading, isError } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    dispatch(signUpUser(data));
    if (isError) console.log("Something went wrong!");
    if (success) {
      setValue("firstName", "");
      setValue("lastName", "");
      setValue("email", "");
      setValue("password", "");
      setValue("confirmPassword", "");
      navigate("/sign-in");
    }
    // Navigate to the Home page is set on Supabase
  });

  return (
    <form
      className="flex w-2/5 flex-col items-center justify-center"
      onSubmit={onSubmit}
    >
      <div className="w-full">
        <label
          className="text-base font-light text-black dark:text-gray-400"
          htmlFor="fullName"
        >
          First name
        </label>
        <input
          className="my-1 w-full rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
          type="text"
          placeholder="Full name"
          {...register("firstName", { required: "This field is required!" })}
          disabled={isLoading}
        />
        {errors?.firstName && (
          <p className="text-red-600">{errors.firstName.message}</p>
        )}
      </div>
      <div className="w-full">
        <label
          className="text-base font-light text-black dark:text-gray-400"
          htmlFor="lastName"
        >
          Last name
        </label>
        <input
          className="my-1 w-full rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: "This field is required!" })}
          disabled={isLoading}
        />
        {errors?.lastName && (
          <p className="text-red-600">{errors.lastName.message}</p>
        )}
      </div>
      <div className="w-full">
        <label
          className="text-base font-light text-black dark:text-gray-400"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="my-1 w-full rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
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
      <div className="w-full">
        <label
          className="text-base font-light text-black dark:text-gray-400"
          htmlFor="password"
        >
          Password (min of 8 characters)
        </label>
        <input
          className="my-1 w-full rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
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
      <div className="w-full">
        <label
          className="text-base font-light text-black dark:text-gray-400"
          htmlFor="confirmPassword"
        >
          Repeat password
        </label>
        <input
          className="my-1 w-full rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
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
      <div className="">
        <FormButton type="submit" title="Sign Up" disabled={isLoading} />
      </div>
    </form>
  );
}
