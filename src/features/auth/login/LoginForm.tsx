import { type FormEvent } from "react";
import SubmitButton from "../../../ui/SubmitButton";

export default function LoginForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="email" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <SubmitButton
        title="Login"
        disabled={false}
        onSubmit={() => handleSubmit}
      />
    </form>
  );
}
