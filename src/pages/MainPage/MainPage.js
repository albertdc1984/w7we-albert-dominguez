import Header from "../../components/Header/Header";

const MainPage = ({ logo }) => {
  return (
    <div className="App">
      <header className="App-header">
        <Header buttons={true} />
        <img src={logo} className="App-logo" alt="logo" />

        <p>ANARCHO-PUNK SOCIAL NETWORK</p>
      </header>
    </div>
  );
};

export default MainPage;
