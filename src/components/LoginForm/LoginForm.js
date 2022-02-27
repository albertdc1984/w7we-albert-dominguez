import "./LoginForm.css";
import Button from "../Button/Button";

const LoginForm = ({ classname }) => {
  return (
    <form className="classname">
      <label htmlFor={"username"}>Username</label>
      <input id={"username"} type={"text"} autoComplete={"off"}></input>
      <label htmlFor={"password"}>Password</label>
      <input id={"password"} type={"password"}></input>
      <Button classname={"login-button"} text="Login" />
    </form>
  );
};

export default LoginForm;
