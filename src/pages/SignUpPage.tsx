import { useNavigate } from "react-router-dom";
import SignUpForm from "../features/auth/sign-up/SignUpForm";
import FormButton from "../ui/FormButton";

export default function SignUpPage() {
  const navigate = useNavigate();

  return (
    <main className="my-20">
      <div className="flex h-screen items-center">
        <div className="flex h-4/6 w-1/4 flex-col items-center justify-center border-r border-gray-300 px-10 dark:border-gray-500">
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
        <div className="flex w-3/4 flex-col items-center justify-center">
          <h1 className="mb-5 text-5xl font-extralight dark:text-white">
            Sign up an Account with Us
          </h1>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
