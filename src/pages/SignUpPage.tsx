import SignUpForm from "../features/auth/sign-up/SignUpForm";

export default function SignUpPage() {
  return (
    <main>
      <h1>Sign Up Page</h1>
      <div className="flex h-screen items-center justify-center">
        <SignUpForm />
      </div>
    </main>
  );
}
