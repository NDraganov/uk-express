import { useNavigate } from "react-router-dom";
import SignUpForm from "../features/auth/sign-up/SignUpForm";
import FormButton from "../ui/FormButton";

export default function SignUpPage() {
  const navigate = useNavigate();

  return (
    <main className="mb-10 mt-20 sm:my-20">
      <div className="items-center sm:flex sm:h-screen">
        <div className="flex h-4/6 flex-col items-center justify-center border-r border-gray-300 px-10 dark:border-gray-500 sm:w-1/4">
          <h2 className="my-10 text-5xl font-extralight dark:text-white">
            Hello, there!
          </h2>
          <p className="text-center text-xl font-light">
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
          <h1 className="pb-5 text-center text-5xl font-extralight dark:text-white">
            Sign up an Account with Us
          </h1>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
