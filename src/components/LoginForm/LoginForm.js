const LoginForm = () => {
  return (
    <form>
      <label htmlFor={"username"}>Enter your user name</label>
      <input id={"username"} type={"text"}></input>
      <label htmlFor={"password"}>And your password</label>
      <input id={"password"} type={"password"}></input>
    </form>
  );
};

export default LoginForm;
