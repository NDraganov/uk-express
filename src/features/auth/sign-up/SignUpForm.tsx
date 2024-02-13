import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useForm } from "react-hook-form";
import { signUpUser } from "../authSlice";
import { type Country, type SignUpUser } from "../authTypes";
import FormButton from "../../../ui/FormButton";
import NavigationLink from "../../header/categories-nav/NavigationLink";
import data from "../../../data/CountryCodeData.json";

export default function SignUpForm() {
  const [countries, setCountries] = useState<Country[] | undefined>();
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpUser>();
  const { success, isLoading, isError } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(function () {
    setCountries(data);
  }, []);

  const onSubmit = handleSubmit((data) => {
    dispatch(signUpUser(data));
    if (isError) {
      reset();
    }
    if (success) {
      navigate("/sign-in");
      reset();
    }
  });

  return (
    <form
      className="flex w-full flex-col items-center justify-center sm:w-3/5"
      onSubmit={onSubmit}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="w-full">
          <label
            className="text-base font-light text-black dark:text-gray-400"
            htmlFor="fullName"
          >
            First name
          </label>
          <input
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
            type="text"
            placeholder="First name"
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
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: "This field is required!" })}
            disabled={isLoading}
          />
          {errors?.lastName && (
            <p className="text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-4">
        <div className="w-full">
          <label
            className="text-base font-light text-black dark:text-gray-400"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
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
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
            type="text"
            placeholder="Address"
            {...register("address", { required: "This field is required!" })}
            disabled={isLoading}
          />
          {errors?.address && (
            <p className="text-red-600">{errors.address.message}</p>
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-4">
        <div>
          <label
            className="text-base font-light text-black dark:text-gray-400"
            htmlFor="code"
          >
            Code
          </label>
          <select
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
            {...register("code", { required: "Code is required!" })}
          >
            {countries?.map((country) => (
              <option key={country.country} value={country.calling_code}>
                + {country.calling_code}
              </option>
            ))}
          </select>
          {errors?.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-3/4">
          <label
            className="text-base font-light text-black dark:text-gray-400"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
            type="tel"
            placeholder="Phone number"
            {...register("phone", {
              required: "This field is required!",
              // pattern: {
              //   value:
              //     /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
              //   message: "Please enter a valid phone number!",
              // },
            })}
            disabled={isLoading}
          />
          {errors?.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-4">
        <div className="w-full">
          <label
            className="text-base font-light text-black dark:text-gray-400"
            htmlFor="password"
          >
            Password (min of 8 characters)
          </label>
          <input
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
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
            className="my-1 w-full rounded-full border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
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
      </div>

      <p className="pt-1 text-center text-sm font-light">
        By creating an account, you agree with our{" "}
        <NavigationLink
          type="terms"
          title="Terms & Conditions"
          to="/policies/terms&conditions"
        />
      </p>

      <div className="">
        <FormButton type="submit" title="Sign Up" disabled={isLoading} />
      </div>
    </form>
  );
}
