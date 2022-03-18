import { submitSignUpHandler } from "./utils/index";
import { Input } from "./components/Input";

export const SignUp = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  setUser,
  setPage
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitSignUpHandler(e, setUser, username, email, password);
      }}
    >
      <h1>Sign up</h1>
      Username:
      <Input setter={setUsername} />
      Email:
      <Input setter={setEmail} />
      Password:
      <Input setter={setPassword} />
      <button type="submit">sign up</button>
    </form>
  );
};

