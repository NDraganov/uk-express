import { type FormEvent } from "react";
import SubmitButton from "../../../ui/SubmitButton";

export default function RegisterForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="email" name="confirmPassword" id="confirmPassword" />
      </div>
      <SubmitButton
        title="Register"
        disabled={false}
        onSubmit={() => handleSubmit}
      />
    </form>
  );
}
