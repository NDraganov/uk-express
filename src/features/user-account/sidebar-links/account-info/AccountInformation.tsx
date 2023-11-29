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
      navigate("/");
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
    <div className="h-screen">
      <form className="mx-10 grid h-5/6" onSubmit={onSubmit}>
        <h1 className="flex items-center justify-start border-b-2 border-gray-200 font-bold text-black">
          ACCOUNT INFORMATION
        </h1>
        <div className="flex items-center justify-between border-b-2 border-gray-200 pr-96 font-bold text-black">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            className="rounded-sm border border-gray-400 placeholder:text-xl placeholder:font-light placeholder:text-gray-400"
            type="text"
            id="firstName"
            title="First name"
            placeholder={user?.user_metadata.firstName}
            {...register("firstName")}
            disabled={!isActive || isLoading}
          />
        </div>
        <div className="flex items-center justify-between border-b-2 border-gray-200 pr-96 font-bold text-black">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            className="rounded-sm border border-gray-400 placeholder:text-xl placeholder:font-light placeholder:text-gray-400"
            type="text"
            id="lastName"
            title="Last name"
            placeholder={user?.user_metadata.lastName}
            {...register("lastName")}
            disabled={!isActive || isLoading}
          />
        </div>
        <div className="mb-8 flex items-center justify-between border-b-2 border-gray-200 pr-96 font-bold text-black">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            className="rounded-sm border border-gray-400 placeholder:text-xl placeholder:font-light placeholder:text-gray-400"
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
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="flex items-center justify-end gap-5">
          {isActive && (
            <FormButton
              type="button"
              title="CANCEL"
              onClick={() => onCancel()}
            />
          )}
          <FormButton type="button" title="EDIT" onClick={() => onEdit()} />
          <FormButton type="submit" title="UPDATE" />
        </div>
      </form>
    </div>
  );
}
