import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UsersList from "./pages/usersList/usersList";
import NewUserPage from "./components/NewUserPage/NewUserPage";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<MainPage logo={logo} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userlist" element={<UsersList />} />
        <Route path="/signin" element={<NewUserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
