import "./LoginForm.css";
import Button from "../Button/Button";

const LoginForm = ({ classname }) => {
  return (
    <form className="classname">
      <label htmlFor={"username"}>Enter your user name</label>
      <input id={"username"} type={"text"}></input>
      <label htmlFor={"password"}>And your password</label>
      <input id={"password"} type={"password"}></input>
      <Button classname={"login-button"} text="Login" />
    </form>
  );
};

export default LoginForm;
