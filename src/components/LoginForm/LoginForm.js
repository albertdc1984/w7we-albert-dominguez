import "./LoginForm.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/usersThunk";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ classname }) => {
  const emptyDataForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyDataForm);

  const handleForm = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(emptyDataForm);
  };

  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
    resetForm();
    goToPeoplePage();
  };

  const navigate = useNavigate();

  const goToPeoplePage = () => {
    navigate(`/userlist`);
  };
  return (
    <form className="classname" onSubmit={formSubmit}>
      <label htmlFor={"username"}>Username</label>
      <input
        id={"username"}
        type={"text"}
        onChange={handleForm}
        value={formData.username}
        autoComplete={"off"}
      ></input>
      <label htmlFor={"password"}>Password</label>
      <input
        id={"password"}
        type={"password"}
        onChange={handleForm}
        value={formData.password}
      ></input>
      <Button classname={"login-button"} text="Login" type="submit" />
    </form>
  );
};

export default LoginForm;
