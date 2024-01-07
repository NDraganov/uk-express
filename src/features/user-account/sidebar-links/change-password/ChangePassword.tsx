import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { updateUser, signOutUser } from "../../../auth/authSlice";
import { type UpdateUser } from "../../../auth/authTypes";
import FormButton from "../../../../ui/FormButton";

export default function ChangePassword() {
  const { success, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm<UpdateUser>();

  const onSubmit = handleSubmit((data) => {
    dispatch(updateUser(data));
    if (success) {
      setValue("password", "");
      setValue("confirmNewPassword", "");
      reset;
      dispatch(signOutUser());
    }
  });

  return (
    <div className="flex h-screen items-center justify-center font-light">
      <form className="grid h-4/6 w-1/2" onSubmit={onSubmit}>
        <h1 className="flex items-center justify-start border-b border-gray-300 font-normal dark:border-gray-500 dark:text-cyan-500">
          CHANGE PASSWORD
        </h1>

        <div className="flex items-center justify-between">
          <label htmlFor="password">
            New Password <br />
            (min of 8 characters)
          </label>
          <div className="w-4/6">
            <input
              className="w-full rounded-full border border-slate-300 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
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
              <p className="pt-1 text-red-600 dark:text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="confirmNewPassword">Repeat Password</label>
          <div className="w-4/6">
            <input
              className="w-full rounded-full border border-slate-300 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
              type="password"
              placeholder="Confirm password"
              {...register("confirmNewPassword", {
                required: "This field is required!",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match!",
              })}
              disabled={isLoading}
            />
            {errors?.confirmNewPassword && (
              <p className="pt-1 text-red-600 dark:text-red-500">
                {errors.confirmNewPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end">
          <FormButton title="Update" type="submit" />
        </div>
      </form>
    </div>
  );
}
