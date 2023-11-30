import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  type UpdateUser,
  updateUser,
  signOutUser,
} from "../../../auth/authSlice";
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
    <div>
      <h1>CHANGE PASSWORD</h1>
      <form onSubmit={onSubmit}>
        <div className="grid w-full grid-flow-col grid-cols-4 place-items-start items-center justify-between gap-2">
          <label
            className="text-lg font-light text-slate-700"
            htmlFor="password"
          >
            NEW PASSWORD (min of 8 characters)
          </label>
          <input
            className="col-span-2 my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
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
        <div className="grid w-full grid-flow-col grid-cols-4 place-items-start items-center justify-between gap-2">
          <label
            className="text-lg font-light text-slate-700"
            htmlFor="confirmNewPassword"
          >
            REPEAT PASSWORD
          </label>
          <input
            className="col-span-2 my-1 w-full rounded-md border border-slate-300 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
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
            <p className="text-red-600">{errors.confirmNewPassword.message}</p>
          )}
        </div>
        <FormButton title="Update" type="submit" />
      </form>
    </div>
  );
}
