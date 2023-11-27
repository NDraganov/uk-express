import SignupForm from "../features/auth/register/SignupForm";

export default function RegisterPage() {
  return (
    <main>
      <h1>Reagister Page</h1>
      <div className="flex items-center justify-center h-screen">
        <SignupForm />
      </div>
    </main>
  );
}
