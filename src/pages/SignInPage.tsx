import { useNavigate } from "react-router-dom";
import SignInForm from "../features/auth/sign-in/SignInForm";
import FormButton from "../ui/FormButton";

export default function SignInPage() {
  const navigate = useNavigate();

  return (
    <main className="mb-4">
      <div className="flex flex-col-reverse items-center sm:flex sm:h-screen sm:flex-row">
        <div className="flex flex-col items-center justify-center px-4 pt-10 sm:w-3/4 sm:p-0">
          <h1 className="mb-5 text-center text-5xl font-extralight dark:text-white">
            Sign in to Your Account
          </h1>
          <SignInForm />
        </div>

        <div className="flex flex-col items-center justify-center border-gray-300 px-4 dark:border-gray-500 sm:h-4/6 sm:w-1/4 sm:border-l sm:px-10">
          <h2 className="mb-10 text-5xl font-extralight dark:text-white">
            New here?
          </h2>
          <p className="text-center text-xl font-light">
            Sign up and discover a great amount of amazing products!
          </p>
          <FormButton
            type="button"
            title="Sign Up"
            onClick={() => navigate("/sign-up")}
          />
        </div>
      </div>
    </main>
  );
}
