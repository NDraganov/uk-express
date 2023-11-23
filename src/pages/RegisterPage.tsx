import RegisterForm from "../features/auth/register/RegisterForm";

export default function RegisterPage() {
  return (
    <main>
      <h1>Reagister Page</h1>
      <div className="flex items-center justify-center h-screen">
        <RegisterForm />
      </div>
    </main>
  );
}
