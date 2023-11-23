import LoginForm from "../features/auth/login/LoginForm";

export default function LoginPage() {
  return (
    <main>
      <h1>Login Page</h1>
      <div className="flex items-center justify-center h-screen">
        <LoginForm />
      </div>
    </main>
  );
}
