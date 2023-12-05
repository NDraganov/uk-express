import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  type UpdateUser,
  updateUser,
  signOutUser,
} from "../../../auth/authSlice";
import FormButton from "../../../../ui/FormButton";

export default function AccountInformation() {
  const [isActive, setIsActive] = useState(false);
  const { isLoading, success } = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUser>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    dispatch(updateUser(data));
    if (success) {
      navigate("/sign-in");
      dispatch(signOutUser());
    }
  });

  function onEdit() {
    setIsActive(true);
  }

  function onCancel() {
    setIsActive(false);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="grid h-4/6  w-1/2" onSubmit={onSubmit}>
        <h1 className="flex items-center justify-start border-b border-gray-300 font-normal dark:text-cyan-500">
          ACCOUNT INFORMATION
        </h1>

        <div className="flex items-center justify-between">
          <label className="font-light" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-4/6 rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
            type="text"
            id="firstName"
            title="First name"
            placeholder={user?.user_metadata.firstName}
            {...register("firstName")}
            disabled={!isActive || isLoading}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="font-light" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="w-4/6 rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
            type="text"
            id="lastName"
            title="Last name"
            placeholder={user?.user_metadata.lastName}
            {...register("lastName")}
            disabled={!isActive || isLoading}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="font-light" htmlFor="email">
            Email Address
          </label>
          <div className="w-4/6">
            <input
              className="w-full rounded-full border border-slate-300 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
              type="email"
              id="email"
              title="Email"
              placeholder={user?.email}
              disabled={!isActive || isLoading}
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address!",
                },
              })}
            />
            {errors?.email && (
              <p className="pt-1 text-red-600 dark:text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end gap-5">
          {isActive ? (
            <FormButton
              type="button"
              title="Cancel"
              onClick={() => onCancel()}
            />
          ) : (
            <FormButton type="button" title="Edit" onClick={() => onEdit()} />
          )}

          <FormButton type="submit" title="Update" />
        </div>
      </form>
    </div>
  );
}
