import { useNavigate } from "react-router-dom";
import SignInForm from "../features/auth/sign-in/SignInForm";
import FormButton from "../ui/FormButton";

export default function SignInPage() {
  const navigate = useNavigate();

  return (
    <main className="my-20">
      <div className="flex h-screen items-center">
        <div className="flex w-3/4 flex-col items-center justify-center">
          <h1 className="mb-5 text-5xl font-semibold text-black">
            Sign in to Your Account
          </h1>
          <SignInForm />
        </div>
        <div className="flex h-4/6 w-1/4 flex-col items-center justify-center border-l border-gray-300  px-10 text-black">
          <h2 className="mb-10 text-5xl">New here?</h2>
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
