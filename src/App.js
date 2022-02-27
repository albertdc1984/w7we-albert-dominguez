import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm classname={"login-form"} />
        <NewUser />
        <p>ANARCHO-PUNK SOCIAL NETWORK</p>
      </header>
    </div>
  );
}

export default App;
