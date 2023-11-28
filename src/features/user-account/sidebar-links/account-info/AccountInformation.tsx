import { useAppSelector } from "../../../../store/hooks";
import FormButton from "../../../../ui/FormButton";

export default function AccountInformation() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-screen">
      <form className="mx-10 grid h-5/6">
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
            disabled={true}
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
            disabled={true}
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
            disabled={true}
          />
        </div>
        <div className="flex items-center justify-end gap-5">
          <FormButton type="button" title="EDIT" />
          <FormButton type="submit" title="SUBMIT" />
        </div>
      </form>
    </div>
  );
}
