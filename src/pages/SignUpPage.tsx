import { useNavigate } from "react-router-dom";
import SignUpForm from "../features/auth/sign-up/SignUpForm";
import FormButton from "../ui/FormButton";

export default function SignUpPage() {
  const navigate = useNavigate();

  return (
    <main className="-mt-10 mb-10 sm:mt-0">
      <div className="items-center sm:flex sm:h-screen">
        <div className="flex h-4/6 flex-col items-center justify-center border-gray-300 px-10 dark:border-gray-500 sm:w-1/4 sm:border-r">
          <h2 className="mb-3 mt-10 text-3xl font-extralight dark:text-white sm:mb-10 sm:mt-10 sm:text-5xl">
            Hello, there!
          </h2>
          <p className="text-center text-lg font-light sm:text-xl">
            Enter your personal details and start shopping with us!
          </p>
          <p className="mt-5 text-center text-sm font-light">
            Already have an account with us?
          </p>
          <FormButton
            type="button"
            title="Sign In"
            onClick={() => navigate("/sign-in")}
          />
        </div>

        <div className="flex flex-col items-center justify-center px-4 pt-10 sm:w-3/4 sm:p-0">
          <h1 className="pb-5 text-center text-3xl font-extralight dark:text-white sm:text-5xl">
            Sign up an Account with Us
          </h1>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
