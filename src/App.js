import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage logo={logo} />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
