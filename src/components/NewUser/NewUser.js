import Button from "../Button/Button";

const NewUser = ({ classname }) => {
  return (
    <form className="classname">
      <label htmlFor={"name"}>What's your name?</label>
      <input id={"name"} type={"text"}></input>
      <label htmlFor={"username"}>Choose a user name</label>
      <input id={"username"} type={"text"}></input>
      <label htmlFor={"password"}>And a password</label>
      <input id={"password"} type={"password"}></input>
      <label htmlFor={"password-two"}>Write ypur password again</label>
      <input id={"password-two"} type={"password"}></input>
      <Button classname={"signin-button"} text="Sign In" />
    </form>
  );
};

export default NewUser;
