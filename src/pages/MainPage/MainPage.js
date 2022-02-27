import LoginForm from "../../components/LoginForm/LoginForm";

const MainPage = (logo) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm classname={"login-form"} />
        <p>ANARCHO-PUNK SOCIAL NETWORK</p>
      </header>
    </div>
  );
};

export default MainPage;
