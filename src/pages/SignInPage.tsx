import SignInForm from "../features/auth/sign-in/SignInForm";

export default function SignInPage() {
  return (
    <main>
      <h1>Sign In Page</h1>
      <div className="flex h-screen items-center justify-center">
        <SignInForm />
      </div>
    </main>
  );
}
